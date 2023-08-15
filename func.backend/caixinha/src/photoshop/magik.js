module.exports = async (image) => {
        if (!image) throw new Error("Parâmetro <image> não definido!");
        const axios = require('axios');
        const { data } = await axios.get(`https://nekobot.xyz/api/imagegen?type=magik&image=${image}`)
        return data.message;
}