module.exports = async (image) => {
        if (!image) throw new Error("Parâmetro <image> não definido!");
        const jimp = require("jimp");
        let bg = await jimp.read("https://i.imgur.com/bA4rhoQ.png");
        image = await jimp.read(image);
        image.resize(195, 195);
        bg.composite(image, 120, 135);
        let raw = await bg.getBufferAsync("image/png");
        return raw;
}