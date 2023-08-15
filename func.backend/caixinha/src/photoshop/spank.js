module.exports = async (image, image2) => {
        if (!image) throw new Error("Parâmetro <image> não definido!");
        if (!image2) throw new Error("Parâmetro <image2> não definido!");
        const jimp = require("jimp");
        let bg = await jimp.read("https://i.imgur.com/iBXEfW8.png");
        image = await jimp.read(image);
        image2 = await jimp.read(image2);
        bg.resize(500, 500);
        image.resize(140, 140);
        image2.resize(120, 120);
        bg.composite(image2, 350, 220);
        bg.composite(image, 225, 5);
        let raw = await bg.getBufferAsync("image/png");
        return raw;
}