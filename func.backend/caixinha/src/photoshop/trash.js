module.exports = async (image) => {
        if (!image) throw new Error("Parâmetro <image> não definido!");
        const jimp = require("jimp");
        let bg = await jimp.read("https://i.imgur.com/6tmFKyz.png");
        image = await jimp.read(image);
        image.resize(309, 309);
        image.blur(5);
        bg.composite(image, 309, 0);
        let raw = await bg.getBufferAsync("image/png");
        return raw;
}