//console.log("Hello, World!");

const Discord =  require('discord.js');
const newton = require('newtonmath.js');
const client = new Discord.Client();
const plotly = require('plotly')("ejk9", "uKqTbKbMuvDtVh0iwKiW")
const fs = require('fs');
const b = require('async');

const prefix = '!';
const token = 'NjgwODE1ODk0NDE4Njg1OTYy.XlGMYA._QdAyit7mUp1uaC_X_S5mzrXVB8';

client.on('ready', () =>{
    console.log('This bot is online');
})

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function asyncProcessing (ms) {  
    await new Promise(resolve => setTimeout(ms, resolve))
  
    console.log(`waited: ${ms}ms`)
  
    return ms
}


client.on('message', msg=>{
    let args = msg.content.substring(prefix.length).split(" ");
    if(msg.content === 'yikes') msg.channel.send("bruh");
    switch(args[0]){
        case 'graph':
            console.log("graph command called")
            if(typeof args[1] === "undefined"){
                msg.channel.send("Invald function");
                break;
            }else if(args[1] === "help"){
                msg.channel.send("`!graph graphs a polynomial function.`\n\n**Usage:** !graph <function> <xmin> <xmax> <step>\n\n**Examples:**\n`!math x^2` graphs the function x^2 from -10 to 10");
                break;
            }
            typeof args[2] === "undefined" && (args[2] = -10);
            typeof args[3] === "undefined" && (args[3] = 10);
            typeof args[4] === "undefined" && (args[4] = 1);
            let notDone = true;
            let result = new Array();
            let r = require("range");
            let xnums = r.range(Number(args[2]),Number(args[3]) + 1 , Number(args[4]))
            const a = ()=>{
            //console.log(args);
            // console.log("I think x nums is", xnums, "and args[2]", args[2], "and args[3]", args[3], "a[4]", args[4]);
            // console.log(args[1].replace('x',xnums[2]));
            function step(i){
                if(i < xnums.length){
                    var str = args[1].replace(/x/gi,'('+xnums[i] +')');
                    // console.log(str, end=' ');
                    b.series(newton.simplify(str, x => {result[i] = x; if(i === xnums.length - 1) doSomething();}), ()=>step(i+1));
                    // console.log("this code should run second");
                    
                }else {
                    
                    console.log("Finished loading");
                    console.log(result);
                }
            }
            step(0);

            
            }
            const doSomething = async ()=> {
            await sleep(50);
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

                
                })
            }
            a();
            
        
            
            
            
            

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

