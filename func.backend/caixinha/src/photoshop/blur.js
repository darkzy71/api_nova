module.exports = async (image, level = 5) => {
    if (!image) throw new Error("Parâmetro <image> não definido!");
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.blur(isNaN(level) ? 5 : parseInt(level));
    let raw = await image.getBufferAsync("image/png");
    return raw;
}