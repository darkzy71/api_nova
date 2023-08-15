__path = process.cwd()
const { verificaKey, limitAdd, isLimit, dinheiroadd, expfarm } = require('../backend/db')

const fs = require('fs-extra')

const paramtroerro = __path + '/views/ErroLink.html' //400
const semapikey = __path + '/views/SemKey.html' //404
const semlimit = __path + '/views/SemLimit.html' //429

const { sticker } = require('../func.backend/figu');
//const { anima } = require('../func.backend/attp2.js');
const { TelegraPh } = require("../func.backend/uploader");
const util = require('util')
const fetch = require('node-fetch');

const { attp1 } = require('../func.backend/attp1.js');
const { attp2 } = require('../func.backend/attp2.js');
const { attp3 } = require('../func.backend/attp3.js');
const { attp4 } = require('../func.backend/attp4.js');
const { attp5 } = require('../func.backend/attp5.js');

const { canvasx } = require('../func.backend/txt2png.js');

const { attp6 } = require('../func.backend/attp6.js');
const { attp7 } = require('../func.backend/attp7.js');

const { getBuffer , getRandom } = require("../func.backend/buff");

async function limetext(req, res) {
try {
 const apikey = req.query.apikey;
 const texto = req.query.texto;
// const cor = req.query.cor;
 if (texto === undefined || apikey === undefined) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
await canvasx('lime', 0, texto)
res.type('jpeg')
res.sendFile(__path + '/src/frames/frame0.png')
//await fs.unlink(__path + '/src/ttp.gif', () => {
//await fs.unlink(__path + '/src/attp.webp', () => {});
//await fs.emptyDir(__path + '/src/frames', () => {});
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function ttp(req, res) {
try {
 const apikey = req.query.apikey;
 const texto = req.query.texto;
 const cor = req.query.cor;
 if (cor === undefined || texto === undefined || apikey === undefined) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
ttplink = `https://huratera.sirv.com/PicsArt_08-01-10.00.42.png?profile=Example-Text&text.0.text=${texto}&text.0.color=${cor}&text.0.font.family=Sigmar%20One&text.0.background.opacity=49&w=1700&h=1700`
figuresultado = await sticker(ttplink)
  await fs.writeFileSync(__path + '/tmp/ttp.webp', figuresultado)
  await res.sendFile(__path + '/tmp/ttp.webp')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function puxadatxt(req, res) {
try {
 const apikey = req.query.apikey;
 const texto = req.query.texto;
 if (texto === undefined || apikey === undefined) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
ttplink = `https://huratera.sirv.com/je65fih3f5021.png?text.0.text=${texto.substring(0,248)}&text.0.position.gravity=center&text.0.color=00dc4d`
 res.type('png')
 res.send(await getBuffer(ttplink))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function attp1r(req, res) {
try {
 const apikey = req.query.apikey;
 const texto = req.query.texto;
// const cor = req.query.cor;
 if (texto === undefined || apikey === undefined) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
await attp1(texto)
res.sendFile(__path + '/src/attp.webp')
//await fs.unlink(__path + '/src/ttp.gif', () => {
//await fs.unlink(__path + '/src/attp.webp', () => {});
//await fs.emptyDir(__path + '/src/frames', () => {});
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function attp2r(req, res) {
try {
 const apikey = req.query.apikey;
 const texto = req.query.texto;
// const cor = req.query.cor;
 if (texto === undefined || apikey === undefined) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
await attp2(texto)
 res.sendFile(__path + '/src/attp.webp')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function attp3r(req, res) {
try {
 const apikey = req.query.apikey;
 const texto = req.query.texto;
// const cor = req.query.cor;
 if (texto === undefined || apikey === undefined) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
await attp3(texto)
 res.sendFile(__path + '/src/attp.webp')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function attp4r(req, res) {
try {
 const apikey = req.query.apikey;
 const texto = req.query.texto;
// const cor = req.query.cor;
 if (texto === undefined || apikey === undefined) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
await attp4(texto)
 res.sendFile(__path + '/src/attp.webp')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function attp5r(req, res) {
try {
 const apikey = req.query.apikey;
 const texto = req.query.texto;
// const cor = req.query.cor;
 if (texto === undefined || apikey === undefined) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
await attp5(texto)
 res.sendFile(__path + '/src/attp.webp')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function attp6r(req, res) {
try {
 const apikey = req.query.apikey;
 const texto = req.query.texto;
// const cor = req.query.cor;
 if (texto === undefined || apikey === undefined) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
await attp6(texto)
 res.sendFile(__path + '/src/attp.webp')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function attp7r(req, res) {
try {
 const apikey = req.query.apikey;
 const texto = req.query.texto;
// const cor = req.query.cor;
//req.setTimeout(1000*3600)
 if (texto === undefined || apikey === undefined) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
await attp7(texto)
 res.sendFile(__path + '/src/attp.webp')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}


async function emojimix(req, res) {
try {
const apikey = req.query.apikey;
const emoji1 = req.query.emoji1;
const emoji2 = req.query.emoji2;
if (!apikey) return res.sendFile(paramtroerro)
if (!emoji1) return res.sendFile(paramtroerro)
if (!emoji2) return res.sendFile(paramtroerro)
let check = await verificaKey(apikey)
if (!check) return res.sendFile(semapikey)
let limit = await isLimit(apikey);
if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
		fetch(encodeURI(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${emoji1}_${emoji2}`))
		.then(response => response.json())
		.then(async i => {
figuresultado = await sticker(i.results[0].url)
  await fs.writeFileSync(__path + '/tmp/emoji.webp', figuresultado)
  await res.sendFile(__path + '/tmp/emoji.webp')		
})
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}


module.exports = { 
ttp,
attp1r,
attp2r,
attp3r,
attp4r,
attp5r,
attp6r,
attp7r,
emojimix,
puxadatxt,
limetext
}