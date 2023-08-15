const Greeting = require("./Base");

module.exports = class Goodbye extends Greeting {
    constructor() {
        super();        
        this.textMessage = "{server}";
        this.colorTitle = "#df0909";
    }
};
