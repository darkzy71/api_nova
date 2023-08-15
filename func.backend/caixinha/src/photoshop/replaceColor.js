module.exports = async (image, r, g, b) => {
        if (!image) throw new Error("Parâmetro <image> não definido!");
        if (!r) throw new Error("Parâmetro <r> não definido!");
        if (!g) throw new Error("Parâmetro <g> não definido!");
        if (!b) throw new Error("Parâmetro <b> não definido!");
        const jimp = require("jimp");
        image = await jimp.read(image);
        if (Array.isArray(r) && Array.isArray(g) && Array.isArray(b)) {
            image.color([
                { apply: "red", params: r },
                { apply: "green", params: g },
                { apply: "blue", params: b }
            ]);
        }
        image.color([
            { apply: "red", params: [parseInt(r)] },
            { apply: "green", params: [parseInt(g)] },
            { apply: "blue", params: [parseInt(b)] }
        ]);

        return await image.getBufferAsync("image/png");
}