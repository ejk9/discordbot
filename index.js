//console.log("Hello, World!");

const Discord =  require('discord.js');
const newton = require('newtonmath.js');
const client = new Discord.Client();

const im = require('imagemagick');

const token = 'NjgwODE1ODk0NDE4Njg1OTYy.XlGMYA._QdAyit7mUp1uaC_X_S5mzrXVB8';

const prefix = '!';

mathHelp = new Discord.RichEmbed("Math");

var request = require('request');

const latex = require('node-latex');
const fs = require('fs');


client.on('ready', () =>{
    console.log('This bot is online');
})

client.on('message', msg=>{
    let args = msg.content.substring(prefix.length).split(" ");
    switch(args[0]){
        case 'math':
            if(args[1] == 'help'){
                mathHelp = new Discord.RichEmbed()
                .setTitle("!math Help")
                .setDescription("!math <operation> <expression>")
                .addField('Operations', "Simplify\nFactor\nDerive\nIntegrate\nFind Tangent\nArea Under Curve\n\nConvert Radians to Degrees\nConvert Degrees to Radians\nCosine\nSine\nTangent\nInverse Cosine\nInverse Sine\nInverse Cosine\nInverse Tangent\nAbsolute Value\nLogarithm", true)
                .addField('Usage', "!math simplify <expression>\n!math factor <expression>\n!math derive <expression>\n!math integrate <expression>\n!math tangent <expression> <x-value>\n!math area <lower bound\> <upper bound> <expression>\n!math rtd <value>\n!math dtr <value>\n!math cos <value(radians)>\n!math sin <value(radians)>\n!math tan <value(radians)>\n!math tan <value(radians)>\n!math arccos <value>\n!math arcsin <value>\n!math arctan <value>\n!math abs <value>\n!math log <base> <value>", true)
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
                            
                            newton.area(args[4], args[2], args[3], r=> msg.channel.send(r));
                        }
                        break;
                    case 'rtd':
                        if(!args[2]){
                            msg.channel.send("Invalid format. Type !math help to view format");
                        }else{
                            var num = removePi(args[2]);
                            num = convertFrac(num);
                            msg.channel.send(radToDegree(num));
                        }
                        break;
                    case 'dtr':
                        if(!args[2]){
                            msg.channel.send("Invalid format. Type !math help to view format");
                        }else{
                            var str = args[2] + '/180';
                            var temp = "";
                            newton.simplify(str, r=> {
                                for(var i = 0; i < r.length; i++){
                                    if(r[i] == '/'){
                                        temp += "pi/";
                                    }else{
                                        temp += r[i];
                                    }
                                }
                                msg.channel.send(temp);
                            })
                            
                        }
                    case 'cos':
                        if(!args[2]){
                            msg.channel.send("Invalid format. Type !math help to view format");
                        }else{
                            newton.cos(args[2], r=> msg.channel.send(r));
                        }
                        break;
                    case 'sin':
                        if(!args[2]){
                            msg.channel.send("Invalid format. Type !math help to view format");
                        }else{
                            newton.sin(args[2], r=> msg.channel.send(r));
                        }
                        break;
                    case 'tan':
                        if(!args[2]){
                            msg.channel.send("Invalid format. Type !math help to view format");
                        }else{
                            newton.tan(args[2], r=> msg.channel.send(r));
                        }
                        break;
                    case 'arccos':
                        if(!args[2]){
                            msg.channel.send("Invalid format. Type !math help to view format");
                        }else{
                            newton.arccos(args[2], r=> msg.channel.send(r));
                        }
                        break;
                    case 'arcsin':
                        if(!args[2]){
                            msg.channel.send("Invalid format. Type !math help to view format");
                        }else{
                            newton.arcsin(args[2], r=> msg.channel.send(r));
                        }
                        break;
                    case 'arctan':
                        if(!args[2]){
                            msg.channel.send("Invalid format. Type !math help to view format");
                        }else{
                            newton.arctan(args[2], r=> msg.channel.send(r));
                        }
                        break;
                    case 'abs':
                        if(!args[2]){
                            msg.channel.send("Invalid format. Type !math help to view format");
                        }else{
                            newton.abs(args[2], r=> msg.channel.send(r));
                        }
                        break;
                    case 'log':
                        if(!args[2] || !args[3]){
                            msg.channel.send("Invalid format. Type !math help to view format");
                        }else{
                            newton.log(args[3], args[2], r=> msg.channel.send(r));
                        }
                        break;
                    default:
                        msg.channel.send('Invalid command. Type !math help to view formats.');
                        break;
                }
            }
            
        break;
        case 'help':
            
        break;
        case 'insult':
            if(!args[1]){
                request('https://evilinsult.com/generate_insult.php?lang=en&type=json', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                    importedJSON = JSON.parse(body);
                    //console.log(importedJSON);
                    msg.channel.send(importedJSON.insult);
                }
            })
            }else{
                request('https://evilinsult.com/generate_insult.php?lang=en&type=json', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                        importedJSON = JSON.parse(body);
                        //console.log(importedJSON);
                        msg.channel.send(args[1] + " " + importedJSON.insult);
                    }
                })
            }
        break;
        case 'latex':
            msg.content = msg.content.substr(7);
            // const output = fs.createWriteStream('output.pdf');
            // fs.readFile('input.tex', function(err, data){
            //     //console.log(data);
            //     fs.writeFile('mynewfile1.tex', data + '$' + msg.content + '$\n\\end{document}', function (err) {
            //         if (err) throw err;
            //         console.log('Saved!');
            //     }); 
            // });

            // const input = fs.createReadStream('mynewfile1.tex');
            
            // sleep(2000);
            // pdf = latex(input);
            // sleep(2000);
            // pdf.pipe(output);
            // sleep(4000);
            // im.convert(['output.pdf', '-resize', '25x120', '1.png'],
            // //-density 150 -antialias "input_file_name.pdf" -append -resize 1024x -quality 100 "output_file_name.png"
            // function(){
            // console.log('wah');
            // });
            makePdf(msg.content);

        break;
    }
})

function radToDegree(rad){
    return (rad * 180);
}

function removePi(str){
    var temp = "";
    for(var i = 0; i < str.length; i++){
        //temp = str.substring(i, 2);
        if(!isNaN(parseInt(str[i])) || str[i] == '/'){
            temp += str[i];
        }
    }
    //console.log(temp);
    return temp;
}

function convertFrac(str){
    var temp = "", temp2 = "";
    var bot = false;
    for(var i = 0; i < str.length; i++){
        if(str[i] != "/" && !bot){
            temp += str[i];
        }else if(str[i] != '/' && bot){
            temp2 += str[i];
        }else{
            bot = true;
        }
    }
    console.log(temp);
    console.log(temp2);
    console.log(parseFloat(temp)/parseFloat(temp2));
    return (parseFloat(temp)/parseFloat(temp2));
}

function convertDegrees(str){
    str = str + '/180';
    newton.simplify(str, r=> str = r);
    console.log(str);
    return str;
}

function encrypt(str, code){
    if(isNaN(parseInt(code))){

    }else{

    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function makePdf(msg) {
    // console.log("Hello");
    // await sleep(2000);
    // console.log("World!");
    // await sleep(2000);
    // console.log("Goodbye!");

            const output = fs.createWriteStream('output.pdf');
            fs.readFile('input.tex', function(err, data){
                //console.log(data);
                fs.writeFile('mynewfile1.tex', data + '$' + msg + '$\n\\end{document}', function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                }); 
            });
            await sleep(2000);
            const input = fs.createReadStream('mynewfile1.tex');
            
            await sleep(2000);
            pdf = latex(input);
            await sleep(2000);
            pdf.pipe(output);
            await sleep(4000);
            im.convert([ '-density=300', '-srcFormat=output.pdf', '-resize=25x125', '-quality=100', '-format=out.png'],
            //-density 150 -antialias "input_file_name.pdf" -append -resize 1024x -quality 100 "output_file_name.png"
            function(err, stdout){
                if (err) throw err;
                console.log('stdout:', stdout);
              });

  }




client.login(token);



