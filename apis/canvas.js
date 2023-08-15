__path = process.cwd()
const {
 verificaKey,
 limitAdd,
 isLimit,
 dinheiroadd,
 levelup,
 expfarm
} = require('../backend/db')

const fs = require('fs')

const paramtroerro = __path + '/views/ErroLink.html' //400
const semapikey = __path + '/views/SemKey.html' //404
const semlimit = __path + '/views/SemLimit.html' //429

const Cannvas = require("../func.backend/akame-welcome2");
const akamerank = require('../func.backend/akame-rank');
const Caxinha = require('../func.backend/caixinha');



async function comunismo(req, res) {
try {
const apikey = req.query.apikey;
const image = req.query.img;
 if (image === undefined || apikey === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
  img = await Caxinha.canvas.comunism(`${image}`);
  await fs.writeFileSync(__path +'/tmp/canvasimg.png', img)
  res.sendFile(__path+'/tmp/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function bolsonaro(req, res) {
try {
const apikey = req.query.apikey;
const image = req.query.img;
 if (image === undefined || apikey === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
  img = await Caxinha.canvas.bolsonaro(`${image}`);
  await fs.writeFileSync(__path +'/tmp/canvasimg.png', img)
  res.sendFile(__path+'/tmp/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function affect(req, res) {
try {
const apikey = req.query.apikey;
const image = req.query.img;
 if (image === undefined || apikey === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
  img = await Caxinha.canvas.affect(`${image}`);
  await fs.writeFileSync(__path +'/tmp/canvasimg.png', img)
  res.sendFile(__path+'/tmp/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function beautiful(req, res) {
try {
const apikey = req.query.apikey;
const image = req.query.img;
 if (image === undefined || apikey === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
  img = await Caxinha.canvas.beautiful(`${image}`);
  await fs.writeFileSync(__path +'/tmp/canvasimg.png', img)
  res.sendFile(__path+'/tmp/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function blurr(req, res) {
try {
const apikey = req.query.apikey;
const image = req.query.img;
 if (image === undefined || apikey === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
  img = await Caxinha.canvas.blur(`${image}`);
  await fs.writeFileSync(__path +'/tmp/canvasimg.png', img)
  res.sendFile(__path+'/tmp/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function bnw(req, res) {
try {
const apikey = req.query.apikey;
const image = req.query.img;
 if (image === undefined || apikey === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
  img = await Caxinha.canvas.bnw(`${image}`);
  await fs.writeFileSync(__path +'/tmp/canvasimg.png', img)
  res.sendFile(__path+'/tmp/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function circle(req, res) {
try {
const apikey = req.query.apikey;
const image = req.query.img;
 if (image === undefined || apikey === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
  img = await Caxinha.canvas.circle(`${image}`);
  await fs.writeFileSync(__path +'/tmp/canvasimg.png', img)
  res.sendFile(__path+'/tmp/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function del(req, res) {
try {
const apikey = req.query.apikey;
const image = req.query.img;
 if (image === undefined || apikey === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
  img = await Caxinha.canvas.del(`${image}`);
  await fs.writeFileSync(__path +'/tmp/canvasimg.png', img)
  res.sendFile(__path+'/tmp/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function dither(req, res) {
try {
const apikey = req.query.apikey;
const image = req.query.img;
 if (image === undefined || apikey === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
  img = await Caxinha.canvas.dither(`${image}`);
  await fs.writeFileSync(__path +'/tmp/canvasimg.png', img)
  res.sendFile(__path+'/tmp/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function facepalm(req, res) {
try {
const apikey = req.query.apikey;
const image = req.query.img;
 if (image === undefined || apikey === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
  img = await Caxinha.canvas.facepalm(`${image}`);
  await fs.writeFileSync(__path +'/tmp/canvasimg.png', img)
  res.sendFile(__path+'/tmp/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function gay(req, res) {
try {
const apikey = req.query.apikey;
const image = req.query.img;
 if (image === undefined || apikey === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
  img = await Caxinha.canvas.gay(`${image}`);
  await fs.writeFileSync(__path +'/tmp/canvasimg.png', img)
  res.sendFile(__path+'/tmp/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function invert(req, res) {
try {
const apikey = req.query.apikey;
const image = req.query.img;
 if (image === undefined || apikey === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
  img = await Caxinha.canvas.invert(`${image}`);
  await fs.writeFileSync(__path +'/tmp/canvasimg.png', img)
  res.sendFile(__path+'/tmp/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function jail(req, res) {
try {
const apikey = req.query.apikey;
const image = req.query.img;
 if (image === undefined || apikey === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
  img = await Caxinha.canvas.jail(`${image}`);
  await fs.writeFileSync(__path +'/tmp/canvasimg.png', img)
  res.sendFile(__path+'/tmp/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function magik(req, res) {
try {
const apikey = req.query.apikey;
const image = req.query.img;
 if (image === undefined || apikey === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
  img = await Caxinha.canvas.magik(`${image}`);
  await fs.writeFileSync(__path +'/tmp/canvasimg.png', img)
  res.sendFile(__path+'/tmp/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function pixelate(req, res) {
try {
const apikey = req.query.apikey;
const image = req.query.img;
 if (image === undefined || apikey === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
  img = await Caxinha.canvas.pixelate(`${image}`);
  await fs.writeFileSync(__path +'/tmp/canvasimg.png', img)
  res.sendFile(__path+'/tmp/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function rip(req, res) {
try {
const apikey = req.query.apikey;
const image = req.query.img;
 if (image === undefined || apikey === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
  img = await Caxinha.canvas.rip(`${image}`);
  await fs.writeFileSync(__path +'/tmp/canvasimg.png', img)
  res.sendFile(__path+'/tmp/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function sepia(req, res) {
try {
const apikey = req.query.apikey;
const image = req.query.img;
 if (image === undefined || apikey === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
  img = await Caxinha.canvas.sepia(`${image}`);
  await fs.writeFileSync(__path +'/tmp/canvasimg.png', img)
  res.sendFile(__path+'/tmp/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function rotate(req, res) {
try {
const apikey = req.query.apikey;
const image = req.query.img;
 if (image === undefined || apikey === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
  img = await Caxinha.canvas.rotate(`${image}`);
  await fs.writeFileSync(__path +'/tmp/canvasimg.png', img)
  res.sendFile(__path+'/tmp/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function trash(req, res) {
try {
const apikey = req.query.apikey;
const image = req.query.img;
 if (image === undefined || apikey === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
  img = await Caxinha.canvas.trash(`${image}`);
  await fs.writeFileSync(__path +'/tmp/canvasimg.png', img)
  res.sendFile(__path+'/tmp/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function wanted(req, res) {
try {
const apikey = req.query.apikey;
const image = req.query.img;
 if (image === undefined || apikey === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
  img = await Caxinha.canvas.wanted(`${image}`);
  await fs.writeFileSync(__path +'/tmp/canvasimg.png', img)
  res.sendFile(__path+'/tmp/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function wasted(req, res) {
try {
const apikey = req.query.apikey;
const image = req.query.img;
 if (image === undefined || apikey === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
  img = await Caxinha.canvas.wasted(`${image}`);
  await fs.writeFileSync(__path +'/tmp/canvasimg.png', img)
  res.sendFile(__path+'/tmp/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}



async function welcome(req, res) {
 	try {
 const apikey = req.query.apikey;
 const nome = req.query.nome; 
 const nomegp = req.query.nomegp; 
 const perfil = req.query.perfil;
 const membros = req.query.membros;
 const titulo = req.query.titulo;  
 const numero = req.query.numero;
 const cor = req.query.cor;
 const lcor = req.query.lcor;
 const tcor = req.query.tcor;
 const fundo = req.query.fundo;
  if (apikey === undefined || nome === undefined || nomegp === undefined || titulo === undefined || membros === undefined || fundo === undefined || perfil === undefined || numero === undefined || cor === undefined || lcor === undefined || tcor === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
var image = await new Cannvas.Welcome()
.setTextTitle(`${titulo}`)
  .setUsername(`${nome}`)
  .setDiscriminator(`${numero}`)
  .setMemberCount(`${membros}`)
  .setGuildName(`${nomegp}`)
  .setAvatar(`${perfil}`)
  .setColor("border", `#${cor}`)
  .setColor("username-box", `#${cor}`)
  .setColor("discriminator-box", `#${cor}`)
  .setColor("message-box", `#${cor}`)
  .setColor("title", `#${tcor}`)
  .setColor("avatar", `#${cor}`)
  .setColor("Username", `#${lcor}`)
  .setColor("Message", `#${lcor}`)
  .setColor("Discriminator", `#${lcor}`)
  .setColor("Hashtag", `#${lcor}`) 
  .setBackground(`${fundo}`)
  .toAttachment();
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/bemvindov2.png', data)
  res.sendFile(__path+'/tmp/bemvindov2.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function goodbye(req, res) {
 	try {
 const apikey = req.query.apikey;
 const nome = req.query.nome; 
 const nomegp = req.query.nomegp; 
 const perfil = req.query.perfil;
 const membros = req.query.membros;
 const titulo = req.query.titulo;  
 const numero = req.query.numero;
 const cor = req.query.cor;
 const lcor = req.query.lcor;
 const tcor = req.query.tcor;
 const fundo = req.query.fundo;
  if (apikey === undefined || nome === undefined || nomegp === undefined || titulo === undefined || membros === undefined || fundo === undefined || perfil === undefined || numero === undefined || cor === undefined || lcor === undefined || tcor === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
var image = await new Cannvas.Goodbye()
.setTextTitle(`${titulo}`)
  .setUsername(`${nome}`)
  .setDiscriminator(`${numero}`)
  .setMemberCount(`${membros}`)
  .setGuildName(`${nomegp}`)
  .setAvatar(`${perfil}`)
  .setColor("border", `#${cor}`)
  .setColor("username-box", `#${cor}`)
  .setColor("discriminator-box", `#${cor}`)
  .setColor("message-box", `#${cor}`)
  .setColor("title", `#${tcor}`)
  .setColor("avatar", `#${cor}`)
  .setColor("Username", `#${lcor}`)
  .setColor("Message", `#${lcor}`)
  .setColor("Discriminator", `#${lcor}`)
  .setColor("Hashtag", `#${lcor}`) 
  .setBackground(`${fundo}`)
  .toAttachment();
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/adeus.png', data)
  res.sendFile(__path+'/tmp/adeus.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}


async function rank(req, res) {
 	try {
  apikey = req.query.apikey;
  username = req.query.nome,
  perfil = req.query.perfil,
  fundo = req.query.fundo,  
  xp = req.query.xp,  
  fullxp = req.query.fullxp,  
  level = req.query.level,
  rank = req.query.rank,
  discrim = req.query.contagem
  cor = req.query.cor
  if (apikey === undefined || username === undefined || xp === undefined || perfil === undefined || discrim === undefined || fundo === undefined || fullxp === undefined || level === undefined || rank === undefined || cor === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
  let img = await akamerank.rank({ 
username, 
discrim, 
level: level, 
rank: rank, 
neededXP: xp, 
currentXP: fullxp, 
avatarURL: perfil,
color: cor, 
background: `${fundo}`
  });
  await fs.writeFileSync(__path+'/tmp/rank.png', img)
  res.sendFile(__path+'/tmp/rank.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function menu(req, res) {
 	try {
 apikey = req.query.apikey;
 usuario = req.query.nome,
 numero = req.query.numero,
 perfil = req.query.perfil,
 fundo = req.query.fundo,
 titulo = req.query.titulo,
 cor1 = req.query.cor1,
 cor2 = req.query.cor2
  if (apikey === undefined || usuario === undefined || numero === undefined || titulo === undefined || fundo === undefined || perfil === undefined || cor1 === undefined || cor2 === undefined) return res.sendFile(paramtroerro)
  let check = await verificaKey(apikey)
  if (!check) return res.sendFile(semapikey)
  let limit = await isLimit(apikey);
  if (limit) return res.sendFile(semlimit)
  await limitAdd(apikey);
  await expfarm(apikey);
 let img = await akamerank.welcome({ 
username: usuario, 
discrim: numero,
avatarURL: perfil,
fundo: fundo,
titulo: titulo,
cor1: `#${cor1}`,
cor2: `#${cor2}`
  });
await fs.writeFileSync(__path+'/tmp/menu.png', img)
  res.sendFile(__path+'/tmp/menu.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

module.exports = {
welcome,
goodbye,
rank,
menu,
comunismo,
bolsonaro,
bnw,
blurr,
affect,
beautiful,
circle,
del,
gay,
invert,
facepalm,
dither,
jail,
magik,
pixelate,
rip,
sepia,
rotate,
trash,
wanted,
wasted
}