require('../configuração');
const { usuario, Utils, ig } = require('./modelagem');
const { enviarnozap, enviarnozap_button, enviarnozap_buttontime } = require('../ayubot');
const toMs = require('ms');
const { randomText } = require('../func.backend/function');
const keynova = randomText(10);

    async function gerarUsuario(nome_usuario, senha, apikey, id, numero_zap, img) {
        let obj = { nome_usuario, senha, apikey, defaultKey: apikey, jid: id, numero_zap, status: null, perfil: img, premium: null, banido: null, motivo_ban: null, admin: null, resgatar: null, valoresgatar: null, musica: 'mscaqui', limit: limitOfc, dinheiro: 0, totalreq: 0, exp: 0, nivel: 1, bronze: 0, prata: 0, ouro: 0, diamante: 0 };
        usuario.create(obj);
    }
    module.exports.gerarUsuario = gerarUsuario

   async function salvardd(nome, senha) {
        let obj = { nome: nome, senha: senha };
        ig.create(obj);
    }
    module.exports.salvardd = salvardd
    
      async function banir(nome_usuario, expired, motivo) {
        usuario.updateOne({nome_usuario: nome_usuario}, {apikey: null, defaultKey: null, banido: Date.now() + toMs(expired), motivo_ban: motivo}, function (err, res) {
            if (err) throw err;
        })
     }
     module.exports.banir = banir
     
    async function desbanir(nome_usuario) {
            usuario.updateOne({nome_usuario: nome_usuario}, {apikey: keynova, defaultKey: keynova, banido: null, motivo_ban: null }, function (err, res) {
            if (err) throw err;
        })
     }
     module.exports.desbanir = desbanir
     
       async function tempo_ban() {
        let users = await usuario.find({});
        users.forEach(async(data) => {
            let { banido, nome_usuario } = data
            if (!banido || banido === null) return
            if (Date.now() >= banido) {
                usuario.updateOne({nome_usuario: nome_usuario}, {apikey: keynova, defaultKey: keynova, banido: null, motivo_ban: null }, function (err, res) {
                    if (err) throw err;
                    console.log(`O banimento de ${nome_usuario} acabou`)
                })
            }
        })
    }
    module.exports.tempo_ban = tempo_ban
    
        async function verificar_dias_ban(nome_usuario) {
        let users = await usuario.findOne({nome_usuario: nome_usuario});
        if (users !== null) {
            return users.banido
        } else {
            return false
        }
    }
    module.exports.verificar_dias_ban = verificar_dias_ban
    
    
        async function checkBanimento(nome_usuario) {    
        let users = await usuario.findOne({nome_usuario: nome_usuario});
        if (users.banido === null) {
            return false;
        } else {
            return true;
        };
    };
    module.exports.checkBanimento = checkBanimento;
 
    async function verificaNome(nome_usuario) {
        let users = await usuario.findOne({nome_usuario: nome_usuario});
        if(users !== null) {
            return users.nome_usuario;
        } else {
            return false;
        }
    }
    module.exports.verificaNome = verificaNome;

async function verificaNomeig(nome_usuario) {
        let users = await ig.findOne({nome: nome_usuario});
        if(users !== null) {
            return users.nome;
        } else {
            return false;
        }
    }
    module.exports.verificaNomeig = verificaNomeig;
    
        async function verificaAll(nome_usuario) {
        let users = await usuario.findOne({nome_usuario: nome_usuario});
        if(users !== null) {
            return users;
        } else {
            return false;
        }
    }
    module.exports.verificaAll = verificaAll;
    
        async function verificaVerif(nome_usuario) {
        let users = await usuario.findOne({nome_usuario: nome_usuario});
        if(users !== null) {
            return users.status;
        } else {
            return false;
        }
    }
    module.exports.verificaVerif = verificaVerif;
    
    async function verificaNome2(nome_usuario) {
        let users = await usuario.findOne({nome_usuario: nome_usuario});
        if(users !== null) {
            return users.apikey;
        } else {
            return false;
        }
    }
    module.exports.verificaNome2 = verificaNome2;
    
async function verificaCodiguin(nome_usuario) {
        let users = await usuario.findOne({nome_usuario: nome_usuario});
        if(users !== null) {
            return users.resgatar;
        } else {
            return false;
        }
    }
    module.exports.verificaCodiguin = verificaCodiguin;    
        
    async function verificaZap(nomor) {
        let users = await usuario.findOne({numero_zap: nomor});
        if(users !== null) {
            return users.numero_zap;
        } else {
            return false;
        }
    }
    module.exports.verificaZap = verificaZap;
    
    async function verificaAdmin(admin) {
        let users = await usuario.findOne({admin: admin});
        if(users !== null) {
            return users.admin;
        } else {
            return false;
        }
    }
    module.exports.verificaAdmin = verificaAdmin;

    async function getApikey(id) {
        let users = await usuario.findOne({_id: id});
        return { apikey: users.apikey, nome_usuario: users.nome_usuario };
    }
    module.exports.getApikey = getApikey;

    async function verificaKey(apikey) {
        let db = await usuario.findOne({apikey: apikey});
        if(db === null) {
            return false;
        } else {
            return db.apikey;
        }
    }
    module.exports.verificaKey = verificaKey;
    
    async function limitAdd(apikey) {
        let key = await usuario.findOne({apikey: apikey});
        let min = key.limit - 1;
        let plus = key.totalreq + 1;
        usuario.updateOne({apikey: apikey}, {limit: min, totalreq: plus}, function (err, res) {
            if (err) throw err;
        })
    }
    module.exports.limitAdd = limitAdd
    
    async function dinheiroadd(apikey, quantia) {
        let key = await usuario.findOne({apikey: apikey});
        let valor = key.dinheiro + quantia;
        usuario.updateOne({apikey: apikey}, {dinheiro: valor}, function (err, res) {
            if (err) throw err;
        })
    }
    module.exports.dinheiroadd = dinheiroadd
    
        async function dinheiroretirar(apikey, quantia) {
        let key = await usuario.findOne({apikey: apikey});
        let valor = key.dinheiro - quantia;
        usuario.updateOne({apikey: apikey}, {dinheiro: valor}, function (err, res) {
            if (err) throw err;
        })
    }
    module.exports.dinheiroretirar = dinheiroretirar
    
        async function verificaDinheiro(apikey) {
        let key = await usuario.findOne({apikey: apikey});
        return key.dinheiro;
       }
       module.exports.verificaDinheiro = verificaDinheiro;
       
      async function verificaDinheiro2(nome) {
        let key = await usuario.findOne({nome_usuario: nome});
        return key.dinheiro;
    }
    module.exports.verificaDinheiro2 = verificaDinheiro2;
    
        async function niveladd(apikey, quantia) {
        let key = await usuario.findOne({apikey: apikey});
        let valor = key.nivel + quantia;
        usuario.updateOne({apikey: apikey}, {nivel: valor}, function (err, res) {
            if (err) throw err;
        })
    }
    module.exports.niveladd = niveladd
    
        async function nivelretirar(apikey, quantia) {
        let key = await usuario.findOne({apikey: apikey});
        let valor = key.nivel - quantia;
        usuario.updateOne({apikey: apikey}, {nivel: valor}, function (err, res) {
            if (err) throw err;
        })
    }
    module.exports.nivelretirar = nivelretirar
    
        async function verificanivel(apikey) {
        let key = await usuario.findOne({apikey: apikey});
        return key.nivel;
       }
       module.exports.verificanivel = verificanivel;
       
      async function verificanivel2(nome) {
        let key = await usuario.findOne({nome_usuario: nome});
        return key.nivel;
    }
    module.exports.verificanivel2 = verificanivel2;
    
        async function expadd(apikey, quantia) {
        let key = await usuario.findOne({apikey: apikey});
        let valor = key.exp + quantia;
        usuario.updateOne({apikey: apikey}, {exp: valor}, function (err, res) {
            if (err) throw err;
        })
    }
    module.exports.expadd = expadd
    
        async function expretirar(apikey, quantia) {
        let key = await usuario.findOne({apikey: apikey});
        let valor = key.exp - quantia;
        usuario.updateOne({apikey: apikey}, {exp: valor}, function (err, res) {
            if (err) throw err;
        })
    }
    module.exports.expretirar = expretirar
    
        async function verificaexp(apikey) {
        let key = await usuario.findOne({apikey: apikey});
        return key.exp;
       }
       module.exports.verificaexp = verificaexp;
       
      async function verificaexp2(nome) {
        let key = await usuario.findOne({nome_usuario: nome});
        return key.exp;
    }
    module.exports.verificaexp2 = verificaexp2;
    
    async function addbronze(apikey, quantia) {
        let key = await usuario.findOne({apikey: apikey});
        let valor = key.bronze + quantia;
        usuario.updateOne({apikey: apikey}, {bronze: valor}, function (err, res) {
            if (err) throw err;
        })
    }
    module.exports.addbronze = addbronze
    
        async function delbronze(apikey, quantia) {
        let key = await usuario.findOne({apikey: apikey});
        let valor = key.bronze - quantia;
        usuario.updateOne({apikey: apikey}, {bronze: valor}, function (err, res) {
            if (err) throw err;
        })
    }
    module.exports.delbronze = delbronze
    
        async function veribronze(apikey) {
        let key = await usuario.findOne({apikey: apikey});
        return key.bronze;
       }
       module.exports.veribronze = veribronze;
           
           async function addcodiguin(username, code, valorcode) {
            usuario.updateOne({nome_usuario: username}, {resgatar: code, valoresgatar: valorcode}, function (err, res) {
            if (err) throw err;
        })
    }
    module.exports.addcodiguin = addcodiguin
    
              async function expfarm(apikey) {
                try {                
                const freexp = Math.floor(Math.random() * 1) + 2
                const freedin = Math.floor(Math.random() * 1) + 1
                const freebronze = Math.floor(Math.random() * 3) + 3   
                await expadd(apikey, freexp)
                await dinheiroadd(apikey, freedin)
                await addbronze(apikey, freebronze)                
                } catch (err) {
                console.error(err)
               }
               }
             module.exports.expfarm = expfarm;
       async function uplvl() {
        let users = await usuario.find({});
        users.forEach(async(data) => {
            let { exp, nivel, apikey, numero_zap, nome_usuario } = data
            if (!exp || exp === null) return                         
             const requiredXp = 5000 * (Math.pow(2, nivel) - 1);
            if (requiredXp <= exp) {
            niveladd(apikey, 1)
           let nivelveri = await verificanivel2(nome_usuario)
           console.log(nome_usuario + 'upou de nível!!')
            dinheiroadd(apikey, 100)
            let inf = `você upo de nível no site!\n\nvocê recebeu 1000  de dinheiro`
            let inf2 = `level up`
let templateButtons = [
  {index: 1, urlButton: {displayText: 'ir para o site!', url: 'https://ayu-api.cfm'}},
  {index: 2, urlButton: {displayText: 'Falar com Suporte!', url: 'https://wa.me/5562936180708?text=preciso+de+ajuda'}},
]
//enviarnozap_button(numero_zap, inf, inf2, templateButtons)
            }
        })
    }
    module.exports.uplvl = uplvl
    async function verificaLimit(apikey) {
        let key = await usuario.findOne({apikey: apikey});
        return key.limit;
    }
    module.exports.verificaLimit = verificaLimit;

    async function isLimit(apikey) {
        let key = await usuario.findOne({apikey: apikey});
        if (key.limit <= 0){
            return true;
        } else {
            return false;
        }
    }
    module.exports.isLimit = isLimit

    async function resetarAllLimit() {
        let users = await usuario.find({});
        users.forEach(async(data) => {
            let { premium, nome_usuario } = data
            if (premium !== null) {
                return usuario.updateOne({nome_usuario: nome_usuario}, {limit: limitPremium}, function (err, res) {
                    if (err) throw err;
                })   
            } else {
                return usuario.updateOne({nome_usuario: nome_usuario}, {limit: limitOfc}, function (err, res) {
                    if (err) throw err;
                })
            }
        })
    }
    
    module.exports.resetarAllLimit = resetarAllLimit
    
        async function resetarAllTributers() {
        let users = await usuario.find({});
        users.forEach(async(data) => {
            let { premium, nome_usuario } = data
                return usuario.updateOne({nome_usuario: nome_usuario}, {nivel: 1, exp: 500, dinheiro: 100}, function (err, res) {
                    if (err) throw err;
                })            
        })
    }
    
    module.exports.resetarAllTributers = resetarAllTributers
    
    //verificação de número
    
    
    async function verifyUser(id) {
        let users = await usuario.findOne({jid: id});
        if (users.jid !== null) {
            return usuario.updateOne({jid: id}, {status: "verificado"}, function (err, res) {
            if (err) throw err;
        });
        } else {
            return false
        };
    };
    module.exports.verifyUser = verifyUser;

   async function checkVerify(nome_usuario) {
        let users = await usuario.findOne({nome_usuario: nome_usuario});
        if (users.status === 'verificado') {
            return false;
        } else {
            return users.nome_usuario;
        };
    };
    module.exports.checkVerify = checkVerify;
    
      async function getidveri(nome) {
        let key = await usuario.findOne({nome_usuario: nome});
        return key.jid;
    }
    module.exports.getidveri = getidveri;    
    
    
    
    /* UTILS, TOTAL REQ ETC */

    async function addUtil() {
        let obj = { total: 0, today: 0, visitor: 1, util: 'util'}
        Utils.create(obj)
    }
module.exports.addUtil = addUtil
    async function getTotalReq() {
        let db = await Utils.find({})
        if (db.length == 0) { 
            await addUtil() 
            return db[0].total
        } else {
            return db[0].total
        }
    }
    module.exports.getTotalReq = getTotalReq

    async function getTodayReq() {
        let db = await Utils.find({})
        if (db.length == 0) { 
            await addUtil()
            return db[0].today
        } else {
            return db[0].today
        }
    }
    module.exports.getTodayReq = getTodayReq

    async function getVisitor() {
        let db = await Utils.find({})
        if (db.length == 0) { 
            await addUtil()
            return db[0].visitor
        } else {
            return db[0].visitor
        }
    }
    module.exports.getVisitor = getVisitor

    async function addRequest() {
        let db = await Utils.find({})
        let addOneToday = db[0].today += 1
        let addOneTotal = db[0].total += 1
        Utils.updateOne({util: 'util'}, {total: addOneTotal, today: addOneToday}, (err, res) => {
            if (err) throw err
        })
    }
    module.exports.addRequest = addRequest

    async function addVisitor() {
        let db = await Utils.find({})
        let addOne = db[0].visitor += 1
        Utils.updateOne({util: 'util'}, {visitor: addOne}, (err, res) => {
            if (err) throw err
        })
    }
    module.exports.addVisitor = addVisitor

    async function resetTodayReq() {
        Utils.updateOne({util: 'util'}, {today: 0}, (err, res) => {
            if (err) throw err
        })
    }
    module.exports.resetTodayReq = resetTodayReq    
