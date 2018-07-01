
const Discord = require("Discord.js");
//const superagent = require("superagent");
const request = require("request");

module.exports.run = async (bot, message, args) => {
    request('https://nekos.life/api/neko', function(error, response, body) {

    let bodys = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("Here are some nekos~")
    .setDescription(`${body}`);

    return message.channel.send(bodys);
    })
}

module.exports.help = {
    name: "neko"
}