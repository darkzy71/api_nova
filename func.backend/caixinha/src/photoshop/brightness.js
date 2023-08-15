module.exports = async (image, amount) => {
    if (!image) throw new Error("Parâmetro <image> não definido!");
    if (!amount) throw new Error("Parâmetro <amount> não definido!");
        const Canvas = require("canvas");
        const img = await Canvas.loadImage(image);
        const canvas = await Canvas.createCanvas(img.width, img.height);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] += amount;
        imgData.data[i + 1] += amount;
        imgData.data[i + 2] += amount;
        }

        ctx.putImageData(imgData, 0, 0);

        return canvas.toBuffer();
}