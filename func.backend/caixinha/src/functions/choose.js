module.exports = (choices) => {
        if (!choices) throw new Error("Parâmetro <choices> não definido!");
        var arr = choices.split(',').filter(a => a.length > 0);

        if (arr.length < 2) throw new Error('Use dois ou mais valores no parâmetro <choices>');
        return arr[Math.floor(Math.random() * arr.length)].trim() + '.';
}