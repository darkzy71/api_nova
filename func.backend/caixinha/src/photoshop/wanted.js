module.exports = async (image) => {
        if (!image) throw new Error("Parâmetro <image> não definido!");
        const jimp = require("jimp");
        let base = await jimp.read("https://i.imgur.com/Ucap7VU.png");
        let img = await jimp.read(image);
        img.resize(447, 447);
        base.composite(img, 145, 282);
        let raw = await base.getBufferAsync("image/png");
        return raw;
}