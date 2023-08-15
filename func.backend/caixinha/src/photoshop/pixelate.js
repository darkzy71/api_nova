module.exports = async (image) => {
    if (!image) throw new Error("Parâmetro <image> não definido!");
        const Canvas = require("canvas");
        const img = await Canvas.loadImage(image);
        const canvas = Canvas.createCanvas(img.width, img.height);
        const ctx = canvas.getContext("2d");

        ctx.drawImage(img, 0, 0, img.width, img.height);

        const { width, height } = canvas;
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let value = 15;
        const remainder = width % value;
        value -= remainder;

        const pixelatedCanvas = Canvas.createCanvas(canvas.width, canvas.height);
        const pixelatedCtx = pixelatedCanvas.getContext("2d");

        for (let y = 0; y < height; y += value) {
        for (let x = 0; x < width; x += value) {
        let i = (x + y * width) * 4; 

        let r = imageData.data[i];
        let g = imageData.data[i + 1];  
        let b = imageData.data[i + 2];
        let a = imageData.data[i + 3];
        pixelatedCtx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
        pixelatedCtx.fillRect(x, y, value, value);
        }
        }

        return pixelatedCanvas.toBuffer()
}