//console.log("Hello, World!");

const Discord =  require('discord.js');
const newton = require('newtonmath.js');
const client = new Discord.Client();
const plotly = require('plotly')("ejk9", "uKqTbKbMuvDtVh0iwKiW")
const fs = require('fs');

const prefix = '!';
const token = 'NjgwODE1ODk0NDE4Njg1OTYy.XlGMYA._QdAyit7mUp1uaC_X_S5mzrXVB8';

client.on('ready', () =>{
    console.log('This bot is online');
})

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  

client.on('message', msg=>{
    let args = msg.content.substring(prefix.length).split(" ");
    if(msg.content === 'yikes') msg.channel.send("bruh");
    switch(args[0]){
        case 'graph':
            if(typeof args[1] === "undefined"){
                msg.channel.send("Invald function");
                break;
            }else if(args[1] === "help"){
                msg.channel.send("**Usage:** !math <function>\n\n**Examples:**`!math x^2` graphs the function x^2 from -10 to 10");
                break;
            }
            typeof args[2] === "undefined" && (args[2] = -10);
            typeof args[3] === "undefined" && (args[3] = 10);
            typeof args[4] === "undefined" && (args[4] = 1);
            console.log(args);
            let r = require("range");
            let xnums = r.range(args[2],args[3] + 1 , args[4])
            var result = new Array();
            // console.log(args[1].replace('x',xnums[2]));
            function step(i){
                if(i < xnums.length){
                    var str = args[1].replace(/x/gi,'('+xnums[i] +')');
                    // console.log(str, end=' ');
                    newton.simplify(str, x => result[i] = x)//console.log("please help me : ( i: " + i + " q: " + q); result[i] =q;});
                    // console.log("this code should run second");
                    step(i + 1)
                }else {
                    console.log("Finished loading");
                    console.log(result);
                }
            }
            step(0);
            const doSomething = async () => {
            await sleep(1000)
            var trace1 = {
                
                x: xnums,
                
                y: result,
                
                type: "line"
            };
            console.log(trace1);
            var figure = {'data': [trace1]};
            var imgOpts = {
                format: 'png',
                width: 1000,
                height: 500
            };
            
            plotly.getImage(figure, imgOpts, function (error, imageStream) {
                if (error) return console.log (error);
                
                var fileStream = fs.createWriteStream('1.png');
                imageStream.pipe(fileStream);
                console.log("Image has been saved.");
                setTimeout(()=>{
                    var attachment = new Discord.Attachment('./1.png');
                    msg.channel.send(attachment);
                    console.log("Image has been printed");
                },1000);

                
            });
        }
        doSomething();
            
            
            
            

    }

})



client.login(token);




// var trace1 = {
//   x: [1, 2, 3, 4],
//   y: [10, 15, 13, 17],
//   type: "scatter"
// };

// var figure = { 'data': [trace1] };

// var imgOpts = {
//     format: 'png',
//     width: 1000,
//     height: 500
// };

// plotly.getImage(figure, imgOpts, function (error, imageStream) {
//     if (error) return console.log (error);

//     var fileStream = fs.createWriteStream('1.png');
//     imageStream.pipe(fileStream);
//     console.log("Image has been saved.")
// });

