module.exports = async (image, color) => {
        if (!image) throw new Error("Parâmetro <image> não definido!");
        if (!color) throw new Error("Parâmetro <color> não definido!");
        const Canvas = require("canvas");
        const img = await Canvas.loadImage(image);
        const canvas = Canvas.createCanvas(img.width, img.height);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "color";
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        return canvas.toBuffer();
    }