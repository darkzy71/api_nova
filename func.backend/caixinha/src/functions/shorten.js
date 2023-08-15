module.exports = (text, length) => {
        if (!text) throw new Error("Parâmetro <text> não definido!");
        if (!length) throw new Error("Parâmetro <length> não definido!");
        if (typeof text !== 'string') return '';
        if (text.length <= length) return text;
        return text.substr(0, length).trim() + '...';
}