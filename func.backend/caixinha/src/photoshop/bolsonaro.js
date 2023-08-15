module.exports = async (image) => {
if (!image) throw new Error("Parâmetro <image> não definido!");
const Canvas = require('canvas');
const canvas = Canvas.createCanvas(400, 230);
const ctx = canvas.getContext("2d");
let bolsonaro = await Canvas.loadImage('https://i.imgur.com/CVewCJn.png');
let img = await Canvas.loadImage(image);
ctx.drawImage(img, 108, 10, 276, 158)
ctx.drawImage(bolsonaro, 0, 0, 400, 230)
return canvas.toBuffer()
}