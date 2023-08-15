__path = process.cwd()
const { verificaKey, limitAdd, isLimit, dinheiroadd, expfarm } = require('../backend/db')
const deepai = require('deepai')
const fs = require('fs')
const axios = require('axios')
const util = require('util')

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
	apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const paramtroerro = __path + '/views/ErroLink.html' //400
const semapikey = __path + '/views/SemKey.html' //404
const semlimit = __path + '/views/SemLimit.html' //429

const { TelegraPh, AyuUp } = require("../func.backend/uploader");
const fetch = require('node-fetch');
const { rastrear } = require('../func.backend/api')
const { toPTT } = require('../func.backend/converter.js')
//const { fetchJson } = require('../func.backend/function');
const { getBuffer, getRandom } = require("../func.backend/buff");

 const {
educar_IA,
resposta_IA
 } = require('../func.backend/ia.js');
 
 
 const fetchJson = async (url, options) => {
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
 
async function imgig(req, res) { 
//let q = req.query.q
img = await fetchJson(`https://nekos.life/api/v2/img/waifu`)
res.type('jpg')
res.send(await getBuffer(img.url))
}
async function ayuia(req, res) {
try {
let apikey = req.query.apikey
let type = req.query.type
let budy = req.query.budy
let quoted = req.query.quoted
if (!apikey) return res.sendFile(paramtroerro)
let check = await verificaKey(apikey)
if (!check) return res.sendFile(semapikey)
let limit = await isLimit(apikey);
if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
await educar_IA(type, quoted)
const ia_inity = await resposta_IA(budy)
console.log(resposta_IA(budy))
if (!ia_inity) res.json({status: 0, resposta: 'ops, não sei oq dizer :(', resultado: 'error'})
if (ia_inity) res.json({
status: 'operando', 
admin: 'https://wa.me/5562936180708', 
resposta: ia_inity
})
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function rastre(req, res) {
 let apikey = req.query.apikey
 let id = req.query.id
 if (!apikey) return res.sendFile(paramtroerro)
 if (!nome) return res.sendFile(paramtroerro) 
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
rastrear(id).then(resultado => {
res.json(resultado)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
mensagem: 'Erro no Servidor Interno'
})
});
}

async function gethtml(req, res) {
try {
let apikey = req.query.apikey
let site = req.query.site
if (!apikey) return res.sendFile(paramtroerro)
if (!site) return res.sendFile(paramtroerro)
let check = await verificaKey(apikey)
if (!check) return res.sendFile(semapikey)
let limit = await isLimit(apikey);
if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
expfarm(apikey)
fetch(site).then(res => res.text())
.then(i =>{
res.json({html: i})
})   
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}


async function geraCpf(req, res) {
try {
let apikey = req.query.apikey
if (!apikey) return res.sendFile(paramtroerro)
let check = await verificaKey(apikey)
if (!check) return res.sendFile(semapikey)
let limit = await isLimit(apikey);
if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
		fetch(encodeURI(`https://2devs.com.br/v1/cpf?quantity=1&dots=.`))
		.then(response => response.json())
		.then(i => {
res.json(i)
})
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function geraCertidao(req, res) {
try {
let apikey = req.query.apikey
if (!apikey) return res.sendFile(paramtroerro)
let check = await verificaKey(apikey)
if (!check) return res.sendFile(semapikey)
let limit = await isLimit(apikey);
if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
		fetch(encodeURI(`https://2devs.com.br//v1/certificate?quantidade=10&tipo=1`))
		.then(response => response.json())
		.then(i => {
res.json(i)
})
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function geraCnh(req, res) {
try {
let apikey = req.query.apikey
if (!apikey) return res.sendFile(paramtroerro)
let check = await verificaKey(apikey)
if (!check) return res.sendFile(semapikey)
let limit = await isLimit(apikey);
if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
		fetch(encodeURI(`https://2devs.com.br//v1/cnh?quantidade=10`))
		.then(response => response.json())
		.then(i => {
res.json(i)
})
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function geraRg(req, res) {
try {
let apikey = req.query.apikey
if (!apikey) return res.sendFile(paramtroerro)
let check = await verificaKey(apikey)
if (!check) return res.sendFile(semapikey)
let limit = await isLimit(apikey);
if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
		fetch(encodeURI(`https://2devs.com.br//v1/rg?quantidade=10&separador=.`))
		.then(response => response.json())
		.then(i => {
res.json(i)
})
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function nome(req, res) {
try {
let apikey = req.query.apikey
let dm = req.query.nome
if (!apikey) return res.sendFile(paramtroerro)
if (!dm) return res.sendFile(paramtroerro)
let check = await verificaKey(apikey)
if (!check) return res.sendFile(semapikey)
let limit = await isLimit(apikey);
if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
		fetch(encodeURI(`https://sociedadeetoken2020sociedade.localto.net/nome.php?nome=${dm}`))
		.then(response => response.json())
		.then(i => {
res.json(i)
})
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function placa(req, res) {
try {
let apikey = req.query.apikey
let dm = req.query.placa
if (!apikey) return res.sendFile(paramtroerro)
if (!dm) return res.sendFile(paramtroerro)
let check = await verificaKey(apikey)
if (!check) return res.sendFile(semapikey)
let limit = await isLimit(apikey);
if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
		fetch(encodeURI(`https://sociedadeetoken2020sociedade.localto.net/placaDb.php?placa=${dm}`))
		.then(response => response.json())
		.then(i => {
res.json(i)
})
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function cpf(req, res) {
try {
let apikey = req.query.apikey
let dm = req.query.cpf
if (!apikey) return res.sendFile(paramtroerro)
if (!dm) return res.sendFile(paramtroerro)
let check = await verificaKey(apikey)
if (!check) return res.sendFile(semapikey)
let limit = await isLimit(apikey);
if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
		fetch(encodeURI(`https://sociedadeetoken2020sociedade.localto.net/cpf.php?cpf=${dm}`))
		.then(response => response.json())
		.then(i => {
res.json(i)
})
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function cpf2(req, res) {
try {
let apikey = req.query.apikey
let dm = req.query.cpf
if (!apikey) return res.sendFile(paramtroerro)
if (!dm) return res.sendFile(paramtroerro)
let check = await verificaKey(apikey)
if (!check) return res.sendFile(semapikey)
let limit = await isLimit(apikey);
if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
		fetch(encodeURI(`http://yumi2023apietoken2023.localtonet.com/cpf1.php?cpf=${dm}`))
		.then(response => response.json())
		.then(i => {
res.json(i)
})
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function email(req, res) {
try {
let apikey = req.query.apikey
let dm = req.query.email
if (!apikey) return res.sendFile(paramtroerro)
if (!dm) return res.sendFile(paramtroerro)
let check = await verificaKey(apikey)
if (!check) return res.sendFile(semapikey)
let limit = await isLimit(apikey);
if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
		fetch(encodeURI(`http://yumi2023apietoken2023.localtonet.com/email.php?email=${dm}`))
		.then(response => response.json())
		.then(i => {
res.json(i)
})
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function tel(req, res) {
try {
let apikey = req.query.apikey
let dm = req.query.telefone
if (!apikey) return res.sendFile(paramtroerro)
if (!dm) return res.sendFile(paramtroerro)
let check = await verificaKey(apikey)
if (!check) return res.sendFile(semapikey)
let limit = await isLimit(apikey);
if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
		fetch(encodeURI(`https://sociedadeetoken2020sociedade.localto.net/telefoneDb.php?tel=${dm}`))
		.then(response => response.json())
		.then(i => {
res.json(i)
})
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function tel2(req, res) {
try {
let apikey = req.query.apikey
let dm = req.query.telefone
if (!apikey) return res.sendFile(paramtroerro)
if (!dm) return res.sendFile(paramtroerro)
let check = await verificaKey(apikey)
if (!check) return res.sendFile(semapikey)
let limit = await isLimit(apikey);
if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
		fetch(encodeURI(`http://yumi2023apietoken2023.localtonet.com/tel2.php?tel=${dm}`))
		.then(response => response.json())
		.then(i => {
res.json(i)
})
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function rgdb(req, res) {
try {
let apikey = req.query.apikey
let dm = req.query.rg
if (!apikey) return res.sendFile(paramtroerro)
if (!dm) return res.sendFile(paramtroerro)
let check = await verificaKey(apikey)
if (!check) return res.sendFile(semapikey)
let limit = await isLimit(apikey);
if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
		fetch(encodeURI(`http://yumi2023apietoken2023.localtonet.com/rg.php?rg=${dm}`))
		.then(response => response.json())
		.then(i => {
res.json(i)
})
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function fotorg(req, res) {
try {
let apikey = req.query.apikey
let dm = req.query.cpf
if (!apikey) return res.sendFile(paramtroerro)
if (!dm) return res.sendFile(paramtroerro)
let check = await verificaKey(apikey)
if (!check) return res.sendFile(semapikey)
let limit = await isLimit(apikey);
if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
let dados = await fetchJson(`http://yumi2023apietoken2023.localtonet.com/cpf.php?cpf=${dm}`)
let api2 = await fetchJson(`https://pkyha.localtonet.com/foto.php?cpf=${dm}`)		
const imageBuffer = Buffer.from(api2.data, 'base64');		
    ran = getRandom('.jpg')
    rano = getRandom('.jpg')    
    fs.writeFileSync(ran, imageBuffer)    
    anu = await TelegraPh(ran)
    res.status(200).send({foto: util.format(anu), dados });
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function antiporn(req, res) {
try {
let apikey = req.query.apikey
let dm = req.query.img
if (!apikey) return res.sendFile(paramtroerro)
if (!dm) return res.sendFile(paramtroerro)
let check = await verificaKey(apikey)
if (!check) return res.sendFile(semapikey)
let limit = await isLimit(apikey);
if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
		deepai.setApiKey('6a6462b1-2f1f-4ca6-b071-8095d697c041')
		const resp = await deepai.callStandardApi("nsfw-detector", {
image: `${dm}`
		})
		if (resp.output.nsfw_score > 0.85) return res.json({
status: true, pornografia: "sim"
		})
		if (resp.output.nsfw_score < 0.85) return res.json({
status: true, pornografia: "nao"
		})
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}


async function imgia(req, res) {
try {
let apikey = req.query.apikey
let dm = req.query.texto
if (!apikey) return res.sendFile(paramtroerro)
if (!dm) return res.sendFile(paramtroerro)
let check = await verificaKey(apikey)
if (!check) return res.sendFile(semapikey)
let limit = await isLimit(apikey);
if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
		deepai.setApiKey('6a6462b1-2f1f-4ca6-b071-8095d697c041')
		const resp = await deepai.callStandardApi("text2img", {
text: `${dm}`
		})
res.json({
status: "ia online", pornografia: resp
		})
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function openaitohka(req, res) {
try {
let apikey = req.query.apikey
let dm = req.query.pergunta
if (!apikey) return res.sendFile(paramtroerro)
if (!dm) return res.sendFile(paramtroerro)
let check = await verificaKey(apikey)
if (!check) return res.sendFile(semapikey)
let limit = await isLimit(apikey);
if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
const response = await openai.createCompletion({
model: "text-davinci-003",
prompt: dm,
temperature: 0,
max_tokens: 500,
stop: ["Ai:", "Human:"],
top_p: 1,
frequency_penalty: 0.2,
presence_penalty: 0,
})
res.json({
status: "ia online", pergunta: dm, resposta: response.data.choices[0].text.trim()
		})
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: "ia off-line", info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}


async function openaiarte(req, res) {
try {
let apikey = req.query.apikey
let dm = req.query.depoimento
if (!apikey) return res.sendFile(paramtroerro)
if (!dm) return res.sendFile(paramtroerro)
let check = await verificaKey(apikey)
if (!check) return res.sendFile(semapikey)
let limit = await isLimit(apikey);
if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
const response = await openai.createImage({
              prompt: dm,
              n: 1,
              size: "512x512",
            });
res.json({
status: "ia online", depoimento: dm, arte: response.data.data[0].url
		})
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: "ia off-line", info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}


async function toaud(req, res) {
try {
 const apikey = req.query.apikey;
 const link = req.query.link;
 if (link === undefined || apikey === undefined) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
let linkbuff = await getBuffer(link)
let audio = await toPTT(linkbuff, 'mp4')
console.log(audio)
 res.sendFile(audio.data)
		} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}


module.exports = { 
geraCpf,
geraCertidao,
geraCnh,
geraRg,
nome,
cpf,
cpf2,
email,
tel,
placa,
tel2,
rgdb,
antiporn,
gethtml,
rastre,
toaud,
ayuia,
imgia,
openaitohka,
fotorg,
openaiarte,
imgig
}
