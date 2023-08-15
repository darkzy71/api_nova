module.exports = async(text, options = { background: "#FFFFFF", color: "#000000" }) => {
        if (!text) throw new Error("Parâmetro <text> não definido!");
        const jimp = require("jimp");
        let image = `https://api.qrserver.com/v1/create-qr-code/?size=1024x1024&data=${encodeURIComponent(
            text
        )}&color=${options.color.replace("#", "")}&bgcolor=${options.background.replace("#", "")}`;
        image = await jimp.read(image);
        let raw = await image.getBufferAsync("image/png");
        return raw;
}