const LocalStrategy = require('passport-local').Strategy;
const { getHashedPassword } = require('./function');
const { usuario } = require('../backend/modelagem');

module.exports = function(passport) {
    passport.use(new LocalStrategy(
        (nome_usuario, senha, done) => {
            let hashed = getHashedPassword(senha)
//            console.log(hashed)
//            console.log(usuario.find({}))
            usuario.findOne({nome_usuario: nome_usuario}).then(users => {
                if (!users) return done(null, false, {
                    message: 'Esse nome de usuário não está registrado',
                })
//                console.log(usuario)
//                console.log(users.nome_usuario)
 //               console.log(users.senha)
                if (nome_usuario === users.nome_usuario && hashed === users.senha) {
                    return done(null, users);
                } else {
                    return done(null, false, {
                        message: 'nome de usuário ou senha inválidos',
                    });
                };
            });
        })
    );
    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
    
      passport.deserializeUser(function(id, done) {
        usuario.findById(id, function(err, user) {
          done(err, user);
        });
      });
}