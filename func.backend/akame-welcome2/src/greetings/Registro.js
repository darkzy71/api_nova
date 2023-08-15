const Greeting = require("./Base");

module.exports = class Registro extends Greeting {
    constructor() {
        super();
        this.textTitle = "REGISTRO";
        this.textMessage = "ID: {server}";
        this.colorTitle = "#df0909";
    }
};
