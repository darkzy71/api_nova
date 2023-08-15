const express = require('express')
const router = express.Router()
const fs = require('fs')

const { verificaKey, verificaLimit } = require('../backend/db')
const { getFile } = require('../func.backend/function')
const { cekUsername, cekRequest } = require('../backend/premium')

const {
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
} = require('../apis/textpro')
const { 
metadinha,
styletextR,
telegra,
faustao,
ibere,
eminem,
chapolin,
patolino,
negobam
} = require('../apis/ferramentas')
const { 
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
} = require('../apis/pesquisa')
const {
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
} = require('../apis/download')
const {
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
openaiarte,
fotorg,
imgig
} = require('../apis/outros')

const { 
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
} = require('../apis/canvas')

const { 
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
} = require('../apis/mysirv')

const {
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
} = require('../apis/hentai')

 router.get('/verificarkey', async (req, res) => {
 let apikey = req.query.apikey
 if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
 let check = await verificaKey(apikey)
 if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
 let limit = await verificaLimit(apikey)
 let username = await cekUsername(apikey)
 let request = await cekRequest(apikey)
 res.status(200).send({ status: 200, message: 'succes', resultado: { nome: username, request: request, limit: limit }})
 })
 
 //hentai
 
 router.get('/hentai/nsfwloli', nsfwloli)
 router.get('/hentai/ahegao', ahegao)
 router.get('/hentai/ass', ass)
 router.get('/hentai/bdsm', bdsm)
 router.get('/hentai/blowjob', blowjob)
 router.get('/hentai/cum', cum)
 router.get('/hentai/ero', ero)
 router.get('/hentai/cuckold', cuckold)
 router.get('/hentai/femdom', femdom)
 router.get('/hentai/foot', foot)
 router.get('/hentai/gangbang', gangbang)
 router.get('/hentai/glasses', glasses)
 router.get('/hentai/hentai', hentai)
 router.get('/hentai/hnt_gifs', hnt_gifs)
 router.get('/hentai/jahy', jahy)
 router.get('/hentai/nsfwneko', nsfwNeko)
 router.get('/hentai/orgy', orgy)
 router.get('/hentai/pussy', pussy)
 router.get('/hentai/sfwNeko', sfwNeko)
 router.get('/hentai/tentacles', tentacles)
 router.get('/hentai/thighs', thighs)
 router.get('/hentai/zettairyouiki', zettaiRyouiki)
 
 //mySirv

 router.get('/maker/ttp', ttp)
 router.get('/maker/attp1', attp1r) 
 router.get('/maker/attp2', attp2r)  
 router.get('/maker/attp3', attp3r)  
 router.get('/maker/attp4', attp4r)  
 router.get('/maker/attp5', attp5r)   
 router.get('/maker/attp6', attp6r)    
 router.get('/maker/attp7', attp7r)     
 router.get('/maker/emojimix', emojimix)  
 router.get('/maker/puxadatxt', puxadatxt)   
 router.get('/maker/puxadatxt2', limetext)    
 
 //canvas
 
 router.get('/canvas/welcome', welcome)
 router.get('/canvas/goodbye', goodbye)
 router.get('/canvas/rank', rank)
 router.get('/canvas/menu', menu) 
 router.get('/canvas/comunismo', comunismo)  
 router.get('/canvas/bolsonaro', bolsonaro) 
 router.get('/canvas/bnw', bnw) 
 router.get('/canvas/affect', affect) 
 router.get('/canvas/blur', blurr) 
 router.get('/canvas/beautiful', beautiful)   
 router.get('/canvas/circle', circle) 
 router.get('/canvas/del', del) 
 router.get('/canvas/invert', invert) 
 router.get('/canvas/gay', gay) 
 router.get('/canvas/facepalm', facepalm)      
 router.get('/canvas/dither', dither) 
 router.get('/canvas/jail', jail) 
 router.get('/canvas/magik', magik) 
 router.get('/canvas/rip', rip)   
 router.get('/canvas/sepia', sepia) 
 router.get('/canvas/rotate', rotate) 
 router.get('/canvas/pixelate', pixelate) 
 router.get('/canvas/trash', trash) 
 router.get('/canvas/wasted', wasted)
 router.get('/canvas/wanted', wanted)
 
 //especial
 router.get('/especial/getsource', gethtml)    
  
 //outros
 router.get('/outros/gerar/cpf', geraCpf)
  router.get('/waifu', imgig)
 router.get('/outros/gerar/certidao', geraCertidao)
 router.get('/outros/gerar/cnh', geraCnh)
 router.get('/outros/gerar/rg', geraRg)   
 router.get('/outros/rastrear/shoppee', rastre)    
 router.get('/outros/converter/audio', toaud)
 router.get('/outros/ia/ayu', ayuia)     
router.get('/puxada/cpf', cpf)     
router.get('/puxada/cpf2', cpf2)     
router.get('/puxada/nome', nome)
router.get('/puxada/tel', tel)       
router.get('/puxada/tel2', tel2)     
router.get('/puxada/rgbd', rgdb) 
router.get('/puxada/email', email)      
router.get('/puxada/foto', fotorg)     
router.get('/ia/img', imgia)
router.get('/puxada/placa', placa)
router.get('/ia/tohka', openaitohka)
router.get('/ia/arte', openaiarte)
 
 //download
 router.get('/dl/play', youtubePlay)
 router.get('/dl/playv', youtubePlayvid)
 router.get('/dl/play2', ytplayv2)
 router.get('/dl/ytmp3', youtubetDonlodMp3)
 router.get('/dl/ytmp4', youtubetDonlodMp4)
 router.get('/dl/ytmp3v2', ytmp3v2)
 router.get('/dl/ytmp4v2', ytmp4v2)
 router.get('/dl/tiktok', tiktokdl) 
 router.get('/dl/twitter', twidl)  
 router.get('/dl/sound', sounddl)  
 router.get('/dl/topflix', topdl)    
 router.get('/dl/mediafire', mediafiredl)     
 router.get('/dl/yt', ytvyamate)      
 router.get('/dl/ytmp3v3', ytmp3v3)  
 router.get('/dl/igdl', igdlr) 
 
 
 
// Textpro
 router.get('/textpro/natura', naturalleaves)
 router.get('/textpro/blackpink', blackpink)
 router.get('/textpro/blackpink2', blackpink2)
 router.get('/textpro/business', business)
 router.get('/textpro/diamond', diamond)
 router.get('/textpro/summer', summer)
 router.get('/textpro/golden', golden)
 router.get('/textpro/carved', carved)
 router.get('/textpro/stone', stone)
 router.get('/textpro/glass', glass)
 router.get('/textpro/luxury', luxury)
 router.get('/textpro/whitegold', whitegold)
 router.get('/textpro/giraffe', giraffe)
 router.get('/textpro/sliced', sliced)
 router.get('/textpro/arcane', arcane)
 router.get('/textpro/batman', batman)
 router.get('/textpro/neonglitch', neonglitch)
 router.get('/textpro/neonheart', neonheart)
 router.get('/textpro/ancient', ancient)
 router.get('/textpro/colorled', colorled)
 router.get('/textpro/newyear', newyear)
 router.get('/textpro/crhstimas', crhstimas)
 router.get('/textpro/candy', candy)
 router.get('/textpro/3dchristmas', dchristmas)
 router.get('/textpro/depsea', depsea)
 router.get('/textpro/greeneon', greeneontxt)
 router.get('/textpro/break', breaktxr) 
 router.get('/textpro/pornhub', pornhubtxt)   
 
 //ephoto
  router.get('/ephoto/pubgv', pubgv)
  router.get('/ephoto/anonovo', anonovo)  
  router.get('/ephoto/trigrev', trigrev)  
  router.get('/ephoto/areia', areia)  
  router.get('/ephoto/tela', tela)  
  router.get('/ephoto/blackpinkepo', blackpinkepo)  
  router.get('/ephoto/brotoluz', brotoluz)  
  router.get('/ephoto/balckpingv2', balckpingv2)  
  router.get('/ephoto/borracha', borracha)  
  router.get('/ephoto/brilhante', brilhante)  
  router.get('/ephoto/papel', papel)  
  router.get('/ephoto/diabo', diabo)                    
  router.get('/ephoto/urso', urso)  
  router.get('/ephoto/blur', blur)  
  router.get('/ephoto/vietnam', vietnam)  
  router.get('/ephoto/crack', crack)  
  router.get('/ephoto/goldt', goldt)  
  router.get('/ephoto/grafit4', grafit4)  
  router.get('/ephoto/biscoito', biscoito)  
  router.get('/ephoto/pig', pig)  
  router.get('/ephoto/seta', seta)  
  router.get('/ephoto/grafite', grafite)      
 
 //ferramentas
 router.get('/ferramenta/metadinha', metadinha)
 router.get('/ferramenta/stilodetxt', styletextR)
 router.get('/ferramenta/telegraph', telegra)
 router.get('/ferramenta/voz/faustao', faustao) 
 router.get('/ferramenta/voz/ibere', ibere) 
 router.get('/ferramenta/voz/eminem', eminem) 
 router.get('/ferramenta/voz/chapolin', chapolin) 
 router.get('/ferramenta/voz/patolino', patolino)     
 router.get('/ferramenta/voz/negobam', negobam)
 
 //pesquisa
router.get('/pesquisa/apkmodhack', apkmodhack)
router.get('/pesquisa/gpwhatsapp', gpwhatsappR)
router.get('/pesquisa/nerding', nerdingR)
router.get('/pesquisa/uptodown', uptodownR)
router.get('/pesquisa/gpsrc', gpsrcR)
router.get('/pesquisa/dafontSearch', dafontSearchR)
router.get('/pesquisa/papeldeparede', papeldeparedeR)
router.get('/pesquisa/ytsrc', ytSearchR)
router.get('/pesquisa/topflix', topsrc)  
router.get('/pesquisa/pinterest', pin)  
router.get('/pesquisa/randomgp', gpsale)  
router.get('/pesquisa/hentaistuber', hentaistuber)
router.get('/pesquisa/assistirhentai', assistithtsrc)  
router.get('/pesquisa/pornhubsrc', pornhubsrc)  
router.get('/pesquisa/pornogratis', pornogratiss)  
router.get('/pesquisa/pensador', pensadorr)  
router.get('/pesquisa/geturl', geturlr)  


 router.get('/toFile', async(req, res) => {
 let url = req.query.url 
 const buffer = await getFile(url)
 fs.writeFileSync(__path+ `/tmp/temp.${buffer.ext}`, buffer.data)
 res.sendFile(__path+ `/tmp/temp.${buffer.ext}`)
 })
 
 
router.use(function (req, res, next) {
if (res.statusCode == '200') {
 res.render('404', {
 layout: '404'
})
 }
})
router.use(function (req, res, next) {
if (res.statusCode == '400') {
 res.render('ErroLink', {
 layout: 'ErroLink'
})
 }
})

module.exports = router
