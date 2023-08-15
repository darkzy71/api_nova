__path = process.cwd()
const { verificaKey, limitAdd, isLimit, dinheiroadd, expfarm } = require('../backend/db')

const fs = require('fs')

const paramtroerro = __path + '/views/ErroLink.html' //400
const semapikey = __path + '/views/SemKey.html' //404
const semlimit = __path + '/views/SemLimit.html' //429

const { AyuUp } = require("../func.backend/uploader");

const { Youtube } = require('ytdownloader.js')

const { getBuffer, getRandom } = require("../func.backend/buff");
const { igdl, ytdl, geturl } = require('../func.backend/api')

const util = require('util')

const {
ytDonlodMp3,
ytDonlodMp4,
ytPlayMp3,
ytPlayMp4,
ytSearch
} = require("../func.backend/youtube");

const { 
ytPlay, 
ytMp3, 
ytMp4 
} = require("../func.backend/youtubev2");

const { ttdownloader } = require("../func.backend/tkdl");
const { twitterdl } = require("../func.backend/twitterdl");
const {
 topflixdl,
 topflix
} = require("../func.backend/topflix");

const { 
soundl
} = require('../func.backend/api')

const mediafire = require("../func.backend/mediafire");


async function ytmp3v3(req, res) {
 let apikey = req.query.apikey
 let query = req.query.link
 if (!apikey) return res.sendFile(paramtroerro)
 if (!query) return res.sendFile(paramtroerro)
 if (!query.includes('youtu')) return res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'preciso de um link que seja do YouTube!!!'
})
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
try {
infomusic = await new Youtube().ytmp3(query)
res.json({
status: 'operando', 
admin: 'https://wa.me/5562936180708', 
resultado: infomusic
})
} catch(err) {
console.log(err)
res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'ocorreu um erro no servidor interno, contate o admin no número acima!!'
})
}
}

async function ytvyamate(req, res) {
 let apikey = req.query.apikey
 let query = req.query.link
 if (!apikey) return res.sendFile(paramtroerro)
 if (!query) return res.sendFile(paramtroerro) 
 if (!query.includes('youtu')) return res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'preciso de um link que seja do YouTube!!!'
}) 
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
ytdl(query).then(result => {
res.json({
status: 'operando', 
admin: 'https://wa.me/5562936180708', 
resultado: result
})
}).catch(error => {
console.log(error);
res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'ocorreu um erro no servidor interno, contate o admin no número acima!!'
})
});
}

async function igdlr(req, res) {
 let apikey = req.query.apikey
 let query = req.query.link
 if (!apikey) return res.sendFile(paramtroerro)
 if (!query) return res.sendFile(paramtroerro) 
 if (!query.includes('instagram.com')) return res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'preciso de um link que seja do Instagram!!!'
}) 
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
igdl(query).then(result => {
res.json({
status: 'operando', 
admin: 'https://wa.me/5562936180708', 
resultado: result
})
}).catch(error => {
console.log(error);
res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'ocorreu um erro no servidor interno, contate o admin no número acima!!'
})
});
}

async function geturlr(req, res) {
 let apikey = req.query.apikey
 let query = req.query.nome
 if (!apikey) return res.sendFile(paramtroerro)
 if (!query) return res.sendFile(paramtroerro) 
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
geturl(query).then(result => {
res.json({
status: 'operando', 
admin: 'https://wa.me/5562936180708', 
resultado: result
})
}).catch(error => {
console.log(error);
res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'ocorreu um erro no servidor interno, contate o admin no número acima!!'
})
});
}

async function youtubePlay(req, res) {
 let apikey = req.query.apikey
 let query = req.query.nome
 if (!apikey) return res.sendFile(paramtroerro)
 if (!query) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
ytPlayMp3(query).then(result => {
res.json({
status: 'operando', 
admin: 'https://wa.me/5562936180708', 
resultado: result
})
}).catch(error => {
console.log(error);
res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'ocorreu um erro no servidor interno, contate o admin no número acima!!'
})
});
}

async function youtubePlayvid(req, res) {
 let apikey = req.query.apikey
 let query = req.query.nome
 if (!apikey) return res.sendFile(paramtroerro)
 if (!query) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
ytPlayMp4(query).then(result => {
res.json({
status: 'operando', 
admin: 'https://wa.me/5562936180708', 
resultado: result
})
}).catch(error => {
console.log(error);
res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'ocorreu um erro no servidor interno, contate o admin no número acima!!'
})
});
}

async function youtubetDonlodMp3(req, res) {
 let apikey = req.query.apikey
 let query = req.query.link
 if (!apikey) return res.sendFile(paramtroerro)
 if (!query) return res.sendFile(paramtroerro)
 if (!query.includes('youtu')) return res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'preciso de um link que seja do YouTube!!!'
})  
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
ytDonlodMp3(query).then(result => {
res.json({
status: 'operando', 
admin: 'https://wa.me/5562936180708', 
resultado: result
})
}).catch(error => {
console.log(error);
res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'ocorreu um erro no servidor interno, contate o admin no número acima!!'
})
});
}

async function youtubetDonlodMp4(req, res) {
 let apikey = req.query.apikey
 let query = req.query.link
 if (!apikey) return res.sendFile(paramtroerro)
 if (!query) return res.sendFile(paramtroerro) 
 if (!query.includes('youtu')) return res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'preciso de um link que seja do YouTube!!!'
})  
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
ytDonlodMp4(query).then(result => {
res.json({
status: 'operando', 
admin: 'https://wa.me/5562936180708', 
resultado: result
})
}).catch(error => {
console.log(error);
res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'ocorreu um erro no servidor interno, contate o admin no número acima!!'
})
});
}

async function ytplayv2(req, res) {
 let apikey = req.query.apikey
 let query = req.query.nome
 if (!apikey) return res.sendFile(paramtroerro)
 if (!query) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
ytPlay(query).then(result => {
res.json({
status: 'operando', 
admin: 'https://wa.me/5562936180708', 
resultado: result
})
}).catch(error => {
console.log(error);
res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'ocorreu um erro no servidor interno, contate o admin no número acima!!'
})
});
}


async function ytmp3v2(req, res) {
 let apikey = req.query.apikey
 let query = req.query.link
 if (!apikey) return res.sendFile(paramtroerro)
 if (!query) return res.sendFile(paramtroerro)
 if (!query.includes('youtu')) return res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'preciso de um link que seja do YouTube!!!'
})  
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
ytMp3(query).then(result => {
res.json({
status: 'operando', 
admin: 'https://wa.me/5562936180708', 
resultado: result
})
}).catch(error => {
console.log(error);
res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'ocorreu um erro no servidor interno, contate o admin no número acima!!'
})
});
}

async function ytmp4v2(req, res) {
 let apikey = req.query.apikey
 let query = req.query.link
 if (!apikey) return res.sendFile(paramtroerro)
 if (!query) return res.sendFile(paramtroerro) 
 if (!query.includes('youtu')) return res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'preciso de um link que seja do YouTube!!!'
})  
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
ytMp4(query).then(result => {
res.json({
status: 'operando', 
admin: 'https://wa.me/5562936180708', 
resultado: result
})
}).catch(error => {
console.log(error);
res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'ocorreu um erro no servidor interno, contate o admin no número acima!!'
})
});
}

async function tiktokdl(req, res) {
 let apikey = req.query.apikey
 let query = req.query.link
 if (!apikey) return res.sendFile(paramtroerro)
 if (!query) return res.sendFile(paramtroerro)
 if (!query.includes('tiktok.com')) return res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'preciso de um link que seja do TikTok!!!'
})    
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
ttdownloader(query).then(result => {
res.json({
status: 'operando', 
admin: 'https://wa.me/5562936180708', 
resultado: result
})
}).catch(error => {
console.log(error);
res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'ocorreu um erro no servidor interno, contate o admin no número acima!!'
})
});
}

async function twidl(req, res) {
 let apikey = req.query.apikey
 let query = req.query.link
 if (!apikey) return res.sendFile(paramtroerro)
 if (!query) return res.sendFile(paramtroerro)
 if (!query.includes('twitter.com')) return res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'preciso de um link que seja do Twitter!!!'
})     
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
twitterdl(query).then(result => {
res.json({
status: 'operando', 
admin: 'https://wa.me/5562936180708', 
resultado: result
})
}).catch(error => {
console.log(error);
res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'ocorreu um erro no servidor interno, contate o admin no número acima!!'
})
});
}

async function sounddl(req, res) {
 let apikey = req.query.apikey
 let query = req.query.link
 if (!apikey) return res.sendFile(paramtroerro)
 if (!query) return res.sendFile(paramtroerro) 
 if (!query.includes('soundcloud.com')) return res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'preciso de um link que seja do SoundCloud!!!'
})      
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
try {
soundl(query).then(result => {
res.json({
status: 'operando', 
admin: 'https://wa.me/5562936180708', 
resultado: result
})
}).catch(error => {
console.log(error);
res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'ocorreu um erro no servidor interno, contate o admin no número acima!!'
})
});
} catch(err) {
console.log(err)
res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'ocorreu um erro no servidor interno, contate o admin no número acima!!'
})
}
}

async function topdl(req, res) {
 let apikey = req.query.apikey
 let query = req.query.link
 if (!apikey) return res.sendFile(paramtroerro)
 if (!query) return res.sendFile(paramtroerro) 
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
topflixdl(query).then(result => {
res.json({
status: 'operando', 
admin: 'https://wa.me/5562936180708', 
resultado: result
})
}).catch(error => {
console.log(error);
res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'ocorreu um erro no servidor interno, contate o admin no número acima!!'
})
});
}

async function topsrc(req, res) {
 let apikey = req.query.apikey
 let query = req.query.nome
 if (!apikey) return res.sendFile(paramtroerro)
 if (!query) return res.sendFile(paramtroerro) 
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
topflix(query).then(result => {
res.json({
status: 'operando', 
admin: 'https://wa.me/5562936180708', 
resultado: result
})
}).catch(error => {
console.log(error);
res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'ocorreu um erro no servidor interno, contate o admin no número acima!!'
})
});
}

async function mediafiredl(req, res) {
 let apikey = req.query.apikey
 let query = req.query.link
 if (!apikey) return res.sendFile(paramtroerro)
 if (!query) return res.sendFile(paramtroerro) 
 if (!query.includes('mediafire.com')) return res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'preciso de um link que seja do MediaFire!!!'
})       
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
try {
mediafire(query).then(result => {
res.json({
status: 'operando', 
admin: 'https://wa.me/5562936180708', 
resultado: result
})
}).catch(error => {
console.log(error);
res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'ocorreu um erro no servidor interno, contate o admin no número acima!!'
})
});
} catch(err) {
console.log(err)
res.json({
status: 'parado', 
admin: 'https://wa.me/5562936180708', 
resultado: 'ocorreu um erro no servidor interno, contate o admin no número acima!!'
})
}
}

module.exports = { 
youtubePlay,
youtubePlayvid,
youtubetDonlodMp3,
youtubetDonlodMp4,
ytplayv2,
ytmp3v2,
ytmp4v2,
tiktokdl,
twidl,
sounddl,
topdl,
topsrc,
mediafiredl,
ytvyamate,
ytmp3v3,
geturlr,
igdlr
}