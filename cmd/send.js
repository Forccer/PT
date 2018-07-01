const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

        let kReason = args.join(" ").slice(22);

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
        name: "send"
      }


