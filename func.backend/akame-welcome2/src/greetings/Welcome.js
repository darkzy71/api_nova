const Greeting = require("./Base");

module.exports = class Welcome extends Greeting {
    constructor() {
        super();
        this.textMessage = "{server}";
        this.colorTitle = "#03A9F4";
    }
};