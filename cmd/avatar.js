module.exports.run = async(bot, message, args) => {
    let msg = await message.channel.send("Generating avatar...");
    let target = message.mentions.users.first() || message.author;

    /*message.channel.send({files: [
      {
            attachment: target.displayAvatarURL,
            name: "avatar.png"
        }
    ]})*/

    message.channel.send({
        embed: {
        title: "Your avatar",
        image: {
            url: target.displayAvatarURL
        },
        timestamp: new Date(),
        color: 8582566
    }
})

    msg.delete();
}
module.exports.help = {
    name: "avatar"
}
