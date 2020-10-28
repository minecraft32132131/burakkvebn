const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if(message.author.id !== '619914696669134859') return message.reply('Yetkin Yok Kardeşim! ');
      const sayMessage = args.join(` `);
      client.user.setGame(sayMessage);
      message.channel.send (`<a:onay:657665088953778198> Oyun ismi **${sayMessage}** olarak değiştirildi :ok_hand:`)
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'oyundeğiş',
  description: 'Botun pingini gösterir.',
  usage: 'oyundeğiş'
};