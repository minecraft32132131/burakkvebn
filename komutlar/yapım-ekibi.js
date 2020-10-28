const Discord = require("discord.js")

exports.run = (client, message, args) => {
var embed = new Discord.RichEmbed()

.setTitle(`ꗈ`)
.setAuthor(`Bot Bilgi`,message.author.avatarURL,)
.setColor("39fcdc")
.setThumbnail(client.user.avatarURL) 
.addField(` **Botun Kullanıcı Sayısı**`,client.users.size) 
.addField(` **Botun Olduğu Sunucu Sayısı**`,client.guilds.size) 
.addField(` **Bottaki Komut Sayısı**`,client.commands.size)
.addField(` **Sahip**`, `<@619914696669134859>`,true)
.addField(` **Bot Ve Sunucu Ortağı**`, `<@607208153485934602>`,true) 
.addField(` **Botun Geliştiricisi**`,`<@619914696669134859>`,true)
.addField(` **Bot Discord.js Versiyon**`,Discord.version)
.setTimestamp()
message.channel.sendEmbed(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yapımekibi"],
  permLevel: 0
};

exports.help = {
  name: 'yapımekibi',
  description: 'Yapım Ekibini Gösterir',
  usage: '!yapımekibi'
};