require('../configuração');
const { usuario } = require('./modelagem');
const toMs = require('ms');

    async function adicionar_premium(nome_usuario, customKey, expired) {
        usuario.updateOne({nome_usuario: nome_usuario}, {apikey: customKey, premium: Date.now() + toMs(expired), limit: limitPremium}, function (err, res) {
            if (err) throw err;
        })
    }
    module.exports.adicionar_premium = adicionar_premium

    async function tempo_expirado() {
        let users = await usuario.find({});
        users.forEach(async(data) => {
            let { premium, defaultKey, nome_usuario } = data
            if (!premium || premium === null) return
            if (Date.now() >= premium) {
                usuario.updateOne({nome_usuario: nome_usuario}, {apikey: defaultKey, premium: null, limit: limitOfc}, function (err, res) {
                    if (err) throw err;
                    console.log(`O premium de ${nome_usuario} acabou`)
                })
            }
        })
    }
    module.exports.tempo_expirado = tempo_expirado
    
    async function verificar_dias_expirados(nome_usuario) {
        let users = await usuario.findOne({nome_usuario: nome_usuario});
        if (users !== null) {
            return users.premium
        } else {
            return false
        }
    }
    module.exports.verificar_dias_expirados = verificar_dias_expirados
    
        async function verificar_img(nome_usuario) {
        let users = await usuario.findOne({nome_usuario: nome_usuario});
        if (users !== null) {
            return users.perfil
        } else {
            return false
        }
    }
    module.exports.verificar_img = verificar_img

async function verificar_musica(nome_usuario) {
        let users = await usuario.findOne({nome_usuario: nome_usuario});
        if (users !== null) {
            return users.musica
        } else {
            return false
        }
    }
    module.exports.verificar_musica = verificar_musica

    async function deletar_premium(nome_usuario) {
        let users = await usuario.findOne({nome_usuario: nome_usuario});
        let key = users.defaultKey
        usuario.updateOne({nome_usuario: nome_usuario}, {apikey: key, premium: null, limit: limitOfc}, function (err, res) {
            if (err) throw err;
        })
    }
    module.exports.deletar_premium = deletar_premium

    async function checkPremium(nome_usuario) {    
        let users = await usuario.findOne({nome_usuario: nome_usuario});
        if (users.premium === null) {
            return false;
        } else {
            return true;
        };
    };
    module.exports.checkPremium = checkPremium;

    async function changeKey(nome_usuario, key) {
        usuario.updateOne({nome_usuario: nome_usuario}, {apikey: key}, function (err, res) {
            if (err) throw err;
        });
    }
    module.exports.changeKey = changeKey
    
        async function setperfil(nome_usuario, img) {
        usuario.updateOne({nome_usuario: nome_usuario}, {perfil: img}, function (err, res) {
            if (err) throw err;
        });
    }
    module.exports.setperfil = setperfil

        async function setmusica(nome_usuario, music) {
        usuario.updateOne({nome_usuario: nome_usuario}, {musica: music}, function (err, res) {
            if (err) throw err;
        });
    }
    module.exports.setmusica = setmusica

    async function resetOneLimit(nome_usuario) {
        let users = await usuario.findOne({nome_usuario: nome_usuario});
        if (users !== null) {
            usuario.updateOne({nome_usuario: nome_usuario}, {limit: limitOfc}, function (err, res) {
                if (err) throw err;
            });
        }
    }
    module.exports.resetOneLimit = resetOneLimit
    
    async function cekUsername(apikey) {
        let key = await usuario.findOne({apikey: apikey});
        return key.nome_usuario;
    }
    module.exports.cekUsername = cekUsername;
    
    async function cekRequest(apikey) {
        let key = await usuario.findOne({apikey: apikey});
        return key.totalreq;
    }
    module.exports.cekRequest = cekRequest;
    
        async function getTotalUser() {
        let db = await usuario.find({})
        return db.length
    }
    module.exports.getTotalUser = getTotalUser
    
