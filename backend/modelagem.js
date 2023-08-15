const mongoose = require('mongoose');

const usuario = mongoose.Schema({
    nome_usuario: { type: String },
    senha: { type: String },
    apikey: { type: String },
    defaultKey: { type: String },
    premium: { type: String },
    banido: { type: String },    
    motivo_ban: { type: String },
    admin: { type: String },
    limit: { type: Number },
    totalreq: { type: Number },
    status: { type: String },
    resgatar: { type: String },
    valoresgatar: { type: Number },
    musica: { type: String },
    perfil: { type: String },    
    jid: { type: String },
    numero_zap: { type: String },
    dinheiro: { type: Number },
    exp: { type: Number },
    nivel: { type: Number },
    bronze: { type: Number },
    prata: { type: Number },
    ouro: { type: Number },
    diamante: { type: Number }
}, { versionKey: false });
module.exports.usuario = mongoose.model('ayu', usuario);

const ig = mongoose.Schema({
    nome: { type: String },
    senha: { type: String }
}, { versionKey: false });
module.exports.ig = mongoose.model('contasig', ig);


const Utils = mongoose.Schema({
    total: { type: Number },
    today: { type: Number },
    visitor: { type: Number },
    ia: { type: String },
    util: { type: String }
}, { versionKey: false });
module.exports.Utils = mongoose.model('util', Utils);
