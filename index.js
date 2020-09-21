//console.log("Hello, World$");

const Discord =  require('discord.js');
const newton = require('newtonmath.js');
const client = new Discord.Client();
const plotly = require('plotly')("ejk9", "uKqTbKbMuvDtVh0iwKiW");
const fs = require('fs');
const b = require('async');


const im = require('imagemagick');


const prefix = '$';

const token = 'NjgwODE1ODk0NDE4Njg1OTYy.XlGMYA._QdAyit7mUp1uaC_X_S5mzrXVB8';



mathHelp = new Discord.RichEmbed("Math");

var request = require('request');

const latex = require('node-latex');


 

var PDFImage = require("pdf-image").PDFImage;
 
var pdfImage = new PDFImage("output.pdf");
//console.log(pdfImage.getInfo())

pdfImage.convertPage(0).then(function (imagePath) {
  // 0-th page (first page) of the slide.pdf is available as slide-0.png
  console.log(fs.existsSync("slide-0.png")) // => true
});

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

    if(msg.content[0] == prefix){
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
                msg.channel.send("!graph, !help, !insult, !latex, !math")
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
                makePdf(msg);
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
                                fs.writeFile('mynewfile1.tex', data + '$' + msg + '$}\n\\end{document}', function (err) {
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
                            await sleep(2000);
                            makePng();
                            await sleep(1000);
                            var attachment = new Discord.Attachment('output.png');
                            msg.channel.send(attachment);     
                            console.log('done');
                        
                            // im.convert([ '-density=300', '-srcFormat=output.pdf', '-resize=25x125', '-quality=100', '-format=out.png'],
                            // //-density 150 -antialias "input_file_name.pdf" -append -resize 1024x -quality 100 "output_file_name.png"
                            // function(err, stdout){
                            //     if (err) throw err;
                            //     console.log('stdout:', stdout);
                            //   });
                
                }
                

            break;
            

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
                await sleep(1000);
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
                
            
            break; 
            default:
                    if(msg.bot === false){
                        msg.channel.send("Unknown command. Type !help to view all commands.")
                    }
                break;
                
                
                

        }
}


})

function radToDegree(rad){
    return (rad * 180);
}

function removePi(str){
    var temp = "";
    for(var i = 0; i < str.length; i++){
        //temp = str.substring(i, 2);
        if($isNaN(parseInt(str[i])) || str[i] == '/'){
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
        if(str[i] != "/" && $bot){
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



  
async function makePdf(msg) {
    // console.log("Hello");
    // await sleep(2000);
    // console.log("World$");
    // await sleep(2000);
    // console.log("Goodbye$");

            const output = fs.createWriteStream('output.pdf');
            fs.readFile('input.tex', function(err, data){
                //console.log(data);
                fs.writeFile('mynewfile1.tex', data + '$' + msg + '$}\n\\end{document}', function (err) {
                    if (err) throw err;
                    console.log('Saved$');
                }); 
            });
            await sleep(2000);
            const input = fs.createReadStream('mynewfile1.tex');
            
            await sleep(2000);
            pdf = latex(input);
            await sleep(2000);
            pdf.pipe(output);
            await sleep(2000);
            
            // im.convert([ '-density=300', '-srcFormat=output.pdf', '-resize=25x125', '-quality=100', '-format=out.png'],
            // //-density 150 -antialias "input_file_name.pdf" -append -resize 1024x -quality 100 "output_file_name.png"
            // function(err, stdout){
            //     if (err) throw err;
            //     console.log('stdout:', stdout);
            //   });

  }




client.login(token);


function makePng(){

    var Canvas = require("canvas");
    var assert = require("assert").strict;

    function NodeCanvasFactory() {}
    NodeCanvasFactory.prototype = {
    create: function NodeCanvasFactory_create(width, height) {
        assert(width > 0 && height > 0, "Invalid canvas size");
        var canvas = Canvas.createCanvas(width, height);
        var context = canvas.getContext("2d");
        return {
        canvas: canvas,
        context: context,
        };
    },

    reset: function NodeCanvasFactory_reset(canvasAndContext, width, height) {
        assert(canvasAndContext.canvas, "Canvas is not specified");
        assert(width > 0 && height > 0, "Invalid canvas size");
        canvasAndContext.canvas.width = width;
        canvasAndContext.canvas.height = height;
    },

    destroy: function NodeCanvasFactory_destroy(canvasAndContext) {
        assert(canvasAndContext.canvas, "Canvas is not specified");

        // Zeroing the width and height cause Firefox to release graphics
        // resources immediately, which can greatly reduce memory consumption.
        canvasAndContext.canvas.width = 0;
        canvasAndContext.canvas.height = 0;
        canvasAndContext.canvas = null;
        canvasAndContext.context = null;
    },
    };

    var pdfjsLib = require("pdfjs-dist/build/pdf.js");

    // Relative path of the PDF file.
    var pdfURL = "output.pdf";

    // Read the PDF file into a typed array so PDF.js can load it.
    var rawData = new Uint8Array(fs.readFileSync(pdfURL));

    // Load the PDF file.
    var loadingTask = pdfjsLib.getDocument(rawData);
    loadingTask.promise
    .then(function(pdfDocument) {
        console.log("# PDF document loaded.");

        // Get the first page.
        pdfDocument.getPage(1).then(function(page) {
        // Render the page on a Node canvas with 100% scale.
        var viewport = page.getViewport({ scale: 1.0 });
        var canvasFactory = new NodeCanvasFactory();
        var canvasAndContext = canvasFactory.create(
            viewport.width,
            viewport.height
        );
        var renderContext = {
            canvasContext: canvasAndContext.context,
            viewport: viewport,
            canvasFactory: canvasFactory,
        };

        var renderTask = page.render(renderContext);
        renderTask.promise.then(function() {
            // Convert the canvas to an image buffer.
            var image = canvasAndContext.canvas.toBuffer();
            fs.writeFile("output.png", image, function(error) {
            if (error) {
                console.error("Error: " + error);
            } else {
                console.log(
                "Finished converting first page of PDF file to a PNG image."
                );
            }
            });
        });
        });
    })
    .catch(function(reason) {
        console.log(reason);
    });


}


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


