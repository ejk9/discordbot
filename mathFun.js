const Discord =  require('discord.js');
const newton = require('newtonmath.js');
mathHelp = new Discord.RichEmbed("Math");

function help(){
    mathHelp = new Discord.RichEmbed()
                    .setTitle("$math Help")
                    .setDescription("$math <operation> <expression>")
                    .addField('Operations', "Simplify\nFactor\nDerive\nIntegrate\nFind Tangent\nArea Under Curve\n\nConvert Radians to Degrees\nConvert Degrees to Radians\nCosine\nSine\nTangent\nInverse Cosine\nInverse Sine\nInverse Cosine\nInverse Tangent\nAbsolute Value\nLogarithm", true)
                    .addField('Usage', "$math simplify <expression>\n$math factor <expression>\n$math derive <expression>\n$math integrate <expression>\n$math tangent <expression> <x-value>\n$math area <lower bound\> <upper bound> <expression>\n$math rtd <value>\n$math dtr <value>\n$math cos <value(radians)>\n$math sin <value(radians)>\n$math tan <value(radians)>\n$math tan <value(radians)>\n$math arccos <value>\n$math arcsin <value>\n$math arctan <value>\n$math abs <value>\n$math log <base> <value>", true)
                    .setColor(0x7d3c98);
    return mathHelp;
}

module.exports = {help}

//export any functions seperated by commas, then use require and a varoiable to call these functions


