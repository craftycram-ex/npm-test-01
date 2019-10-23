/*

const fib = require("./fib.js");

const result = fib(6);

console.log(result);


// 1,1,2,3,5,8,13,

*/

const University = require("./university.js");

const hfg = new University;
hfg.name = "Hochschule fuer Gestaltung"
hfg.founded = "1776";
hfg.createProgram("")

const hdm = new University;
hdm.name = "Hochschule der Medien Stuttgart";
hdm.founded = 1853;
hdm.createProgram("Medieninformatik");
hdm.createProgram("Audiovisuelle Medien");
hdm.createProgram("Mobile Medien");

console.log(hfg);
console.log(hdm);