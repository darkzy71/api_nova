module.exports = async (image) => {
        if (!image) throw new Error("Parâmetro <image> não definido!");
        const jimp = require("jimp");
        let base = await jimp.read("https://i.imgur.com/0dyCAZL.png");
        let img = await jimp.read(image);
        img.resize(200, 157);
        base.composite(img, 180, 383);
        let raw = await base.getBufferAsync("image/png");
        return raw;
}