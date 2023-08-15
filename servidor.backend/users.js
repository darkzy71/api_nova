require('../configuração');
const express = require('express');
const router = express.Router();
const passport = require('passport');

const { getHashedPassword, randomText } = require('../func.backend/function');
const { verificaNome, gerarUsuario, verificaZap, checkVerify } = require('../backend/db');
const { notAuthenticated, captchaRegister, captchaLogin } = require('../func.backend/auth');
const { usuario } = require('../backend/modelagem');
const { enviarnozap, enviarnozap_button, enviarnozap_buttontime, enviarnozaptime } = require('../ayubot');
const Recaptcha = require('express-recaptcha').RecaptchaV2;
const recaptcha = new Recaptcha(recaptcha_key_1, recaptcha_key_2);

router.get('/', notAuthenticated, (req, res) => {
res.render('login', {
layout: 'login'
})
})

router.get('/entrar', notAuthenticated, recaptcha.middleware.render, (req, res) => {
res.render('login', {
recaptcha: res.recaptcha,
layout: 'login'
})
})

router.post('/entrar', recaptcha.middleware.verify, captchaLogin, async(req, res, next) => {
let { username, password } = req.body;
usuario.findOne({nome_usuario: username}).then(async (users) => {
if (!users) {
req.flash('error_msg', 'Esse nome de usuário não está registrado');
return res.redirect('/i/entrar');
} else if(await checkVerify(username)) {
req.flash('error_msg', 'Sua conta não foi verificada, caso a verificação não tenha chegado em seu Whatsapp, fale com o suporte : 5562936180708');
return res.redirect('/i/entrar');
} else {
passport.authenticate('local', {
successRedirect: '/docs',
failureRedirect: '/i/entrar',
failureFlash: true,
})(req, res, next);
}
 })
 })

router.get('/rg', notAuthenticated, recaptcha.middleware.render, (req, res) => {
res.render('registro', {
recaptcha: res.recaptcha,
layout: 'registro'
})
})

router.post('/rg', recaptcha.middleware.verify, captchaRegister, async (req, res) => {
try {
let { username, nomorWa, password, confirmPassword } = req.body;
if (username.length < 3) {
req.flash('error_msg', 'O nome de usuário deve ter pelo menos 3 caracteres');
return res.redirect('/i/rg');
}
if (password.length < 6 || confirmPassword < 6) {
req.flash('error_msg', 'A senha deve ter pelo menos 6 caracteres');
return res.redirect('/i/rg');
}

/*if (!nomorWa.includes(55)) {
req.flash('error_msg', 'Coloque o +55 em seu número!');
return res.redirect('/i/rg');
}*/

if (nomorWa.length < 10) {
 // console.log(nomorWa.length)
req.flash('error_msg', 'Especifique que seu número do whatsapp e brasileiro e que tenha pelo menos 10 caracteres!');
return res.redirect('/i/rg');
 }

if (password === confirmPassword) {
let checkUser = await verificaNome(username);
let verificaZaps = await verificaZap(nomorWa);
if (checkUser || verificaZaps) {
req.flash('error_msg', 'Já existe um usuário com a mesma conta');
return res.redirect('/i/rg');
} else {
let hashedPassword = getHashedPassword(password);
let apikey = randomText(10);
let id = randomText(5);
let linkid = "https://"+req.hostname+"/verificar/conta?id="+id
let inf = `❗VERIFIQUE SUA CONTA❗\n\nOlá ${username} clique no link abaixo para verificar sua conta!\n\n${linkid}`
let inf2 = `verifique`
let templateButtons = [
  {index: 1, urlButton: {displayText: '⭐ Copiar Link!', url: 'https://www.whatsapp.com/otp/copy/' + linkid}},
  {index: 2, urlButton: {displayText: '⭐ Verificar Conta!', url: linkid}},
  {index: 3, urlButton: {displayText: '⭐ Falar com Suporte!', url: 'https://wa.me/5562936180708?text=preciso+de+ajuda'}},
]
let infowner = `${linkid}\n\n${username}\n\nwa.me/${nomorWa}`
enviarnozap(nomorWa, '❗')
enviarnozap(nomorWa, 'aguarde, gerando seu link...')
enviarnozaptime(nomorWa, inf)
//enviarnozap_buttontime(nomorWa, inf, inf2, templateButtons)
let infowner2 = `reenviar msg`
enviarnozap('5562936180708', infowner)
gerarUsuario(username, hashedPassword, apikey, id, nomorWa, 'imgaqui');
req.flash('success_msg', 'cadastro concluído!, foi enviado uma mensagem em seu Whatsapp, caso não tenha recebido a mensagem, contate o suporte! +5562936180708');
return res.redirect('/i/entrar');
}
} else {
req.flash('error_msg', 'As Senhas não corresponde.');
return res.redirect('/i/rg');
}
} catch(err) {
console.log(err);
}
})

router.get('/logout', (req,res) => {
req.logout();
req.flash('success_msg', 'sucesso ao sair');
res.redirect('/i/entrar');
});

module.exports = router;
