//console.log("Hello, World!");

const Discord =  require('discord.js');
const newton = require('newtonmath.js');
const client = new Discord.Client();

const token = 'NjgwODE1ODk0NDE4Njg1OTYy.XlGMYA._QdAyit7mUp1uaC_X_S5mzrXVB8';

const prefix = '!';
var sendingMsg;

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
                .addField('Operations', "Simplify\nFactor\nDerive\nIntegrate\n\nFind 0's\nFind Tangent\n\nArea Under Curve\n\n\nConvert Radians to Degrees\nConvert Degrees to Radians\nCosine\nSine\nTangent\nInverse Cosine\nInverse Sine\nInverse Cosine\nInverse Tangent\nAbsolute Value\nLogarithm", true)
                .addField('Usage', "!math simplify <expression>\n!math factor <expression>\n!math derive <expression>\n!math integrate <expression>\n!math zeroes <expression>\n!math tangent <expression> <x-value>\n!math area <lower bound\> <upper bound> <expression>\n!math rtd <value>\n!math dtr <value>\n!math cos <value(radians)>\n!math sin <value(radians)>\n!math tan <value(radians)>\n!math tan <value(radians)>\n!math arccos <value>\n!math arcsin <value>\n!math arctan <value>\n!math abs <value>\n!math log <base> <value>", true)
                .setColor(0x7d3c98);
                msg.channel.send(mathHelp);
            }else if(!args[1]){
                msg.channel.send('Invalid format. Type !math help to view format');
            }else if(msg.author !== 'hackCU'){
                switch(args[1]){
                    case 'simplify':
                        if(!args[2]){
                            msg.channel.send('Invalid format. Type !math help to view format');
                        }else{
                            newton.simplify(args[2], r => msg.channel.send(r));
                        }
                        break;
                    case 'factor':
                        if(!args[2]){
                            msg.channel.send("Invalid format. Type !math help to view format");
                        }else{
                            newton.factor(args[2], r=> msg.channel.send(r));
                        }
                        break;
                    case 'derive':
                        if(!args[2]){
                            msg.channel.send("Invalid format. Type !math help to view format");
                        }else{
                            newton.derive(args[2], r=> msg.channel.send(r));
                        }
                        break;
                    case 'integrate':
                        if(!args[2]){
                            msg.channel.send("Invalid format. Type !math help to view format");
                        }else{
                            newton.integrate(args[2], r=> msg.channel.send(r));
                        }
                        break;
                    case 'zeroes':
                        if(!args[2]){
                            msg.channel.send("Invalid format. Type !math help to view format");
                        }else{
                            
                            newton.zeroes(args[2],  r =>{
                                // console.log(r[0]);
                                // console.log(r[1]);
                                console.log(args[2]);
                                // console.log(r.length);
                                
                                if(typeof r[0] !== "undefined" && r[0] !== null){
                                    let newMessage = ""
                                    
                                    for(var i = 0; i < r.length; i++){
                                        
                                        newMessage += r[i] + " ";
                                    }
                                   
                                    msg.channel.send(newMessage);
                                }else{
                                    msg.channel.send('No zeroes');
                                }
                            });
                            // newton.zeroes(args[2], r=> console.log(r));
                        }
                        break;
                    case 'tangent':
                        if(!args[2] || !args[3]){
                            msg.channel.send("Invalid format. Type !math help to view format");
                        }else{
                            newton.tangent(args[2], args[3], r=> msg.channel.send(r));
                        }
                        break;
                    case 'area':
                        if(!args[2] || !args[3] || !args[4]){
                            msg.channel.send("Invalid format. Type !math help to view format");
                        }else{
                            newton.area(args[2], args[3], args[4], r=> msg.channel.send(r));
                        }
                        break;
                    case 'rtd':
                        break;
                    case 'dtr':
                        break;
                    case 'cos':
                        break;
                    case 'sin':
                        break;
                    case 'tan':
                        break;
                    case 'arccos':
                        break;
                    case 'arcsin':
                        break;
                    case 'arctan':
                        break;
                    case 'abs':
                        break;
                    case 'log':
                        break;
                    default:
                        msg.channel.send('Invalid command. Type !math help to view formats.');
                        break;
                }
            }
            
        break;
    }
})




client.login(token);



