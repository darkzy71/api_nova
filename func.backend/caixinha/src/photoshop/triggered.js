module.exports = async (image) => {
if (!image) throw new Error("Parâmetro <image> não definido!");
const Canvas     = require("canvas");
const GIFEncoder = require("gifencoder");
    const base   = await Canvas.loadImage("https://i.imgur.com/qOlbrFj.png");
    const img    = await Canvas.loadImage(image);
    const GIF    = new GIFEncoder(256, 310)
    const canvas = Canvas.createCanvas(256, 310);
    const ctx    = canvas.getContext('2d');
          GIF.start();
          GIF.setRepeat(0);
          GIF.setDelay(15);
    const BR = 20;
    const LR = 10;
    let i = 0;
    while (i < 9) {
          ctx.clearRect(0, 0, 256, 310);
          ctx.drawImage(img, Math.floor(Math.random() * BR) - BR, Math.floor(Math.random() * BR) - BR, 256 + BR, 310 - 54 + BR);
          ctx.fillStyle = '#FF000033';
          ctx.fillRect(0, 0, 256, 310);
          ctx.drawImage(base, Math.floor(Math.random() * LR) - LR, 310 - 54 + Math.floor(Math.random() * LR) - LR, 256 + LR, 54 + LR);
          GIF.addFrame(ctx);
          i++
        };
    GIF.finish();
    return GIF.out.getData();
}