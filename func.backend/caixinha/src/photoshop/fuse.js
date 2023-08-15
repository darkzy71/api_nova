module.exports = async (image, image2) => {
        if (!image) throw new Error("Parâmetro <image> não definido!");
        if (!image2) throw new Error("Parâmetro <image2> não definido!");
        const Canvas = require("canvas");
        const img = await Canvas.loadImage(image);
        const img2 = await Canvas.loadImage(image2);
        const canvas = Canvas.createCanvas(img.width, img.height);
        const ctx = canvas.getContext("2d");
        ctx.globalAlpha = 0.5;
        ctx.drawImage(img, 0, 0);
        ctx.drawImage(img2, 0, 0, canvas.width, canvas.height);
        return canvas.toBuffer();
}