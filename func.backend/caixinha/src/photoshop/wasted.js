module.exports = async (image) => {
        if (!image) throw new Error("Parâmetro <image> não definido!");
        const Canvas = require("canvas");
        const jimp = require("jimp");
        let images = await jimp.read(image);
        images.greyscale();
        let raw = await images.getBufferAsync("image/png");
        let effect = await Canvas.loadImage(raw);
        let bg = await Canvas.loadImage("https://i.imgur.com/hI1Q8ej.png");
        let img = await Canvas.loadImage(image);
        const canvas = Canvas.createCanvas(img.width, img.height);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        ctx.drawImage(effect, 0, 0, img.width, img.height);
        ctx.drawImage(bg, 0, 0, img.width, img.height);
        return canvas.toBuffer();
}