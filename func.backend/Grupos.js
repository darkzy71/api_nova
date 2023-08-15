const markDAgua = [
	/🔛 \*\*BY:\*\* @Skynet02Robot|\*\*|• |`|🔍 | 🔍|🔎/,
	/🔛 .*/, 
	/👤.*/, 
	/👤Yubi .*/, 
	/🤖 .*/,  
    /\n\nBY: @MkBuscasRobot/, 
	/REF: .*/, 
    /CONSULTA DE TELEFONE\n\n/,
	/CONSULTA DE CPF\n\n/,
	/USUÁRIO: .*/,
	/𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗗𝗘 𝗖𝗣𝗙\n\n/,
	/𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗗𝗘 𝗣𝗟𝗔𝗖𝗔\n\n/,
	/𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗗𝗘 𝗧𝗘𝗟𝗘𝗙𝗢𝗡𝗘\n\n/,
	/𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗗𝗘 .*\n\n/,
	/CONSULTA DE CPF 🔎\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n「👤」DADO BÁSICOS\n\n/,
	/CONSULTA DE .*/,
	/\n\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nCANAL: https:\/\/t\.me\/SpaceXconsultas/,
	/「.*」/,
	/▱/,
	/▁| ▂| ▃| ▄| ▅ |▄/,
	/ID DA MENSAGEM:.*/,
	/┏• |┠• |┗• |/,
	/CANAL: https:\/\/t\.me\/SpaceXconsultas/,
	/CONSULTA FEITA POR: .*/,
	/┏|┠|┗|/,
	/CONSULTA NOME SIMPLES \n👤\n/,
];
const Grupos = [
	{
		chat: "Skynet02Robot",
		bot: "Skynet02Robot",
		cmd: {
			cpf: `/cpf1`,
			cpf1: `/cpf1`,
			cpf2: `/cpf2`,
			cpf3: `/cpf3`,
			nome: `/nome`,
			telefone: `/telefone`,
			cnpj: `/cnpj`,
			placa: `/placa`,
		}
	},
	{
		chat: "i_Find_Bot",
		bot: "i_Find_Bot",
		cmd: {
			cpf2: `/cpf2`,
			cns: `/cns`, 
			placa: `/placa`, 
		}
	},
];
var Types = [];
Grupos.forEach((i) =>
	Object.keys(i.cmd).forEach((j) => {
		if (!Types.includes(j)) Types.push(j);
	})
);

const tgApis = [
	{
		apiId: "22904885",
		apiHash: "a601b355257ab0418bedaa7962c1c1b2",
		stringSession: "1AZWarzMBuxjwrT59J_dRmxcQvuIA6ZJHb3nlcXOl45Ja1fYxhC5UxZrUHMxoAZ1IEID4njH-JdrXrg8SNxfwxHvVw4teU9eg5S8K6RMgB8Ss9IBVYLK4LczPaq4vvSW6p6RV8XLgcGT7-0-ahow46dX81c0FKxwdpgY2_zWfbB-eTlZ4XDbu8557MWELe4thm8MWuDoWJS-ci4SxdD5rZvC-_HNh1ezaDZJBzR2rZzS95QknecczMQS5eDtV2fYd7EHwrZpWdz_ZeDs_rpYJi_gFZHlTl5m3xHPL7qyMTU-jgVHrxKF5KGnO-CpRHoi1IGn4G7C1RK0ihNHIpxF5x_z1amfo1RQ=",
		number: "5511978018726",
	},
];

module.exports = {
	markDAgua,
	Types,
	Grupos,
	tgApis,
};