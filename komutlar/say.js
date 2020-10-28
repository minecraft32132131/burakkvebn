const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

  if (!message.member.roles.has("727123707813953628") && !message.member.hasPermission("MANAGE_MESSAGES") ) 
   return message.channel.send(hata).then(m =>m.delete(10000))
    let guild = "685800026223673365";
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.members.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sfr:727447336653029428>`,
    '1': `<a:bir:727447343779020800>`,
    '2': `<a:iki:727447350615736341>`,
    '3': `<a:uc:727447356932489266>`,
    '4': `<a:drt:727447364276846612>`,                       
    '5': `<a:be:727447368382808087>`,
    '6': `<a:alt:727447373810499654>`,
    '7': `<a:yedi:727447379120226366>`,
    '8': `<a:sekiz:727447387706228756> `,
    '9': `<a:dokuz:727447392986857542> `}[d];
      })
    }/////////////////////////////
  var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sfr:727447336653029428>`,
    '1': `<a:bir:727447343779020800>`,
    '2': `<a:iki:727447350615736341>`,
    '3': `<a:uc:727447356932489266>`,
    '4': `<a:drt:727447364276846612>`,                       
    '5': `<a:be:727447368382808087>`,
    '6': `<a:alt:727447373810499654>`,
    '7': `<a:yedi:727447379120226366>`,
    '8': `<a:sekiz:727447387706228756> `,
    '9': `<a:dokuz:727447392986857542> `}[d];
      })
    }
  /////////////////////////////////////////
  var tagdakiler = 0;
  let tag = "ꗈ";
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }  
  })
  var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ")
  var üs3 = tagdakilerr.match(/([0-9])/g)
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sfr:727447336653029428>`,
    '1': `<a:bir:727447343779020800>`,
    '2': `<a:iki:727447350615736341>`,
    '3': `<a:uc:727447356932489266>`,
    '4': `<a:drt:727447364276846612>`,                       
    '5': `<a:be:727447368382808087>`,
    '6': `<a:alt:727447373810499654>`,
    '7': `<a:yedi:727447379120226366>`,
    '8': `<a:sekiz:727447387706228756> `,
    '9': `<a:dokuz:727447392986857542> `}[d];
      })
    }
  //////////////////////////////////////////
  var onlayn = message.guild.members.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sfr:727447336653029428>`,
    '1': `<a:bir:727447343779020800>`,
    '2': `<a:iki:727447350615736341>`,
    '3': `<a:uc:727447356932489266>`,
    '4': `<a:drt:727447364276846612>`,                       
    '5': `<a:be:727447368382808087>`,
    '6': `<a:alt:727447373810499654>`,
    '7': `<a:yedi:727447379120226366>`,
    '8': `<a:sekiz:727447387706228756> `,
    '9': `<a:dokuz:727447392986857542> `}[d];
      })
    }
  ///codare farkıyla bebeğim
const emoji1 = client.emojis.get("728657320036532265")
 const embed1 = new Discord.RichEmbed()
 .setColor('000000')
 .setAuthor('Rebilius')
 .setDescription(`${emoji1} **Sunucumuzda Toplam ** ${üyesayısı} **Üye bulunmakta.** \n\n ${emoji1} **Sunucumuzda Toplam** ${onlayn} **Çevrimiçi üye bulunmakta.** \n\n ${emoji1} **Ses kanallarında Toplam** ${sessayı} **Üye bulunmakta.** \n\n ${emoji1} **Tagımızda Toplam ** ${tagdakilerr} **Kişi bulunmakta.**`)
 .setFooter(`Komutu Kullanan Yetkili: ${message.author.username}`)
 
     const hata = new Discord.RichEmbed()
    .setColor('000000')
    .setAuthor(`Hata`)
    .setDescription(`**Bu komutu kullanmaya hakkınız yoktur!**`)
 
  msg.channel.send(embed1);
  
  /*client.setInterval(() => {
  let channel = client.channels.get("694870726280347668"); 
  channel.setTopic(`Toplam üye: _${üyesayısı.toString()}_ / Çevrimiçi üye: ${onlayn}`); //kanal açıklama oto
}, 10000);*/
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}