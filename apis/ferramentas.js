__path = process.cwd()
const { verificaKey, limitAdd, isLimit,  dinheiroadd, expfarm } = require('../backend/db')

const fs = require('fs')
const uber = require('uberduck-api')
const paramtroerro = __path + '/views/ErroLink.html' //400
const semapikey = __path + '/views/SemKey.html' //404
const semlimit = __path + '/views/SemLimit.html' //429

const { styletext } = require('../func.backend/api')
const { TelegraPh, AyuUp } = require("../func.backend/uploader");



const { getBuffer, getRandom } = require("../func.backend/buff");

const util = require('util')


async function negobam(req, res) {
 let texto = req.query.texto;
 let apikey = req.query.apikey;
  if (!apikey) return res.sendFile(paramtroerro)
  if (!texto) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
uber.getAudioUrl(
'pub_mwvtlssdgkluhhrdey', 
'pk_4182e48a-9816-4f38-8f04-148ab5cb165e', 
'nego-bam', 
texto).then(async ata => {
//console.log(ata)
buff = await getBuffer(ata)
res.type('mp3')
res.send(buff)
})
}

async function faustao(req, res) {
 let texto = req.query.texto;
 let apikey = req.query.apikey;
  if (!apikey) return res.sendFile(paramtroerro)
  if (!texto) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
uber.getAudioUrl(
'pub_mwvtlssdgkluhhrdey', 
'pk_4182e48a-9816-4f38-8f04-148ab5cb165e', 
'faustao', 
texto).then(async ata => {
//console.log(ata)
buff = await getBuffer(ata)
res.type('mp3')
res.send(buff)
})
}

async function ibere(req, res) {
 let texto = req.query.texto;
 let apikey = req.query.apikey;
  if (!apikey) return res.sendFile(paramtroerro)
  if (!texto) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
uber.getAudioUrl(
'pub_mwvtlssdgkluhhrdey',
'pk_4182e48a-9816-4f38-8f04-148ab5cb165e', 
'ibere', 
texto).then(async ata => {
//console.log(ata)
buff = await getBuffer(ata)
res.type('mp3')
res.send(buff)
})
}

async function eminem(req, res) {
 let texto = req.query.texto;
 let apikey = req.query.apikey;
  if (!apikey) return res.sendFile(paramtroerro)
  if (!texto) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
uber.getAudioUrl(
'pub_mwvtlssdgkluhhrdey', 
'pk_4182e48a-9816-4f38-8f04-148ab5cb165e',
'eminem', texto).then(async ata => {
//console.log(ata)
buff = await getBuffer(ata)
res.type('mp3')
res.send(buff)
})
}

async function chapolin(req, res) {
 let texto = req.query.texto;
 let apikey = req.query.apikey;
  if (!apikey) return res.sendFile(paramtroerro)
  if (!texto) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
uber.getAudioUrl(
'pub_mwvtlssdgkluhhrdey', 
'pk_4182e48a-9816-4f38-8f04-148ab5cb165e', 
'chapolin-br', 
texto).then(async ata => {
//console.log(ata)
buff = await getBuffer(ata)
res.type('mp3')
res.send(buff)
})
}

async function patolino(req, res) {
 let texto = req.query.texto;
 let apikey = req.query.apikey;
  if (!apikey) return res.sendFile(paramtroerro)
  if (!texto) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
uber.getAudioUrl(
'pub_mwvtlssdgkluhhrdey',
'pk_4182e48a-9816-4f38-8f04-148ab5cb165e',
'patolino', 
texto).then(async ata => {
//console.log(ata)
buff = await getBuffer(ata)
res.type('mp3')
res.send(buff)
})
}

async function telegra(req, res) {
 let img = req.query.img;
 let apikey = req.query.apikey;
  if (!apikey) return res.sendFile(paramtroerro)
  if (!img) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
    ran = getRandom('.jpg')
    rano = getRandom('.jpg')
    buff = await getBuffer(img)
    fs.writeFileSync(ran, buff)
    anu = await TelegraPh(ran)
    res.status(200).send({resultado: util.format(anu) });
   }

 async function metadinha(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync(__path +'/func.backend/metadinha.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.json(random)
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

async function styletextR(req, res) {
 let apikey = req.query.apikey
 let nome = req.query.nome
 if (!apikey) return res.sendFile(paramtroerro)
 if (!nome) return res.sendFile(paramtroerro) 
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
styletext(nome).then(resultado => {
res.json(resultado)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
mensagem: 'Erro no Servidor Interno'
})
});
}


module.exports = { 
metadinha,
styletextR,
telegra,
faustao,
ibere,
eminem,
chapolin,
patolino,
negobam
}