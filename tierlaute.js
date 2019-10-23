const Cat = require("./Cat.js");
const Animal = require('./Animal');

const sebbi = new Cat();
sebbi.name = "Sebastian";
sebbi.speak();

console.log(sebbi);

const guerteltier = new Animal();
guerteltier.name = 'Peter';
guerteltier.die();

