//console.log("Hello, World!");

const Discord =  require('discord.js');
const newton = require('newtonmath.js');
const client = new Discord.Client();

const token = 'NjgwODE1ODk0NDE4Njg1OTYy.XlGMYA._QdAyit7mUp1uaC_X_S5mzrXVB8';

const prefix = '!';

mathHelp = new Discord.RichEmbed("Math");

client.on('ready', () =>{
    console.log('This bot is online');
})

client.on('message', msg=>{
    let args = msg.content.substring(prefix.length).split(" ");
    switch(args[0]){
        case 'the':
            msg.channel.send('hell');
            break;
        case 'math':
            if(args[1] == 'help'){
                mathHelp = new Discord.RichEmbed()
                .setTitle("!math Help")
                .setDescription("!math <operation> <expression>")
                .addField('Operations', "Simplify\nFactor\nDerive\nIntegrate\nFind 0's\nFind Tangent\nArea Under Curve\nConvert Radians to Degrees\nConvert Degrees to Radians\nCosine\nSine\nTangent\nInverse Cosine\nInverse Sine\nInverse Cosine\nInverse Tangent\nAbsolute Value\nLogarithm", true)
                .addField('Usage', "!math simplify <expression>", true)
                .addField('Description', 'Simplifies the expression', true)
                .setColor(0x7d3c98);
                msg.channel.send(mathHelp);
            }else if(!args[1] || !args[2]){
                msg.channel.send('Invalid format use !math help to view format');
            }else{
                msg.channel.send(args[1] + ' ' + args[2]);
            }
            
        break;
    }
})




client.login(token);



