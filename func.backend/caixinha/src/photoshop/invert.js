module.exports = async (image) => {
    if (!image) throw new Error("Parâmetro <image> não definido!");
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.invert();
    let raw = await image.getBufferAsync("image/png");
    return raw;
}