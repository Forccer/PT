module.exports.run = async(bot, message, args) => {
    let msg = await message.channel.send("Generating icon...");

    if(!message.guild.iconURL) return msg.edit("Err: No icon");

  /*  message.channel.send({files: [
        {
            attachment: message.guild.iconURL,
            name: "icon.png"
        }
    ]})*/

    message.channel.send({
        embed: {
        title: "Server icon",
        image: {
            url: message.guild.iconURL
        },
        timestamp: new Date(),
        color: 8582566
    }
})

    msg.delete();
}

module.exports.help = {
    name: "icon"
}