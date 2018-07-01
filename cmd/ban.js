const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
        
        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send("Err: User not found.");
        let bReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Err: not enough permissions.");
        if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Err: ${message.author.tag} can't be banned.`);
    
        let banEmbed = new Discord.RichEmbed()
        .setDescription("__**Ban**__")
        .setColor("#bc0000")
        .addField("Banned User", `${bUser} with ID ${bUser.id}`)
        .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Banned In", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", bReason);
    
        let incidentchannel = message.guild.channels.find(`name`, "logs");
        if(!incidentchannel) return message.channel.send("Err: #logs not found");
    
        message.guild.member(bUser).ban(bReason);
        incidentchannel.send(banEmbed);
    
    
        return;
      }
      module.exports.help = {
        name: "ban"
      }
