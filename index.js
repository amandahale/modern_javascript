var moment = require('moment'); 
var math = require('mathjs');

console.log("Hello from Js!");
var datetime = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(datetime);

console.log(math.sqrt(-4));