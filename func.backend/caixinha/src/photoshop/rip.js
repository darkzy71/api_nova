module.exports = async (image) => {
        if (!image) throw new Error("Parâmetro <image> não definido!");
        const Canvas = require("canvas");
        const canvas = Canvas.createCanvas(244, 253);
        const ctx = canvas.getContext("2d");
        const background = await Canvas.loadImage("https://i.imgur.com/KSER8KD.png");
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        const avatar = await Canvas.loadImage(image);
        ctx.drawImage(avatar, 63, 110, 90, 90);
        return canvas.toBuffer();
}