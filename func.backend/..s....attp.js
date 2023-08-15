"use strict";
const canvas = require('canvas');
const fs = require('fs');
const GIFEncoder = require('gifencoder');
const text2png = require('text2png');
const wordwrap = require('word-wrapper');
const {
	tools
} = require('./index');

exports.create = async (text) => {

	// JSON's
	const All_Colours = JSON.parse(fs.readFileSync('./lib/config/Gerais/colors.json'));
	const config = JSON.parse(fs.readFileSync('./lib/config/Settings/config.json'));

	// Cria uma animação em GIF
	const attp = new GIFEncoder(512, 512);
	attp.start();
	attp.setRepeat(0);
	attp.setFrameRate(Number(config.Fig_FPS));
	attp.setQuality(1);
	attp.setTransparent();

	// Cria uma imagem no canvas
	const canvaImage = canvas.createCanvas(512, 512);
	const ctx = canvaImage.getContext('2d');

	// Pega cores aleatórias
	let Random_Colors = (tools('others').randomArr(All_Colours.map(u => u.hex))).slice(0, Number(config.Max_Colors));

	// Gera varias imagens diferentes de cores diferentes e as transforma em GIF
	for (let color of Random_Colors) {
		let anitxt = await text2png(wordwrap(text, {
			width: 20
		}), {
			font: '50px sans-serif',
			color: color,
			textAlign: 'center',
			lineSpacing: 10,
			padding: 20,
			backgroundColor: 'transparent',
			output: 'dataURL'
		});
		const avatar = await canvas.loadImage(anitxt);
		ctx.drawImage(avatar, 0, 0, canvaImage.width, canvaImage.height);
		attp.addFrame(ctx);
	}

	// Finaliza e retorna o GIF encodado para o envio
	attp.finish();
	return attp.out.getData();

};