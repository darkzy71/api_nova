module.exports = async (color = "#FFFFFF") => {
        const Canvas = require("canvas");
        const canvas = Canvas.createCanvas(2048, 2048);
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        return canvas.toBuffer();
}