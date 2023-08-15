__path = process.cwd()

const { verificaKey, limitAdd, isLimit, dinheiroadd, expfarm } = require('../backend/db')

const { download_Url } = require("../func.backend/function");

const mintake = require("../func.backend/mintake");

const path = require('path');



const fs = require('fs')



const paramtroerro = __path + '/views/ErroLink.html' //400

const semapikey = __path + '/views/SemKey.html' //404

const semlimit = __path + '/views/SemLimit.html' //429





async function NOME(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("LINK", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function NOME(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("LINK", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function NOME(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("LINK", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function NOME(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("LINK", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function NOME(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("LINK", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function NOME(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("LINK", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function NOME(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("LINK", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function NOME(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("LINK", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function NOME(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("LINK", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function NOME(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("LINK", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function NOME(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("LINK", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function NOME(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("LINK", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function NOME(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("LINK", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function NOME(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("LINK", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function NOME(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("LINK", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function NOME(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("LINK", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function NOME(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("LINK", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function NOME(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("LINK", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function NOME(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("LINK", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function NOME(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("LINK", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function NOME(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("LINK", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function NOME(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("LINK", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function NOME(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("LINK", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function NOME(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("LINK", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function pornhubtxt(req, res) {

try {

let nome = req.query.nome

let nome2 = req.query.nome2

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!nome2) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

  .textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [

    nome, nome2

  ])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function greeneontxt(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/green-neon-text-effect-874.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function breaktxr(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/break-wall-text-effect-871.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function naturalleaves(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function blackpink(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function blackpink2(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/create-a-blackpink-logo-decorated-with-roses-online-free-1080.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function business(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/3d-business-sign-text-effect-1078.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function diamond(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/create-a-quick-sparkling-diamonds-text-effect-1077.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function summer(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function golden(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/free-creative-3d-golden-text-effect-online-1075.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function carved(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/create-carved-stone-text-effect-online-1074.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function stone(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function glass(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/create-3d-style-glass-text-effect-online-1072.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function luxury(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/create-a-3d-luxury-metallic-text-effect-for-free-1071.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function whitegold(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/elegant-white-gold-3d-text-effect-online-free-1070.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function giraffe(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/create-3d-giraffe-text-effect-online-1069.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function sliced(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function arcane(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/create-text-effects-arcane-tv-series-online-1067.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function batman(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function neonglitch(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/neon-light-glitch-text-generator-online-1063.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function neonheart(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function ancient(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function colorled(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/color-led-display-screen-text-effect-1059.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function newyear(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/happy-new-year-2022-greeting-3d-card-1058.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function crhstimas(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/christmas-tree-text-effect-online-free-1057.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function candy(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/create-christmas-candy-cane-text-effect-1056.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function dchristmas(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/3d-christmas-text-effect-by-name-1055.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

 })

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



async function depsea(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

.textpro("https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html", [

nome,

])

.then((data) => {

return download_Url(data, '../tmp/textpro.jpg', function(){

return res.sendFile(path.resolve('../tmp/textpro.jpg'))

})

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}



//***************@ EPHOTO360*************************\\



//video 1 text

async function pubgv(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

  .ephoto2("https://ephoto360.com/tao-avatar-video-pubg-phong-cach-nhieu-song-glitch-627.html", [

    nome,

  ])

.then((data) => {

return download_Url(`https://s1.ephoto360.com${data}`, './tmp/ephoto.mp4', function(){

return res.sendFile(path.resolve('./tmp/ephoto.mp4'))

})

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}  



async function anonovo(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

  .ephoto2("https://ephoto360.com/tao-thiep-video-new-year-countdown-2022-888.html", [

    nome,

  ])

.then((data) => {

return download_Url(`https://s1.ephoto360.com${data}`, './tmp/ephoto.mp4', function(){

return res.sendFile(path.resolve('./tmp/ephoto.mp4'))

})

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}  



async function natalmsg(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

  .ephoto2("https://ephoto360.com/tao-thiep-video-giang-sinh-dep-va-an-tuong-danh-tang-ban-be-va-nguoi-than-885.html", [

    nome,

  ])

.then((data) => {

return download_Url(`https://s1.ephoto360.com${data}`, './tmp/ephoto.mp4', function(){

return res.sendFile(path.resolve('./tmp/ephoto.png'))

})

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}  



async function trigrev(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

  .ephoto2("https://ephoto360.com/hieu-ung-video-logo-con-ho-ky-thuat-so-862.html", [

    nome,

  ])

.then((data) => {

return download_Url(`https://s1.ephoto360.com${data}`, './tmp/ephoto.mp4', function(){

return res.sendFile(path.resolve('./tmp/ephoto.mp4'))

})

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}  



// 1 texto

async function areia(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

  .ephoto2("https://ephoto360.com/hieu-ung-chu-tren-nen-cat-trang-tuyet-dep-663.html", [

    nome,

  ])

.then((data) => {

return download_Url(`https://s1.ephoto360.com${data}`, './tmp/ephoto.png', function(){

return res.sendFile(path.resolve('./tmp/ephoto.png'))

})

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}  



async function tela(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

  .ephoto2("https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-tren-vai-62.html", [

    nome,

  ])

.then((data) => {

return download_Url(`https://s1.ephoto360.com${data}`, './tmp/ephoto.png', function(){

return res.sendFile(path.resolve('./tmp/ephoto.png'))

})

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}  

//daqui

async function blackpinkepo(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

  .ephoto2("https://ephoto360.com/hieu-ung-chu-phong-cach-blackpink-doc-dao-712.html", [

    nome,

  ])

.then((data) => {

return download_Url(`https://s1.ephoto360.com${data}`, './tmp/ephoto.png', function(){

return res.sendFile(path.resolve('./tmp/ephoto.png'))

})

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}  



async function brotoluz(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

  .ephoto2("https://ephoto360.com/hieu-ung-chu/tao-hieu-ung-chu-mam-anh-sang-74.html", [

    nome,

  ])

.then((data) => {

return download_Url(`https://s1.ephoto360.com${data}`, './tmp/ephoto.png', function(){

return res.sendFile(path.resolve('./tmp/ephoto.png'))

})

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}  



async function balckpingv2(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

  .ephoto2("https://ephoto360.com/hieu-ung-tao-logo-phong-cach-blackpink-truc-tuyen-843.html", [

    nome,

  ])

.then((data) => {

return download_Url(`https://s1.ephoto360.com${data}`, './tmp/ephoto.png', function(){

return res.sendFile(path.resolve('./tmp/ephoto.png'))

})

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}  



async function borracha(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

  .ephoto2("https://ephoto360.com/tao-hieu-ung-tay-xoa-chu-truc-tuyen-850.html", [

    nome,

  ])

.then((data) => {

return download_Url(`https://s1.ephoto360.com${data}`, './tmp/ephoto.png', function(){

return res.sendFile(path.resolve('./tmp/ephoto.png'))

})

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}  



async function brilhante(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

  .ephoto2("https://ephoto360.com/tao-hieu-ung-chu-phat-sang-online-834.html", [

    nome,

  ])

.then((data) => {

return download_Url(`https://s1.ephoto360.com${data}`, './tmp/ephoto.png', function(){

return res.sendFile(path.resolve('./tmp/ephoto.png'))

})

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}  



async function papel(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

  .ephoto2("https://ephoto360.com/hieu-ung-chu-cat-giay-nghe-thuat-online-824.html", [

    nome,

  ])

.then((data) => {

return download_Url(`https://s1.ephoto360.com${data}`, './tmp/ephoto.png', function(){

return res.sendFile(path.resolve('./tmp/ephoto.png'))

})

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}  



async function diabo(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

  .ephoto2("https://ephoto360.com/hieu-ung-chu-neon-canh-ac-quy-online-808.html", [

    nome,

  ])

.then((data) => {

return download_Url(`https://s1.ephoto360.com${data}`, './tmp/ephoto.png', function(){

return res.sendFile(path.resolve('./tmp/ephoto.png'))

})

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}  



async function urso(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

  .ephoto2("https://ephoto360.com/tao-logo-mascot-gau-xam-phong-cach-den-trang-truc-tuyen-801.html", [

    nome,

  ])

.then((data) => {

return download_Url(`https://s1.ephoto360.com${data}`, './tmp/ephoto.png', function(){

return res.sendFile(path.resolve('./tmp/ephoto.png'))

})

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}  



async function blur(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

  .ephoto2("https://ephoto360.com/hieu-ung-viet-chu-len-cua-kinh-mua-tam-trang-dep-682.html", [

    nome,

  ])

.then((data) => {

return download_Url(`https://s1.ephoto360.com${data}`, './tmp/ephoto.png', function(){

return res.sendFile(path.resolve('./tmp/ephoto.png'))

})

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}  



async function vietnam(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

  .ephoto2("https://ephoto360.com/tao-hieu-ung-chu-quoc-ky-viet-nam-truc-tuyen-884.html", [

    nome,

  ])

.then((data) => {

return download_Url(`https://s1.ephoto360.com${data}`, './tmp/ephoto.png', function(){

return res.sendFile(path.resolve('./tmp/ephoto.png'))

})

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}  



async function crack(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

  .ephoto2("https://ephoto360.com/tao-hieu-ung-chu-vet-nut-3d-online-832.html", [

    nome,

  ])

.then((data) => {

return download_Url(`https://s1.ephoto360.com${data}`, './tmp/ephoto.png', function(){

return res.sendFile(path.resolve('./tmp/ephoto.png'))

})

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}  



async function goldt(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

  .ephoto2("https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-vang-moi-271.html", [

    nome,

  ])

.then((data) => {

return download_Url(`https://s1.ephoto360.com${data}`, './tmp/ephoto.png', function(){

return res.sendFile(path.resolve('./tmp/ephoto.png'))

})

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}  



async function grafit4(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

  .ephoto2("https://ephoto360.com/hieu-ung-chu/viet-chu-graffiti-4-178.html", [

    nome,

  ])

.then((data) => {

return download_Url(`https://s1.ephoto360.com${data}`, './tmp/ephoto.png', function(){

return res.sendFile(path.resolve('./tmp/ephoto.png'))

})

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}  



async function biscoito(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

  .ephoto2("https://ephoto360.com/hieu-ung-chu/tao-chu-banh-vung-103.html", [

    nome,

  ])

.then((data) => {

return download_Url(`https://s1.ephoto360.com${data}`, './tmp/ephoto.png', function(){

return res.sendFile(path.resolve('./tmp/ephoto.png'))

})

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}  



async function pig(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

  .ephoto2("https://ephoto360.com/hieu-ung-chu-3d-cung-heo-cute-dang-yeu-397.html", [

    nome,

  ])

.then((data) => {

return download_Url(`https://s1.ephoto360.com${data}`, './tmp/ephoto.png', function(){

return res.sendFile(path.resolve('./tmp/ephoto.png'))

})

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}  



//radio 1 texto

async function seta(req, res) {

try {

let nome = req.query.nome

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

let radio = "e0723d60-fc0d-421f-bf8f-a9b9b61e4be6"

mintake 

  .ephoto("https://ephoto360.com/tao-hieu-ung-mui-ten-dinh-kem-chu-ky-nhieu-mau-846.html", [

    nome,

  ],radio)

.then((data) => {

return download_Url(`https://s1.ephoto360.com${data}`, './tmp/ephoto.png', function(){

return res.sendFile(path.resolve('./tmp/ephoto.png'))

})

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}  

// 2 texto

async function grafite(req, res) {

try {

let nome = req.query.nome

let nome2 = req.query.nome2

let apikey = req.query.apikey

if (!nome) return res.sendFile(paramtroerro)

if (!nome2) return res.sendFile(paramtroerro)

if (!apikey) return res.sendFile(paramtroerro)

let check = await verificaKey(apikey)

if (!check) return res.sendFile(semapikey)

let limit = await isLimit(apikey);

if (limit) return res.sendFile(semlimit)

await limitAdd(apikey);

await expfarm(apikey);

mintake 

  .ephoto2("https://ephoto360.com/viet-chu-graffiti-nghe-thuat-tren-tuong-day-mau-sac-792.html", [

    nome, nome2,

  ])

.then((data) => {

return download_Url(`https://s1.ephoto360.com${data}`, './tmp/ephoto.png', function(){

return res.sendFile(path.resolve('./tmp/ephoto.png'))

})

})

} catch(err) {

console.log(err)

res.status(500).send({ status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error' })

}

}  

     

  

module.exports = { 

naturalleaves,

blackpink,

blackpink2,

business,

diamond,

summer,

golden,

carved,

stone,

glass,

luxury,

whitegold,

giraffe,

sliced,

arcane,

batman,

neonglitch,

neonheart,

ancient,

colorled,

newyear,

crhstimas,

candy,

dchristmas,

depsea,

pubgv,

anonovo,

natalmsg,

trigrev,

areia,

tela,

blackpinkepo,

brotoluz,

balckpingv2,

borracha,

brilhante,

papel,

diabo,

urso,

blur,

vietnam,

crack,

goldt,

grafit4,

biscoito,

pig,

seta,

grafite,

greeneontxt,

breaktxr,

pornhubtxt

}

