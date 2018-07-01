module.exports.run = async(bot, message, args) => {
    try {
     /* if (!args.name) {
       
        return console.log("doesn't work");
      }*/
  
      let minLength = 2, maxLength = 100;
      args.name = args.join(' ');
      if (args.name.length < minLength || args.name.length > maxLength) {
        /**
        * Error condition is encountered.
        * @fires error
        */
        return console.log('error', bot.strings.error(message.guild.language, 'invalidInput'), bot.strings.error(message.guild.language, 'channelNameLength', true, minLength, maxLength), message.channel);
      }
  
      let channelType;
      if (!args.text && args.voice) {
        channelType = 'voice';
      }
      else {
        channelType = 'text';
        args.name = args.name.replace(' ', '-');
      }
  
      let channel = await message.guild.createChannel(args.name, channelType);
  
      await message.channel.send({
        embed: {
          color: 0x00FFFF,
          description: (message.guild.language, 'createChannel', message.author.tag, channelType, channel.name),
          footer: {
            text: `ID: ${channel.id}`
          }
        }
      });
    }
   catch (e) {
      console.log(error(e));
    }
  };

module.exports.help = {
    name: "createchannel"
}
  