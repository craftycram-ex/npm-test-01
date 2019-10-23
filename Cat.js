const Animal = require('./Animal.js');

class Cat extends Animal{

    constructor(){
        super()
        this.hp = 10;
    }

    speak() {
        console.log('meow');
    }    



}

module.exports = Cat;