__path = process.cwd()
const { verificaKey, limitAdd, isLimit, dinheiroadd, expfarm } = require('../backend/db')

const fs = require('fs')

const paramtroerro = __path + '/views/ErroLink.html' //400
const semapikey = __path + '/views/SemKey.html' //404
const semlimit = __path + '/views/SemLimit.html' //429

const { getBuffer , getRandom} = require("../func.backend/buff");

 async function nsfwloli(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync('func.backend/hentai/nsfwlolis.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.type('png')
 res.send(await getBuffer(random))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}
 
 async function ahegao(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync('func.backend/hentai/ahegao.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.type('png')
 res.send(await getBuffer(random))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}
 
 async function ass(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync('func.backend/hentai/ass.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.type('png')
 res.send(await getBuffer(random))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}
 async function bdsm(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync('func.backend/hentai/bdsm.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.type('png')
 res.send(await getBuffer(random))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
} 
 
 async function blowjob(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync('func.backend/hentai/blowjob.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.type('png')
 res.send(await getBuffer(random))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

 async function cuckold(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync('func.backend/hentai/cuckold.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.type('png')
 res.send(await getBuffer(random))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}
 
 async function cum(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync('func.backend/hentai/cum.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.type('png')
 res.send(await getBuffer(random))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}
 
 async function ero(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync('func.backend/hentai/ero.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.type('png')
 res.send(await getBuffer(random))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}
 async function femdom(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync('func.backend/hentai/femdom.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.type('png')
 res.send(await getBuffer(random))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
} 
 
 async function gangbang(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync('func.backend/hentai/gangbang.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.type('png')
 res.send(await getBuffer(random))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

 async function foot(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync('func.backend/hentai/foot.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.type('png')
 res.send(await getBuffer(random))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
} 
 
 async function glasses(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync('func.backend/hentai/glasses.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.type('png')
 res.send(await getBuffer(random))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}
 
 async function hentai(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync('func.backend/hentai/hentai.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.type('png')
 res.send(await getBuffer(random))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}
 async function hnt_gifs(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync('func.backend/hentai/hnt_gifs.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.type('gif')
 res.send(await getBuffer(random))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
} 
 
 async function jahy(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync('func.backend/hentai/jahy.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.type('png')
 res.send(await getBuffer(random))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

 async function masturbation(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync('func.backend/hentai/masturbation.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.type('png')
 res.send(await getBuffer(random))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
} 
 
 async function nsfwNeko(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync('func.backend/hentai/nsfwNeko.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.type('png')
 res.send(await getBuffer(random))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}
 
 async function orgy(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync('func.backend/hentai/orgy.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.type('png')
 res.send(await getBuffer(random))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}
 async function pussy(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync('func.backend/hentai/pussy.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.type('png')
 res.send(await getBuffer(random))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
} 
 
 async function sfwNeko(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync('func.backend/hentai/sfwNeko.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.type('png')
 res.send(await getBuffer(random))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}

 async function tentacles(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync('func.backend/hentai/tentacles.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.type('png')
 res.send(await getBuffer(random))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
} 
 
async function thighs(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync('func.backend/hentai/thighs.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.type('png')
 res.send(await getBuffer(random))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}
 
async function yuri(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync('func.backend/hentai/yuri.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.type('png')
 res.send(await getBuffer(random))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}
 
async function zettaiRyouiki(req, res) {
 	try {
 let apikey = req.query.apikey
 if (!apikey) return res.sendFile(paramtroerro)
 let check = await verificaKey(apikey)
 if (!check) return res.sendFile(semapikey)
 let limit = await isLimit(apikey);
 if (limit) return res.sendFile(semlimit)
await limitAdd(apikey);
await expfarm(apikey);
 json = JSON.parse(fs.readFileSync('func.backend/hentai/zettaiRyouiki.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.type('png')
 res.send(await getBuffer(random))
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/5562981386093', resultado: 'error'
		})
	}
}


module.exports = { 
nsfwloli,
ahegao,
ass,
bdsm,
blowjob,
cuckold,
cum,
ero,
femdom,
gangbang,
foot,
glasses,
hentai,
hnt_gifs,
jahy,
masturbation,
nsfwNeko,
orgy,
pussy,
sfwNeko,
tentacles,
thighs,
zettaiRyouiki
}