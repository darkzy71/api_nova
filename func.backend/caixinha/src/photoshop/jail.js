module.exports = async (image) => {
        if (!image) throw new Error("Parâmetro <image> não definido!");
        const Canvas = require("canvas");
        let img = await Canvas.loadImage(image);
        let canvas = Canvas.createCanvas(img.width, img.height);
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, img.width, img.height);
        ctx.drawImage(img, 0, 0, img.width, img.height);
        let layer = await Canvas.loadImage("https://i.imgur.com/t4hZySW.png");
        ctx.drawImage(layer, 0, 0, img.width, img.height);
        return canvas.toBuffer();
}