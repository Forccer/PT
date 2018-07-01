const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    
        let kickedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kickedUser) return message.channel.send("Err: User not found.");
        let kReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Err: not enough permission.");
        if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Err: ${message.author.tag} can't be kicked.`);
    
        let kickEmbed = new Discord.RichEmbed()
        .setDescription("__**Kick**__")
        .setColor("#00FFFF")
        .addField("Kicked User", `${kickedUser} with ID \`${kickedUser.id}\``)
        .addField("Kicked By", `<@${message.author.id}> with ID \`${message.author.id}\``)
        .addField("Kicked In", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", kReason);

        if (message.deletable) {
            message.delete().catch(() => {});
          }
    
        let kickChannel = message.guild.channels.find(`name`, "mod-logs");
        if(!kickChannel) return message.channel.send("Err: No mod-logs channel found.");
    
        message.guild.member(kUser).kick(kReason);
        kickChannel.send(kickEmbed);
    
        return;
}
      module.exports.help = {
        name: "kick"
      }


