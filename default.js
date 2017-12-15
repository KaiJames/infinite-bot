
const Discord = require("discord.js");
const client = new Discord.Client();
const sleep = require('thread-sleep');
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}`);
	client.user.setGame('Try !list');
	
});
client.on('message',message => {
	if(message.author.bot){ return;}
	console.log('Message from ' + message.author.username + '#'+ message.author.discriminator + '\n Saying: ' + message.content);
	if(message.content == '!list') {
		message.channel.sendMessage('---------------- Commands List ----------------');
		message.channel.sendMessage('!stats -- Show current radio stats.');
		sleep(500);
		message.channel.sendMessage('!list -- Shows this message.');
		message.channel.sendMessage('!about -- Information of BOT.');
		sleep(500);
		message.channel.sendMessage('!panel -- Panel link');
		sleep(1000);
		message.channel.sendMessage('!Kai -- Information about Kai');
		message.channel.sendMessage('!Beats -- Information about Codi');
		message.channel.sendMessage('!Codi -- Information about Codi');
		sleep(500);
	}
	if(message.content == '!stats'){if(message.author.bot){ return;}
		
var url = 'http://centauri.shoutca.st:8368/status-json.xsl';
var request = require('request');
request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'Infinite BOT '}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else { 
	if(typeof data.icestats.source[1].title == 'undefined') {  
	  message.channel.sendMessage('Current Song: '+ data.icestats.source[0].title +  '\n');
      message.channel.sendMessage('Current DJ: Infinite Stream\n');
      message.channel.sendMessage('Listeners: '+ data.icestats.source[0].listeners +'\n');
      message.channel.sendMessage('Listener Peak of this user: '+ data.icestats.source[0].listener_peak +'\n');

      
	} else {
      // data is already parsed as JSON:
      message.channel.sendMessage('Current Song:'+ data.icestats.source[1].title +  '\n');
      message.channel.sendMessage('Current DJ:'+ data.icestats.source[1].genre +'\n');
      message.channel.sendMessage('Listeners: '+ data.icestats.source[1].listeners +'\n');
      message.channel.sendMessage('Listener Peak of this user: '+ data.icestats.source[1].listener_peak +'\n');
      message.channel.sendMessage('List of commands: say !list');
       }
       }
});

  }
  if(message.content == '!panel') {
	  message.channel.sendMessage('http://infiniteradio.net/staff \n Enjoy! :yum: ');
	  
  }
  if(message.content == '!about') {
	  message.channel.sendMessage('------------------------- Information of Infinite BOT ------------------------- \n');
	 message.channel.sendMessage('Version : v1.0\n');
	 message.channel.sendMessage('Author : @Kai#8589\n');
	 message.channel.sendMessage('All rights reserved to respective owners. The Official bot of Infiniteradio.net');
  }
  if(message.content == '!Kai') {
	  message.channel.sendMessage('Kai is one of three Founders of Infinite! They do coding stuff and radio stuff too! They are a wired human who justs likes to have fun!');
  }
  if(message.content == '!Beats') {
	  message.channel.sendMessage('Beats is one of three Founders of Infinite, He is random, outgoing and knows what he is doing!');
	  
  }
  if(message.content == '!Codi') {
	  message.channel.sendMessage('Codi is one of three Founders of Infinite, He smells thats all you need to know.');
	  
  }
 
if(message.content == '!illu') {
	message.channel.sendMessage('Illumunati \n:eye:             \n:eye:         :eye:\n   :eye:                 :eye:                   \n:eye: :eye: :eye: :eye:  :eye:');       
                      
}

if(message.content == '?coditruth') {
	message.channel.sendMessage('He has a Small Peeni... >.> <.< shhhhh its a secret!!!!');       

}

if(message.content == '!away') {
	var request = require('request');
	request.get({
    url: 'http://fusionradio.uk/discord/index.php',
    json: true,
    headers: {'User-Agent': 'Fusion BOT '}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else { 
 
	  message.channel.sendMessage('Those people are currently away: ' + data.username );
       }

});
	}
});



client.login('MzM0Mjc5ODU0NzIxNTk3NDQy.DEaV6Q.AeLdi3BuVXdBvB4b4yN84nt_d9I');