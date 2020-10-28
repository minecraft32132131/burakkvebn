const Discord =require("discord.js")
const ms = require("ms")

module.exports.run = async (bot, message, args) => {
  
  if(!message.member.hasPermission("726505488144924756")) return message.channel.send("Yeterli yetkin yok!")

  let user = message.mentions.users.first();
  
 user.addRole('728218381064470589') // muteli rol id 
  
  message.channel.send(`${user} adlı kişiyi muteledim`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sustur'],
  permLevel: 2
};

exports.help = {
  name: 'mute',
  description: 'Belirtilen Kullanıcıyı Susturur.',
  usage: '.mute [@Kişi] [Süre]'
};