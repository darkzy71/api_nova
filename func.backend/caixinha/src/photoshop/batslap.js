module.exports = async (image, image2) => {
    if (!image) throw new Error("Parâmetro <image> não definido!");
    if (!image2) throw new Error("Parâmetro <image2> não definido!");
    const jimp = require('jimp');
    let base = await jimp.read("https://i.imgur.com/XfT0QGE.png");
    image = await jimp.read(image);
    image2 = await jimp.read(image2);
    base.resize(1000, 500);
    image.resize(220, 220);
    image2.resize(200, 200);
    base.composite(image2, 580, 260);
    base.composite(image, 350, 70);
    let raw = await base.getBufferAsync("image/png");
    return raw;
}