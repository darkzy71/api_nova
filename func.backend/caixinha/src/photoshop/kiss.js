module.exports = async (image, image2) => {
        if (!image) throw new Error("Parâmetro <image> não definido!");
        if (!image2) throw new Error("Parâmetro <image2> não definido!");
        const Canvas = require("canvas");
        const canvas = Canvas.createCanvas(768, 574);
        const ctx = canvas.getContext("2d");
        const background = await Canvas.loadImage("https://i.imgur.com/xShsygV.png");
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        const avatar = await Canvas.loadImage(image);
        const avatar1 = await Canvas.loadImage(image2);
        ctx.drawImage(avatar1, 370, 25, 200, 200);
        ctx.drawImage(avatar, 150, 25, 200, 200);

        return canvas.toBuffer();
}