//console.log("Hello, World!");

const Discord =  require('discord.js');
const client = new Discord.Client();

const token = 'NjgwODE1ODk0NDE4Njg1OTYy.XlGMYA._QdAyit7mUp1uaC_X_S5mzrXVB8';

client.on('ready', () =>{
    console.log('This bot is online');
})

client.login(token);



