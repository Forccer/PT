const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        let member = message.mentions.members.first() || message.member;
        let uicon = member.displayAvatarURL;
        
        let userembed = new Discord.RichEmbed()
        .setTitle(member.displayName)
        .setDescription("User information")
        .setColor("#15f153")
        .setThumbnail(uicon)
        .addField("Name", `${member.user.username}`)
        .addField("Status", `${member.user.presence.status}`)
        .addField("Created at", member.user.createdAt)
        .addField("Joined at", member.joinedAt)

        return message.channel.send(userembed);
    
}

module.exports.help = {
    name: "userinfo"
}