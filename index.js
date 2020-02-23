//console.log("Hello, World!");

const Discord =  require('discord.js');
// const newton = require('newtonmath.js');
const client = new Discord.Client();
const plotly = require('plotly')("ejk9", "uKqTbKbMuvDtVh0iwKiW")
const fs = require('fs');

const prefix = '!';
const token = 'NjgwODE1ODk0NDE4Njg1OTYy.XlGMYA._QdAyit7mUp1uaC_X_S5mzrXVB8';

client.on('ready', () =>{
    console.log('This bot is online');
})

client.on('message', msg=>{
    let args = msg.content.substring(prefix.length).split(" ");
    if(msg.content === 'yikes') msg.channel.send("bruh");
    switch(args[0]){
        case 'graph':
            


            var r = require("range");
            var trace1 = {
                
                x: r.range(-10,10),
                
                y: r.range(-10,10),
                
                type: "line"
            };
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

