module.exports = async (image) => {
        if (!image) throw new Error("Parâmetro <image> não definido!");
        const Canvas = require("canvas");
        let bg = await Canvas.loadImage("https://i.imgur.com/ZEhMpod.png");
        let img = await Canvas.loadImage(image);
        const canvas = Canvas.createCanvas(img.width, img.height);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        ctx.drawImage(bg, 0, 0, img.width, img.height);
        return canvas.toBuffer();
}