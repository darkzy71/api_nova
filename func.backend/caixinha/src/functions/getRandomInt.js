module.exports = (min, max) => {
        if (!min) throw new Error("Parâmetro <min> não definido!");
        if (!max) throw new Error("Parâmetro <max> não definido!");
        if (isNaN(min)) throw new Error("Parâmetro <min> deve ser um número!");
        if (isNaN(max)) throw new Error("Parâmetro <max> deve ser um número!");
        min = Math.ceil(min);
        max = Math.floor(max);
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        return random;
}