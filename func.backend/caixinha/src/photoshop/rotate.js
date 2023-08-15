module.exports = async (image, angle = 0) => {
        if (!image) throw new Error("Parâmetro <image> não definido!");
        const jimp = require("jimp");
        image = await jimp.read(image);
        image.rotate(angle);
        return await image.getBufferAsync("image/png");
}