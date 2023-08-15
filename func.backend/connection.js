const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require("input");

const { tgApis } = require("./Grupos");
let telegram = [];

tgApis.forEach((i) => {
	telegram.push(
		new TelegramClient(
			new StringSession(i.stringSession),
			i.apiId,
			i.apiHash,
			{ connectionRetries: 5 },
		)
	);
});

telegram.forEach(async (value, i, array) => {
	try{
		await telegram[i].start({
			phoneNumber: tgApis[i].number,
			password: async () => await input.text(`[TELEGRAM] CONNECTION: ${tgApis[i].number} => insira sua senha: `),
			phoneCode: async () => await input.text(`[TELEGRAM] CONNECTION: ${tgApis[i].number} => Insira o codigo recebido no seu telegram: `),
			onError: (err) => console.log(err)
		});
		console.log(`[TELEGRAM] CONNECTION: ${tgApis[i].number} => Conectado com sucesso!`);
		console.log(`[TELEGRAM] SESSION: ${tgApis[i].number} => ${telegram[i].session.save()}`);
		await telegram[i].sendMessage("me", {
			message: "Sistema de puxadas do Yubi!!"
		});
	} catch(err){
		console.log(`[TELEGRAM] CONNECTION: ${tgApis[i].number} => Erro ao conectar: ${err}`);
	}
});

module.exports = { telegram };