const Discord = require("discord.js");
const client = new Discord.Client();
var rn = require('random-number');
var rnbot = require('random-number');
var options = {
  min:  1
, max:  6
, integer: true
}

console.log(rn(options) + '\n');
console.log(rnbot(options));
if(rn(options) > rnbot(options)) {
	console.log('You won!');
}
else if(rnbot(options)>rn(options)) {
	console.log('I won!');
}
else if(rn(options)== rnbot(options)) { 
console.log('tie');
}