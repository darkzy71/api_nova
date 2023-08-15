__path = process.cwd()
const { verificaKey, limitAdd, isLimit, dinheiroadd, expfarm } = require('../backend/db')
const axios = require("axios");
const cheerio = require("cheerio");
const request = require('request');
const fs = require('fs')

const paramtroerro = __path + '/views/ErroLink.html' //400
const semapikey = __path + '/views/SemKey.html' //404
const semlimit = __path + '/views/SemLimit.html' //429

const { pensador, styletext, getgrupos, gpwhatsapp, hentaistube, nerding, apkmodhacker, xvideos, uptodown, pornhub, soundl, st, gpsrc, dafontSearch, dafontDown, igstalk, ff, papeldeparede, htdl, xvideoss, xvideosdl, assistithtdl, assistitht, pornogratis, wallmob, pinterest } = require('../func.backend/api')

const {
ytSearch
} = require("../func.backend/youtube");


async function pensadorr(req, res) {
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
pensador(nome).then(resultado => {
res.json(resultado)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
mensagem: 'Erro no Servidor Interno'
})
});
}

async function hentaistuber(req, res) {
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
hentaistube(nome).then(resultado => {
res.json(resultado)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
mensagem: 'Erro no Servidor Interno'
})
});
}

async function assistithtsrc(req, res) {
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
assistitht(nome).then(resultado => {
res.json(resultado)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
mensagem: 'Erro no Servidor Interno'
})
});
}

async function pornhubsrc(req, res) {
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
pornhub(nome).then(resultado => {
res.json(resultado)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
mensagem: 'Erro no Servidor Interno'
})
});
}

async function pornogratiss(req, res) {
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
pornogratis(nome).then(resultado => {
res.json(resultado)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
mensagem: 'Erro no Servidor Interno'
})
});
}

async function gpsale(req, res) {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
 await limitAdd(apikey);
await expfarm(apikey);
getgrupos().then(resultado => {
res.json(resultado)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
mensagem: 'Erro no Servidor Interno'
})
});
}

async function apkmodhack(req, res) {
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
apkmodhacker(nome).then(resultado => {
res.json(resultado)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
mensagem: 'Erro no Servidor Interno'
})
});
}

async function gpwhatsappR(req, res) {
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
gpwhatsapp(nome).then(resultado => {
res.json(resultado)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
mensagem: 'Erro no Servidor Interno'
})
});
}

async function nerdingR(req, res) {
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
nerding(nome).then(resultado => {
res.json(resultado)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
mensagem: 'Erro no Servidor Interno'
})
});
}

async function uptodownR(req, res) {
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
uptodown(nome).then(resultado => {
res.json(resultado)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
mensagem: 'Erro no Servidor Interno'
})
});
}

async function gpsrcR(req, res) {
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
gpsrc(nome).then(resultado => {
res.json(resultado)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
mensagem: 'Erro no Servidor Interno'
})
});
}

async function dafontSearchR(req, res) {
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
dafontSearch(nome).then(resultado => {
res.json(resultado)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
mensagem: 'Erro no Servidor Interno'
})
});
}

async function ffR(req, res) {
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
ff(nome).then(resultado => {
res.json(resultado)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
mensagem: 'Erro no Servidor Interno'
})
});
}

async function papeldeparedeR(req, res) {
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
papeldeparede(nome).then(resultado => {
res.json(resultado)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
mensagem: 'Erro no Servidor Interno'
})
});
}

async function ytSearchR(req, res) {
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
ytSearch(nome).then(resultado => {
res.json(resultado)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
mensagem: 'Erro no Servidor Interno'
})
});
}

async function pin(req, res) {
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
pinterest(nome).then(resultado => {
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
apkmodhack,
gpwhatsappR,
nerdingR,
uptodownR,
gpsrcR,
dafontSearchR,
ffR,
papeldeparedeR,
ytSearchR,
pin,
gpsale,
hentaistuber,
assistithtsrc,
pornhubsrc,
pornogratiss,
pensadorr
}