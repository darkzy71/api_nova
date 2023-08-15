const Insta = require('./insta.js');
const client = new Insta.Client();
const fetch = require('node-fetch')
const axios = require('axios')
const {
	exec,
	spawn,
	execSync
} = require("child_process")
const util = require('util')
const { getBuffer , getRandom} = require("./func.backend/buff");

client.on('connected', () => {
	console.log('conectado no instagram!')
});
client.on('pendingRequest', chat => {
	chat.approve();
});

const prefix = '/'

client.on('messageCreate', async ayu => {
if (!ayu.content || ayu.authorID === client.user.id) return;
 const budy = ayu.content
	const args = ayu.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	const q = args.join(" ").replace(command,'')
	const pushname = ayu.author.username
	const sender = ayu.author.id
	const ppimg = ayu.author.avatarURL
	const from = ayu.chatID
	
	ayu.markSeen();
	ayu.chat.startTyping(2000, true)	
	
const pperfil = await getBuffer(ppimg)

const reply = (teks) => {
ayu.chat.sendMessage(teks)
}

if (budy.startsWith('=>')) {
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))
}
}

if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}



if(ayu.content) {
try {
const sami = await fetch(encodeURI(`https://api.simsimi.net/v2/?text=${ayu.content}&lc=pt&cf=false`), {method: 'GET'})
const res = await sami.json()
reply(res.success.replace('Eu não resposta. Por favor me ensine.','não use emoji seu animal 🤨'))
} catch {
reply('não entendi 🙂')
}
}

switch (command) {
		

//HENTAI
case 'orgy': case 'yuri': case 'thighs': case 'nsfwloli':
case 'femdom': case 'gangbang': case 'foot': case 'glasses': case 'jahy': case 'masturbation': case 'nsfwNeko':
case 'ero': case 'cum': case 'cuckold': case 'blowjob': case 'bdsm': case 'ass': case 'ahegao': {
try {
reply('aguarde')
ayu.chat.sendPhoto(`https://tohka.tech/api/hentai/${command}?apikey=igbot`)
} catch(err) {
console.log(err)
reply('deu erro ;-;')
}
}
break		
	
case 'menu':
inf = 
`
Olá sou um bot do site : https://tohka.tech
Caso queira ver alguns hentai e só pedir
vou deixar uma lista abaixo, por enquanto e só isso 😁

${prefix}hentai
${prefix}ass
`
reply(inf)
break
	
default: break
}})
client.login('tohka.tech', '34615194');
