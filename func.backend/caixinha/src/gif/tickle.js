module.exports = async () => {
        const axios = require('axios');
        const { data } = await axios.get("https://nekos.life/api/v2/img/tickle");
        return data.url;
}