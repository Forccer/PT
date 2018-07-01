const commando = require('discord.js-commando')
const Discord = require("discord.js")
const giphy = require("giphy-api")("zsI0GJzf0PTrZ6z8Xi2djWKfg84Gw1l3")
const fs = require("fs")

const commands = JSON.parse(fs.readFileSync("./Storage/commands.json", "utf8"))
//const weather = require("weather-js")


const botSettings = require("./botsettings.json")
const prefix = botSettings.prefix

const bot = new Discord.Client()   
bot.commands = new Discord.Collection();

fs.readdir("./cmds", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commandos to load, sir!");
        return;
    }

    console.log(`loading ${jsfiles.length} commands!`)

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`)
        console.log(`${i + 1}: ${f} loaded!`)
       bot.commands.set(props.help.name, props)
    });
});



//var commandsList = (fs.readFileSync('Storage/commands.txt', 'utf8'))

bot.login(botSettings.token)

bot.on("ready", async() => {
    console.log(`${bot.user.username} bot, ready to roll!`)
    console.log(bot.commands)
    
    bot.user.setStatus('Online')//Status goes here: can be 'Online', 'idle', 'invisable', & 'dnd'

    //game & streaming
    bot.user.setGame("The Parallex")

    try {
    let link = await bot.generateInvite(["ADMINISTRATOR"]);
    console.log(link); 
    } catch(e) {
        console.log(e.stack);
    }
})

bot.on("message", async message => {

 if  (message.author.bot) return
 if  (message.channel.type === "dm") return

    let messageArray = message.content.split(" ")
    let command  = messageArray[0]

   let args = messageArray.slice(1)
 if (messageArray.length >1) {
    let args = messageArray[1].split(" ")  //messageArray[0].split(" ")
 }
      
 if(!command.startsWith(botSettings.prefix)) return

    let cmd = bot.commands.get(command.slice(prefix.length))
//    let cmd = bot.commands.get(command)
    if(cmd) cmd.run(bot, message, args)

   // var servers = {}

    if(command === `${prefix}gif`){
        giphy.random('meme', function (err, res) {
            message.channel.send(res["data"].url);
        });
    }

    /**Ping command
    if(command === `${prefix}ping`) {
        message.channel.sendMessage("Pong");
    }*/

})



