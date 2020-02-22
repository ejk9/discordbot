//console.log("Hello, World!");

const Discord =  require('discord.js');
const client = new Discord.Client();

const token = 'NjgwODE1ODk0NDE4Njg1OTYy.XlGKSw.wrnuunc4AQpHireuvF1c-h05J_8';

client.on('ready', () =>{
    console.log('This bot is online');
})

client.login(token);



