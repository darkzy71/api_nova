const express = require('express');
const router = express.Router();

const { notAuthenticated } = require('../func.backend/auth');
const { verifyUser } = require('../backend/db'); 
const { enviarnozap, enviarnozap_button, enviarnozap_buttontime, enviarbutimg } = require('../ayubot');

router.get('/', notAuthenticated, (req, res) => {
res.redirect('/i/entrar');
})

router.get('/conta', notAuthenticated, async (req, res, next) => {
const id = req.query.id;
const check = await verifyUser(id);
if (!check) {
req.flash('erorr_msg', 'Falhou! talvez o id não esta correto.'); 
res.redirect('/i/entrar');
} else {
req.flash('success_msg', 'Parabéns sua conta foi verificada, agora você pode fazer login');
res.redirect('/i/entrar');
}
});

module.exports = router;
