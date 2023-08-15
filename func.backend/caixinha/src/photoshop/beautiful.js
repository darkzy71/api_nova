module.exports = async (image) => {
        if (!image) throw new Error("Parâmetro <image> não definido!");
        const jimp = require("jimp");
        let base = await jimp.read("https://i.imgur.com/9SX24oX.png");
        base.resize(376, 400);
        let img = await jimp.read(image);
        img.resize(84, 95);
        base.composite(img, 258, 28);
        base.composite(img, 258, 229);
        let raw = await base.getBufferAsync("image/png");
        return raw;
}