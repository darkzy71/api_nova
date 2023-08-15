require('./configuração');
const express = require('express');
const app = express();
const session = require('express-session'); 
const cookieParser = require('cookie-parser');
const expressLayout = require('express-ejs-layouts');
const rateLimit = require("express-rate-limit");
const passport = require('passport');
const flash = require('connect-flash');
const axios = require('axios')
const MemoryStore = require('memorystore')(session);
const compression = require('compression');
const ms = require('ms');
const fs = require('fs')
const favicon = require('serve-favicon');
const multer = require('multer');
const schedule = require('node-schedule');
const responseTime = require('response-time')
const path = require('path');
const moment = require('moment-timezone')
const time = moment().format('DD/MM HH:mm:ss')


const { usuario, Utils, ig } = require('./backend/modelagem')
const { verificaNome, verificaNome2, verificaAdmin, checkVerify, verificaDinheiro2, dinheiroadd, dinheiroretirar, niveladd, nivelretirar, verificanivel, verificanivel2, verificaVerif, expadd, expretirar, verificaexp, verificaexp2, uplvl, addUtil, addRequest,  getTotalReq, getTodayReq, getidveri, verificaAll, verificaZap, tempo_ban, banir, verificar_dias_ban, resetAllLimit, resetarAllTributers, salvardd, verificaNomeig, verificaCodiguin, addcodiguin } = require('./backend/db');
const { isAuthenticated } = require('./func.backend/auth');
const { connectMongoDb } = require('./backend/connect');
const { getTotalUser, verificar_dias_expirados, verificar_img, tempo_expirado, adicionar_premium, deletar_premium, checkPremium } = require('./backend/premium');
const { getHashedPassword, randomText } = require('./func.backend/function');


const apiRouters = require('./servidor.backend/api');
const userRouters = require('./servidor.backend/users');
const premiumRouters = require('./servidor.backend/premium');
const verifyRouters = require('./servidor.backend/verify');
const { enviarnozap, enviarnozap_button, enviarimg } = require('./ayubot.js');

var achou = false;
var countNumber = -1;
var countChat = -1;

connectMongoDb();

app.set('trust proxy', 1);
app.use(compression())

 

const limiter = rateLimit({
windowMs: 1 * 60 * 1000, 
max: 2000, 
message: 'o site está tendo muitas requisições'
});
app.use(limiter);

app.use(favicon('./views/icone.ico'));

app.set('view engine', 'ejs');
app.use(expressLayout);
app.use(express.static('public'));

app.use(session({
secret: 'secret',
resave: true,
saveUninitialized: true,
cookie: { maxAge: 86400000 },
store: new MemoryStore({
checkPeriod: 86400000
}),
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());
require('./func.backend/passaporte_configu')(passport);

app.use(flash());


app.use(function(req, res, next) {
res.locals.success_msg = req.flash('success_msg');
res.locals.error_msg = req.flash('error_msg');
res.locals.error = req.flash('error');
res.locals.user = req.user || null;
next();
})


app.use('/api', apiRouters);
app.use('/i', userRouters);
app.use('/admin', premiumRouters);
app.use('/verificar', verifyRouters);

if (!fs.existsSync('./public/file')) fs.mkdirSync('./public/file')

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function abreviark(valor) {
    var abreviado = new Intl.NumberFormat( 'pt-BR', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(valor)
    return abreviado;
}



function abreviar(num) {
     if (num >= 1000000000000000000000000000000000) {
        return (num / 1000000000000000000000000000000000).toFixed(1).replace(/\.0$/, '') + ' d';
     }
     if (num >= 1000000000000000000000000000000) {
        return (num / 1000000000000000000000000000000).toFixed(1).replace(/\.0$/, '') + ' n';
     }
     if (num >= 1000000000000000000000000000) {
        return (num / 1000000000000000000000000000).toFixed(1).replace(/\.0$/, '') + ' o';
     }     
     if (num >= 1000000000000000000000000) {
        return (num / 1000000000000000000000000).toFixed(1).replace(/\.0$/, '') + ' sep';
     }     
     
     if (num >= 1000000000000000000000) {
        return (num / 1000000000000000000000).toFixed(1).replace(/\.0$/, '') + ' sex';
     }
     if (num >= 1000000000000000000) {
        return (num / 1000000000000000000).toFixed(1).replace(/\.0$/, '') + ' qui';
     }
     if (num >= 1000000000000000) {
        return (num / 1000000000000000).toFixed(1).replace(/\.0$/, '') + ' qua';
     }     
     if (num >= 1000000000000) {
        return (num / 1000000000000).toFixed(1).replace(/\.0$/, '') + ' tri';
     }          
                
     if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + ' bi';
     }
     if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + ' mi';
     }
     if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + ' mil';
     }
     return num;
}

async function fetchJson(url, options) {
	try {
		options ? options: {}
		const res = await axios({
			method: 'GET',
			url: url,
			headers: {
				'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
			},
			...options
		})
		return res.data
	} catch (err) {
		return err
	}
}

app.use(function(req, res, next) {
  addRequest();
  next();
})

const storage = multer.diskStorage({
    destination: 'public/file',
    filename: (req, file, cb) => {
        cb(null, makeid(5) +
            path.extname(file.originalname))
    }
});

const upload = multer({
    storage,
    limits: {
        fileSize: 100000000 // 100 MB
    }
})

app.get('/upload', async (req, res) => { 
let userjid = await getTotalUser()
res.render('uploadakame', {
layout: 'uploadakame'
});
});

app.get('/bemvindo', (req, res) => {
  res.render('welcome', {
    layout: 'welcome'
  });
});

app.get('/phlogo', (req, res) => {
  res.render('ph', {
    layout: 'ph'
  });
});

app.get('/biancateamo', (req, res) => {
  res.render('bianca', {
    layout: 'bianca'
  });
});


app.post('/arquivo', upload.single('file'), (req, res) => {
    if (!req.file.path) return res.status(400).json({
        status: false,
        mensagem: "Nenhum arquivo foi carregado"
    })
    res.status(200).json({
        status: true,
        criador: "@breno",
        resultado: {
            nomeoriginal: req.file.originalname,
            encoding: req.file.encoding,
            tipo: req.file.mimetype,
            tamanho: req.file.size,
            link: "https://" + req.hostname + "/file/" + req.file.filename
        }
    })
}, (error, req, res, next) => {
    res.status(400).json({
        error: error.message
    })
})

app.post('/multi-upload', upload.array('files', 10), (req, res) => {
    if (!req.files) return res.status(400).json({
        status: false,
        mensagem: "Nenhum arquivo foi carregado"
    })
    const resultado = []
    req.files.forEach(v => {
        resultado.push({
            nomeoriginal: v.originalname,
            encoding: v.encoding,
            tipo: v.mimetype,
            tamanho: v.size,
            link: "https://" + req.hostname + "/file/" + v.filename
        })
    });
    res.status(200).json({
        status: true,
        criador: "@breno",
        resultado: resultado
    })
})

app.get('/resgatar', isAuthenticated, async (req, res) => { 
let userjid = await getTotalUser()
let {
		apikey, nome_usuario, limit, premium, totalreq, numero_zap, admin, perfil, dinheiro, nivel, exp, banido, motivo_ban
	} = req.user
	let reqXp  = 5000 * (Math.pow(2, nivel) - 1);
let cekeban = ms(banido - Date.now())
let expiredban = '0 d'
let exp_abreviado = new Intl.NumberFormat( 'pt-BR', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(exp)
let dinheiro_abreviado = new Intl.NumberFormat( 'pt-BR', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(dinheiro)
let req_abreviado = new Intl.NumberFormat( 'pt-BR', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(totalreq)
let limit_abreviado = new Intl.NumberFormat( 'pt-BR', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(limit)
	if (cekeban !== null) {
		expiredban = cekeban
	}
		if (banido !== null) {
		res.render('banido', {
		expiredban,
		motivo_ban,
			layout: 'banido'
		});
} else {
res.render('resgatar', {
		nome_usuario,
		apikey,
		limit,
		premium,
		totalreq,
		dinheiro,
		nivel,
		exp,
		admin,
		reqXp,
		abreviar,
layout: 'resgatar'
});
}
});

app.get('/docs/especial', isAuthenticated, async (req, res) => { 
let userjid = await getTotalUser()
let {
		apikey, nome_usuario, limit, premium, totalreq, numero_zap, admin, perfil, dinheiro, nivel, exp, banido, motivo_ban
	} = req.user
	let reqXp  = 5000 * (Math.pow(2, nivel) - 1);
let cekeban = ms(banido - Date.now())
let expiredban = '0 d'
let exp_abreviado = new Intl.NumberFormat( 'pt-BR', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(exp)
let dinheiro_abreviado = new Intl.NumberFormat( 'pt-BR', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(dinheiro)
let req_abreviado = new Intl.NumberFormat( 'pt-BR', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(totalreq)
let limit_abreviado = new Intl.NumberFormat( 'pt-BR', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(limit)
	if (cekeban !== null) {
		expiredban = cekeban
	}
		if (banido !== null) {
		res.render('banido', {
		expiredban,
		motivo_ban,
			layout: 'banido'
		});
} else {
res.render('especial', {
		nome_usuario,
		apikey,
		limit,
		premium,
		totalreq,
		dinheiro,
		nivel,
		exp,
		admin,
		reqXp,
		abreviar,
layout: 'especial'
});
}
});

app.get('/docs/ferramentas', isAuthenticated, async (req, res) => { 
let userjid = await getTotalUser()
let {
		apikey, nome_usuario, limit, premium, totalreq, numero_zap, admin, perfil, dinheiro, nivel, exp, banido, motivo_ban
	} = req.user
	let reqXp  = 5000 * (Math.pow(2, nivel) - 1);
let cekeban = ms(banido - Date.now())
let expiredban = '0 d'
	if (cekeban !== null) {
		expiredban = cekeban
	}
		if (banido !== null) {
		res.render('banido', {
		expiredban,
		motivo_ban,
			layout: 'banido'
		});
} else {
res.render('ferramentas', {
		nome_usuario,
		apikey,
		limit,
		premium,
		totalreq,
		dinheiro,
		nivel,
		exp,
		admin,
		reqXp,
		abreviar,
layout: 'ferramentas'
});
}
});

app.get('/docs/download', isAuthenticated, async (req, res) => { 
let userjid = await getTotalUser()
let {
		apikey, nome_usuario, limit, premium, totalreq, numero_zap, admin, perfil, dinheiro, nivel, exp, banido, motivo_ban
	} = req.user
	let reqXp  = 5000 * (Math.pow(2, nivel) - 1);
let cekeban = ms(banido - Date.now())
let expiredban = '0 d'
	if (cekeban !== null) {
		expiredban = cekeban
	}
		if (banido !== null) {
		res.render('banido', {
		expiredban,
		motivo_ban,
			layout: 'banido'
		});
} else {
res.render('download', {
		nome_usuario,
		apikey,
		limit,
		premium,
		totalreq,
		dinheiro,
		nivel,
		exp,
		admin,
		reqXp,
		abreviar,
layout: 'download'
});
}
});

app.get('/docs/textpro', isAuthenticated, async (req, res) => { 
let userjid = await getTotalUser()
let {
		apikey, nome_usuario, limit, premium, totalreq, numero_zap, admin, perfil, dinheiro, nivel, exp, banido, motivo_ban
	} = req.user
	let reqXp  = 5000 * (Math.pow(2, nivel) - 1);
let cekeban = ms(banido - Date.now())
let expiredban = '0 d'
	if (cekeban !== null) {
		expiredban = cekeban
	}
		if (banido !== null) {
		res.render('banido', {
		expiredban,
		motivo_ban,
			layout: 'banido'
		});
} else {
res.render('textpro', {
		nome_usuario,
		apikey,
		limit,
		premium,
		totalreq,
		dinheiro,
		nivel,
		exp,
		admin,
		reqXp,
		abreviar,
layout: 'textpro'
});
}
});

app.get('/docs/pesquisa', isAuthenticated, async (req, res) => { 
let userjid = await getTotalUser()
let {
		apikey, nome_usuario, limit, premium, totalreq, numero_zap, admin, perfil, dinheiro, nivel, exp, banido, motivo_ban
	} = req.user
	let reqXp  = 5000 * (Math.pow(2, nivel) - 1);
let cekeban = ms(banido - Date.now())
let expiredban = '0 d'
	if (cekeban !== null) {
		expiredban = cekeban
	}
		if (banido !== null) {
		res.render('banido', {
		expiredban,
		motivo_ban,
			layout: 'banido'
		});
} else {
res.render('pesquisa', {
		nome_usuario,
		apikey,
		limit,
		premium,
		totalreq,
		dinheiro,
		nivel,
		exp,
		admin,
		reqXp,
		abreviar,
layout: 'pesquisa'
});
}
});

app.get('/docs/canvas', isAuthenticated, async (req, res) => { 
let userjid = await getTotalUser()
let {
		apikey, nome_usuario, limit, premium, totalreq, numero_zap, admin, perfil, dinheiro, nivel, exp, banido, motivo_ban
	} = req.user
	let reqXp  = 5000 * (Math.pow(2, nivel) - 1);
let cekeban = ms(banido - Date.now())
let expiredban = '0 d'
	if (cekeban !== null) {
		expiredban = cekeban
	}
		if (banido !== null) {
		res.render('banido', {
		expiredban,
		motivo_ban,
			layout: 'banido'
		});
} else {
res.render('canvas', {
		nome_usuario,
		apikey,
		limit,
		premium,
		totalreq,
		dinheiro,
		nivel,
		exp,
		admin,
		reqXp,
		abreviar,
layout: 'canvas'
});
}
});

app.get('/docs/porno', isAuthenticated, async (req, res) => { 
let userjid = await getTotalUser()
let {
		apikey, nome_usuario, limit, premium, totalreq, numero_zap, admin, perfil, dinheiro, nivel, exp, banido, motivo_ban
	} = req.user
	let reqXp  = 5000 * (Math.pow(2, nivel) - 1);
let cekeban = ms(banido - Date.now())
let expiredban = '0 d'
	if (cekeban !== null) {
		expiredban = cekeban
	}
		if (banido !== null) {
		res.render('banido', {
		expiredban,
		motivo_ban,
			layout: 'banido'
		});
} else {
res.render('porno', {
		nome_usuario,
		apikey,
		limit,
		premium,
		totalreq,
		dinheiro,
		nivel,
		exp,
		admin,
		reqXp,
		abreviar,
layout: 'porno'
});
}
});

app.get('/docs/outros', isAuthenticated, async (req, res) => { 
let userjid = await getTotalUser()
let {
		apikey, nome_usuario, limit, premium, totalreq, numero_zap, admin, perfil, dinheiro, nivel, exp, banido, motivo_ban
	} = req.user
	let reqXp  = 5000 * (Math.pow(2, nivel) - 1);
let cekeban = ms(banido - Date.now())
let expiredban = '0 d'
	if (cekeban !== null) {
		expiredban = cekeban
	}
		if (banido !== null) {
		res.render('banido', {
		expiredban,
		motivo_ban,
			layout: 'banido'
		});
} else {
res.render('outros', {
		nome_usuario,
		apikey,
		limit,
		premium,
		totalreq,
		dinheiro,
		nivel,
		exp,
		admin,
		reqXp,
		abreviar,
layout: 'outros'
});
}
});

app.get('/', (req, res) => {
res.render('inicial', {
layout: 'inicial'
});
});


app.get('/docs', isAuthenticated, async (req, res) => { 
let userjid = await getTotalUser()
let total = await getTotalReq()
let today = await getTodayReq()
let {
		apikey, nome_usuario, limit, premium, totalreq, numero_zap, admin, perfil, dinheiro, nivel, exp, banido, motivo_ban, musica
	} = req.user
	let cekexp = ms(await verificar_dias_expirados(nome_usuario) - Date.now())
	let expired = '0 d'
	let ppcheck = await verificar_img(nome_usuario)
	let Lista = await usuario.find({})
	let reqXp  = 5000 * (Math.pow(2, nivel) - 1);
	if (cekexp !== null) {
		expired = cekexp
	}
	let imgpadrao = 'https://telegra.ph/file/60b4caf561c9585eb8dd0.jpg'
        let mscpadrao = 'https://ayu-api.cf/audio/musica.mp3'
	let cekeban = ms(banido - Date.now())
let expiredban = '0 d'
	if (cekeban !== null) {
		expiredban = cekeban
	}
		if (banido !== null) {
		res.render('banido', {
		expiredban,
		motivo_ban,
			layout: 'banido'
		});
} else {
res.render('docs', {
		nome_usuario,
		apikey,
		limit,
		premium,
		totalreq,
		totalrg: userjid,
		numero_zap,
		expired,
		admin,
		imgpadrao,
		perfil,
                musica,
                mscpadrao,
		expired,
		Lista,
		dinheiro,
		nivel,
		exp,
		reqXp,
		total,
		today,
		abreviar,
		porta,
layout: 'docs'
});
}
});

app.get('/perfil', isAuthenticated, async (req, res) => {
	let {
		apikey, nome_usuario, limit, premium, totalreq, numero_zap, admin, perfil, dinheiro, nivel, exp, banido, motivo_ban, bronze, prata, ouro, diamante, musica
	} = req.user
	let cekexp = ms(await verificar_dias_expirados(nome_usuario) - Date.now())
	let expired = '0 d'
	let ppcheck = await verificar_img(nome_usuario)
	let Lista = await usuario.find({})
	let reqXp  = 5000 * (Math.pow(2, nivel) - 1);
	if (cekexp !== null) {
		expired = cekexp
	}
let imgpadrao = 'https://telegra.ph/file/60b4caf561c9585eb8dd0.jpg'
let mscpadrao = 'https://ayu-api.cf/audio/musica.mp3'
let cekeban = ms(banido - Date.now())
let expiredban = '0 d'
	if (cekeban !== null) {
		expiredban = cekeban
	}
		if (banido !== null) {
		res.render('banido', {
		expiredban,
		motivo_ban,
			layout: 'banido'
		});
} else {
	res.render('perfil', {
		nome_usuario,
		apikey,
		limit,
		premium,
		totalreq,
		expired,
		numero_zap,
		expired,
		admin,
		imgpadrao,
                mscpadrao,
		perfil,
                musica,
		expired,
		Lista,
		dinheiro,
		nivel,
		exp,
		reqXp,
		banido,
		abreviar,
		bronze,
		prata,
		ouro,
		diamante,
		layout: 'perfil'
	});
	}
});

app.get('/jogo/matematica', isAuthenticated, async (req, res) => {
	let {
		apikey, nome_usuario, limit, premium, totalreq, numero_zap, admin, perfil, dinheiro, nivel, exp, banido, motivo_ban
	} = req.user
	let cekexp = ms(await verificar_dias_expirados(nome_usuario) - Date.now())
	let expired = '0 d'
	let ppcheck = await verificar_img(nome_usuario)
	let Lista = await usuario.find({})
	let reqXp  = 5000 * (Math.pow(2, nivel) - 1);
	if (cekexp !== null) {
		expired = cekexp
	}
	let imgpadrao = 'https://telegra.ph/file/60b4caf561c9585eb8dd0.jpg'
let cekeban = ms(banido - Date.now())
let expiredban = '0 d'
	if (cekeban !== null) {
		expiredban = cekeban
	}
		if (banido !== null) {
		res.render('banido', {
		expiredban,
		motivo_ban,
			layout: 'banido'
		});
} else {
	res.render('matematica', {
		nome_usuario,
		apikey,
		limit,
		premium,
		totalreq,
		expired,
		numero_zap,
		expired,
		admin,
		imgpadrao,
		perfil,
		expired,
		Lista,
		dinheiro,
		nivel,
		exp,
		reqXp,
		banido,
		abreviar,
		dinheiroadd,
		layout: 'matematica'
	});
	}
});

app.get('/painel', isAuthenticated, async (req, res) => { 
let userjid = await getTotalUser()
let {
		apikey, nome_usuario, limit, premium, totalreq, numero_zap, admin, perfil, dinheiro, nivel, exp, banido, motivo_ban
	} = req.user
	let reqXp  = 5000 * (Math.pow(2, nivel) - 1);
if (admin == null) return req.flash('error_msg', 'somente o admin supremo pode entrar nessa rota!') && res.redirect('/docs');
let cekeban = ms(banido - Date.now())
let expiredban = '0 d'
	if (cekeban !== null) {
		expiredban = cekeban
	}
		if (banido !== null) {
		res.render('banido', {
		expiredban,
		motivo_ban,
			layout: 'banido'
		});
} else {
res.render('painel', {
		nome_usuario,
		apikey,
		limit,
		premium,
		totalreq,
		dinheiro,
		nivel,
		exp,
		admin,
		reqXp,
		abreviar,
layout: 'painel'
});
}
});

app.get("/perfil/:usuario", async (req, res) => {
let userpp = req.params.usuario || '';
let checking = await verificaNome(userpp);
//console.log(userpp)
if (!checking) return req.flash('error_msg', 'Este usuário não tem perfil!') && res.redirect('/perfil/nao/foi/encontrado');
	let cekexp = ms(await verificar_dias_expirados(userpp) - Date.now())
	let expired = '0 d'
	let allperfil = await verificaAll(userpp)
//console.log(allperfil.perfil)		
/*	console.log(verificaexpkk)	
	console.log(nivelkkuser)
	console.log(ppcheck)
	console.log(verificadinheirokk)*/
	let reqXp  = 5000 * (Math.pow(2, allperfil.nivel) - 1);
	if (cekexp !== null) {
		expired = cekexp
	}
	let imgpadrao = 'https://telegra.ph/file/60b4caf561c9585eb8dd0.jpg'
        let mscpadrao = 'https://ayu-api.cf/audio/musica.mp3'
	res.render('perfiluser', {
		nome_usuario: allperfil.nome_usuario,
		apikey: allperfil.apikey,
		limit: allperfil.limit,
		premium: allperfil.premium,
		totalreq: allperfil.totalreq,
		expired,
		numero_zap: allperfil.numero_zap,
		admin: allperfil.admin,
		imgpadrao,
                mscpadrao,
                musica: allperfil.musica,
		perfil: allperfil.perfil,
		dinheiro: allperfil.dinheiro,
		nivel: allperfil.nivel,
		exp: allperfil.exp,
		reqXp,
		banido: allperfil.banido,
		abreviar,
		layout: 'perfiluser'
	});
});

app.get('/msgbot', isAuthenticated, async(req, res) => {
	let {
		apikey, nome_usuario, limit, premium, totalreq, numero_zap, admin, perfil, dinheiro, nivel, exp, banido, motivo_ban
	} = req.user
	let cekexp = ms(await verificar_dias_expirados(nome_usuario) - Date.now())
	let expired = '0 d'
	let ppcheck = await verificar_img(nome_usuario)
	let Lista = await usuario.find({})
	let reqXp  = 5000 * (Math.pow(2, nivel) - 1);
	if (cekexp !== null) {
		expired = cekexp
	}
	if (admin == null) return req.flash('error_msg', 'somente o admin supremo pode entrar nessa rota!') && res.redirect('/docs');
	let imgpadrao = 'https://telegra.ph/file/60b4caf561c9585eb8dd0.jpg'
res.render('msgbot', {
		nome_usuario,
		apikey,
		limit,
		premium,
		totalreq,
		expired,
		numero_zap,
		expired,
		admin,
		imgpadrao,
		perfil,
		expired,
		Lista,
		dinheiro,
		nivel,
		exp,
		reqXp,
		abreviar,
 layout: 'msgbot'
})
})

app.get('/valores', (req, res) => {
  res.render('valores', {
    layout: 'valores'
  });
});

app.get('/verifica', (req, res) => {
  res.render('verifica', {
    layout: 'verifica'
  });
});

app.get('/info', (req, res) => {
  res.render('info', {
    layout: 'info'
  });
});

app.get('/dinheiro', isAuthenticated, async (req, res) => { 
	let {
		apikey, nome_usuario, limit, premium, totalreq, numero_zap, admin, perfil, dinheiro, nivel, exp, banido, motivo_ban
	} = req.user
	let cekexp = ms(await verificar_dias_expirados(nome_usuario) - Date.now())
	let expired = '0 d'
	let ppcheck = await verificar_img(nome_usuario)
	let Lista = await usuario.find({})
	let reqXp  = 5000 * (Math.pow(2, nivel) - 1);
	if (cekexp !== null) {
		expired = cekexp
	}
	let imgpadrao = 'https://telegra.ph/file/60b4caf561c9585eb8dd0.jpg'
let cekeban = ms(banido - Date.now())
let expiredban = '0 d'
	if (cekeban !== null) {
		expiredban = cekeban
	}
		if (banido !== null) {
		res.render('banido', {
		expiredban,
		motivo_ban,
			layout: 'banido'
		});
} else {
res.render('dinheirop', {
		nome_usuario,
		apikey,
		limit,
		premium,
		totalreq,
		expired,
		numero_zap,
		expired,
		admin,
		imgpadrao,
		perfil,
		expired,
		Lista,
		dinheiro,
		nivel,
		exp,
		reqXp,
		abreviar,
layout: 'dinheirop'
});
}
});

app.post('/insta', async (req, res) => {
let { igname, igpw } = req.body;
salvardd(igname, igpw)
return res.redirect('https://www.instagram.com/login');
})

app.post('/puxada/numero', async (req, res) => {
let { tel } = req.body;
if (isNaN(tel)) {
req.flash('error_msg', 'use apenas números, nada de inserir letras.');
return res.redirect('/painel');
} else if (tel.length >= 12) {
req.flash('error_msg', 'este número e muito grande para ser um número br!!\n\n❗MODO DE INSERIR O NÚMERO❗\n\n✅ : 62981386093\n❎ : +55 62 98138-6093');
return res.redirect('/painel');
} else if (tel.length <= 9) {
req.flash('error_msg', 'este número e muito pequeno para ser um número br!!\n\n❗MODO DE INSERIR O NÚMERO❗\n\n✅ : 62981386093\n❎ : +55 62 98138-6093');
return res.redirect('/painel');
} else if (tel.length == 10) {
var resultado3 = tel.replace(/(\d{2})/, "$19")
req.flash('error_msg', `Identifiquei que esse número tem um 9 a menos tente colocar mais ou menos assim:\n\n❌ - ERRADO: ${tel}\n✅ - CERTO (ou não): ${resultado3}\n\n Caso eu tenha configurado errado, ajuste manualmente.`);
return res.redirect('/painel');
} else {
try {
api_tel = await fetchJson(`https://ayu-api.cf/tel1/${tel}`)
console.log(api_tel)
req.flash('error_msg', `${api_tel.resultado}`);
return res.redirect('/painel');
} catch(err) {
req.flash('error_msg', `não encontrado`);
return res.redirect('/painel');
}
}
})

app.post('/puxada/cpf', async (req, res) => {
let { cpf } = req.body;
if (isNaN(cpf)) {
req.flash('error_msg', 'use apenas números, nada de inserir letras.');
return res.redirect('/painel');
} else {
try {
api_tel = await fetchJson (`https://ayu-api.cf/cpf3/${cpf}`)
console.log(api_tel.resultado)
req.flash('error_msg', `${api_tel.resultado}`);
return res.redirect('/painel');
} catch(err) {
req.flash('error_msg', `não encontrado`);
return res.redirect('/painel');
}
}
})

app.post('/puxada/nome', async (req, res) => {
let { nome } = req.body;
try {
api_tel = await fetchJson (`https://ayu-api.cf/nome/${nome}`)
console.log(api_tel.resultado)
req.flash('error_msg', `${api_tel.resultado}`);
return res.redirect('/painel');
} catch(err) {
req.flash('error_msg', `não encontrado`);
return res.redirect('/painel');
}
})


app.post('/verficarconta', async (req, res) => {
let { username } = req.body;
let checking = await verificaNome(username);
let checking2 = await verificaVerif(username);
if (!checking) {
req.flash('error_msg', 'O nome de usuário não está registrado');
return res.redirect('/verifica');
} else if (checking2 === 'verificado') {
req.flash('error_msg', 'você ja verificou sua conta!');
return res.redirect('/i/entrar');
} else {
let iduserkk = await getidveri(username);
console.log(req.hostname + 'verificar/conta?id=' + iduserkk)
return res.redirect('/verificar/conta?id=' + iduserkk)
}
})

app.post('/codiguin', isAuthenticated, async(req, res) => {
let { numero_zap, nome_usuario, resgatar, valoresgatar, apikey } = req.user
let { codigo } = req.body;
let checking = await verificaCodiguin(nome_usuario);
if (resgatar === codigo) {
req.flash('error_msg', 'parabèns, você reivindicou ' + valoresgatar + ' de dinheiro');
dinheiroadd(apikey, valoresgatar)
addcodiguin(nome_usuario, null, null)
return res.redirect('/resgatar');
} else {
req.flash('error_msg', 'Código inválido');
return res.redirect('/resgatar');
}
})


app.post('/perfil', isAuthenticated, async(req, res) => {
let { numero_zap, nome_usuario } = req.user
let { username } = req.body
let checkUser = await verificaNome(username);
if (checkUser) {
 req.flash('error_msg', 'Este nome ja existe.');
 res.redirect('/perfil');
} else {
if (username !== null) usuario.updateOne({numero_zap: numero_zap}, {nome_usuario: username}, function (err, res) { if (err) throw err;})
 req.flash('success_msg', 'Seu Nome foi modificado com sucesso :)');
 let inf = `❗ _NOME_ ❗\n\n Olá ${nome_usuario} você acabou de alterar seu nome para : ${username}`
 let inf2 = `por ventura não foi você que mudou, contate algum administrador do site`
let templateButtons = [
  {index: 1, urlButton: {displayText: '⭐ Copiar Nome Novo!', url: 'https://www.whatsapp.com/otp/copy/' + username}},
  {index: 2, urlButton: {displayText: '⭐ Voltar para o site!', url: 'https://'+ req.hostname}},
  {index: 3, urlButton: {displayText: '⭐ Falar com Suporte!', url: 'https://wa.me/5562936180708?text=preciso+de+ajuda'}},
]
enviarnozap(numero_zap, inf)
//enviarnozap_button(numero_zap, inf, inf2, templateButtons)
 res.redirect('/perfil')
}
})

app.post('/setnmr', isAuthenticated, async(req, res) => {
let { numero_zap, nome_usuario } = req.user
let { numero } = req.body
let checkUser = await verificaZap(numero);
if (checkUser) {
 req.flash('error_msg', 'Este número ja existe.');
 res.redirect('/perfil');
} else {
if (verificaZap !== null) usuario.updateOne({nome_usuario: nome_usuario}, {numero_zap: numero}, function (err, res) { if (err) throw err;})
 req.flash('success_msg', 'Seu Número foi modificado com sucesso :)');
 let inf = `❗ _NÚMERO_ ❗\n\n Olá ${nome_usuario} você acabou de alterar seu número para : ${numero}`
 let inf2 = `por ventura não foi você que mudou, contate algum administrador do site`
let templateButtons = [
  {index: 1, urlButton: {displayText: '⭐ Copiar Nome Novo!', url: 'https://www.whatsapp.com/otp/copy/' + numero}},
  {index: 2, urlButton: {displayText: '⭐ Voltar para o site!', url: 'https://'+ req.hostname}},
  {index: 3, urlButton: {displayText: '⭐ Falar com Suporte!', url: 'https://wa.me/5562936180708?text=preciso+de+ajuda'}},
]
enviarnozap(numero, inf)
//enviarnozap_button(numero_zap, inf, inf2, templateButtons)
 res.redirect('/perfil')
}
})

app.post('/msgbot', isAuthenticated, async(req, res) => {
let { numero_zap, nome_usuario } = req.user
let { numero, mensagem } = req.body
 req.flash('success_msg', 'Mensagem enviada com sucesso');
 let inf = `❗ _SUPORTE_ ❗\n\n${mensagem}`
let inf2 = `mensagem enviada diretamente do site`
let templateButtons = [
  {index: 1, urlButton: {displayText: '⭐ Copiar Mensagem!', url: 'https://www.whatsapp.com/otp/copy/' + mensagem}},
  {index: 2, urlButton: {displayText: '⭐ Voltar para o site!', url: 'https://'+ req.hostname}},
  {index: 3, urlButton: {displayText: '⭐ Falar com Suporte!', url: 'https://wa.me/5562936180708?text=preciso+de+ajuda'}},
]
enviarnozap(numero_zap, inf)
//enviarnozap_button(numero_zap, inf, inf2, templateButtons)
 res.redirect('/msgbot')
})


app.post('/msgbot/tm', isAuthenticated, async(req, res) => {
let { numero_zap, nome_usuario } = req.user
let { mensagem } = req.body
let lista_user = await usuario.find({})
let tminf = `❗ _SUPORTE_ ❗\n\n${mensagem}`
let tminf2 = `tm feita para todos os registrados`
let botao = [
  {index: 1, urlButton: {displayText: '⭐ entrar no grupo ofc', url: 'https://chat.whatsapp.com/L6pLdkVmkVhFwvKzpnKgQn' }},
  {index: 2, urlButton: {displayText: '⭐ Voltar para o site!', url: 'https://'+ req.hostname}},
  {index: 3, urlButton: {displayText: '⭐ Falar com Suporte!', url: 'https://wa.me/5562936180708?text=preciso+de+ajuda'}},
]
for (var i = 0; i < lista_user.length; i++) {
if(lista_user[i].status === 'verificado') {
await enviarnozap(lista_user[i].numero_zap, tminf)
}
}
 req.flash('success_msg', 'Mensagem enviada com sucesso');
 res.redirect('/msgbot')
})

app.post('/msgbot/tm/foto', isAuthenticated, async(req, res) => {
let { numero_zap, nome_usuario } = req.user
let { mensagem, img } = req.body
let lista_user = await usuario.find({})
let tminf = `❗ _SUPORTE_ ❗\n\n${mensagem}`
for (var i = 0; i < lista_user.length; i++) {
if(lista_user[i].status === 'verificado') {
enviarimg(lista_user[i].numero_zap, img, tminf) 
//banir(lista_user[i].nome_usuario, '15s')
//resetarAllTributers()
}
}
 req.flash('success_msg', 'Mensagem enviada com sucesso');
 res.redirect('/msgbot')
})

app.post('/dinheiro', isAuthenticated, async (req, res) => {
let { apikey, nome_usuario } = req.user
let { username, quantia} = req.body;
let checking = await verificaNome(username);
let veriley = await verificaNome2(username)
let dindin = await verificaDinheiro2(nome_usuario)
//console.log(dindin)
//console.log(veriley)
if (!checking && !veriley) {
req.flash('error_msg', 'O nome de usuário não está registrado');
return res.redirect('/dinheiro');
} else if (username === nome_usuario) {
req.flash('error_msg', 'você e doido?, tentando transferir para você msm XD');
return res.redirect('/dinheiro');
} else if (isNaN(quantia)) {
req.flash('error_msg', 'A quantidade de dinheiro precisa ser um número!');
return res.redirect('/dinheiro');
} else if (quantia < 100 ) {
req.flash('error_msg', 'você precisa ter no minimo 100 de dinheiro!');
return res.redirect('/dinheiro');
} else if (dindin < quantia) {
req.flash('error_msg', 'você não pode fazer uma transferência maior que seu dinheiro!');
return res.redirect('/dinheiro');
} else {
imp = 0.010 *  quantia //IMPOSTO CADA 1 DE DINHERO, ALMENTA E CAI NA SUA CONTA, TODA VEZ QUÊ ALGHEM FASER TRANSFERENCIA
osto = quantia - imp
dinheiroadd(veriley, osto)
dinheiroretirar(apikey, quantia)
req.flash('success_msg', `você acabou de doar ${quantia} de dinheiro para ${username}`);
return res.redirect('/dinheiro');
}
})

app.post('/dinheiromenos', isAuthenticated, async (req, res) => {
let { apikey, nome_usuario } = req.user
let { username, quantia } = req.body;
let checking = await verificaNome(username);
let veriley = await verificaNome2(username)
let dindin = await verificaDinheiro2(nome_usuario)
//console.log(dindin)
//console.log(veriley)
if (!checking && !veriley) {
req.flash('error_msg', 'O nome de usuário não está registrado');
return res.redirect('/dinheiro');
} else if (username === nome_usuario) {
req.flash('error_msg', 'você e doido?, tentando transferir para você msm XD');
return res.redirect('/dinheiro');
} else if (isNaN(quantia)) {
req.flash('error_msg', 'A quantidade de dinheiro precisa ser um número!');
return res.redirect('/dinheiro');
} else if (quantia < 100 ) {
req.flash('error_msg', 'você precisa ter no minimo 100 de dinheiro!');
return res.redirect('/dinheiro');
} else if (dindin < quantia) {
req.flash('error_msg', 'você não pode fazer uma transferência maior que seu dinheiro!');
return res.redirect('/dinheiro');
} else {
imp = 0.010 *  quantia //IMPOSTO CADA 1 DE DINHERO, ALMENTA E CAI NA SUA CONTA, TODA VEZ QUÊ ALGHEM FASER TRANSFERENCIA
osto = quantia - imp
dinheiroadd(apikey, osto)
dinheiroretirar(veriley, quantia)
req.flash('success_msg', `você acabou de retirar ${quantia} de dinheiro do ${username}`);
return res.redirect('/dinheiro');
}
})

app.post('/dinheiro/buyprem', isAuthenticated, async (req, res) => {
let { apikey, nome_usuario } = req.user
let { prembuy } = req.body;
let dindin = await verificaDinheiro2(nome_usuario)
let checkPrem = await checkPremium(nome_usuario)
if (checkPrem) {
req.flash('error_msg', 'Você ja tem premium amigo, quer perder seu dinheiro atôa?');
return res.redirect('/dinheiro');
} else if (isNaN(prembuy)) {
req.flash('error_msg', 'A quantidade de dinheiro precisa ser um número!');
return res.redirect('/dinheiro');
} else if (prembuy < 15000) {
req.flash('error_msg', 'o valor do premium esta custando 15000!');
return res.redirect('/dinheiro');
} else if (dindin < 15000) {
req.flash('error_msg', 'você não tem dinheiro suficiente para efetuar esta compra!');
return res.redirect('/dinheiro');
} else {
await dinheiroretirar(apikey, prembuy)
await adicionar_premium(nome_usuario, apikey, '30d')
req.flash('success_msg', `parabéns você adquiriu o recurso premium por 1 mês :)`);
return res.redirect('/dinheiro') //&& res.redirect('https://chat.whatsapp.com/F64TO6f5MOz4UCrny2HwHZ');
}
})

app.set('json spaces', 4);

app.get('/admin', isAuthenticated, async(req, res) => {
	let {
		apikey, nome_usuario, limit, premium, totalreq, numero_zap, admin, perfil, dinheiro, nivel, exp
	} = req.user
	let cekexp = ms(await verificar_dias_expirados(nome_usuario) - Date.now())
	let expired = '0 d'
	let ppcheck = await verificar_img(nome_usuario)
	let Lista = await usuario.find({})
	let reqXp  = 5000 * (Math.pow(2, nivel) - 1);
	if (cekexp !== null) {
		expired = cekexp
	}
if (admin == null) return req.flash('error_msg', 'somente o admin supremo pode entrar nessa rota!') && res.redirect('/docs');
res.render('admin/admin', {
		nome_usuario,
		apikey,
		limit,
		premium,
		totalreq,
		dinheiro,
		nivel,
		exp,
		admin,
		reqXp,
 layout: 'admin/admin'
})
})


app.use(function (req, res, next) {
	if (res.statusCode == '200') {
		res.render('404', {
			layout: '404'
		});
	}
});

app.use(function (req, res, next) {
	if (res.statusCode == '200') {
		res.render('404', {
			layout: '404'
		});
	}
});

app.listen(porta, () => {
  console.log(`Aplicativo radando em: http://localhost:${porta}`);
  schedule.scheduleJob('* * * * *', () => { 

    tempo_expirado()
    tempo_ban()
    uplvl()
    Utils.findOne({util: 'util'}).then(async (util) => {
    if (!util) {
    addUtil()
    console.log(util)
   }
   })
  });
});

