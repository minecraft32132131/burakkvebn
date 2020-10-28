const express = require("express");
const http = require("http");
const app = express();
 
app.get("/", (request, response) => {
  //console.log(Date.now() + " BOT Aktif.");
  //response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_NAME}.glitch.me`);
}, 1000 * 60 * 3);
const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
client.queue = new Map();
const fs = require("fs");
const db = require("quick.db");
const moment = require("moment");
require("./util/eventLoader")(client);
client.on('guildMemberAdd', async member => {
  
  let tag = await db.fetch(`tag_${member.guild.id}`);
  let tagyazi;
  if (tag == null) tagyazi = member.setNickname(`${member.user.username}`)
  else tagyazi = member.setNickname(`${tag} | ${member.user.username}`)
});
var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

////////////////////////

client.on("message", async message => {
  if (message.content === "gir") {
    client.emit(
      "guildMemberAdd",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});
client.on("message", async message => {
  if (message.content === "çık") {
    client.emit(
      "guildMemberRemove",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token);

/////////////////////////////////////
///////////////////////////////////////////////////

///////////////////////////////////////////////////

/////////////////////////////////////////////////////
client.on("guildMemberAdd", member => {  
  const kanal = "758432913866883095"; //Kanl İd
  let user = client.users.get(member.id);
  require("moment-duration-format");
    const kurulus = new Date().getTime() - user.createdAt.getTime();  
    var kontrol;
if (kurulus < 1296000000) kontrol = ' **__Bu Hesap Güvenilir Değil__** '
if (kurulus > 1296000000) kontrol = ' **__Bu Hesap Güvenilir Gözüküyor__** '
  moment.locale("tr");
  let buse = client.channels.get(kanal);
buse.send("**<a:emoji ismi:emoji id'si> Hoşgeldin! " + member + " Seninle __\`" + member.guild.memberCount + "\`__ Kişiyiz \n\n  <a:emoji ismi:emoji id'si> Eger musaitsen SeS teyit odasına gecermisin ! \n\n  <a:emoji ismi:emoji id'si> Yetkililer Üyemiz Geldi <@&701412014559592478>  \n\n  <a:emoji ismi:emoji id'si> Hesabın Oluşturulma Tarihi:** " + moment(member.user.createdAt).format("YYYY **__DD MMMM dddd (hh:mm:ss)__**") +  "  \n\n"  + kontrol + " \n\n",  new Discord.Attachment("https://media.giphy.com/media/dayIK7bQLhb4BCFlHN/giphy.gif"
    )
  );
});



//////////////////////////////////////////////////////
/////OTOİSİM
client.on('guildMemberAdd', member => {
 member.setNickname('İsim Yaş')////YENI GELENLERE VERILCEK ISIM
})
////
client.on('message', async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "sa") {
    msg.reply("**Aleyküm Selam Hoşgeldin  ** ");
  }
});

////////////////////////
client.on('message', async message => {
 
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
 
  let kullanıcı = message.mentions.users.first() || message.author
  let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`)
  let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`)
  let afkkullanıcıı = await db.fetch(`afk_${kullanıcı}`)
  let sebep = afkkullanıcı
 
  if (message.author.bot) return;
  if (message.content.includes(`${prefix}afk`)) return;

  if (!message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.member.setNickname(`${message.author.username}`);
      
      message.channel.send(`:sunny: **<@${message.author.id}>** adlı kullanıcı artık **AFK** değil.`)
      db.delete(`afk_${message.author.id}`)
    }
    if (afkkullanıcı) {
      message.channel.send(`:crescent_moon: **<@${kullanıcı.id}>** adlı Kullanıcı **AFK**. | **SEBEB** : \`${sebep}\``);
      message.author.send(`Sen Mesaj Attında, **<@${kullanıcı.id}>** adlı Kullanıcı **AFK**. | **SEBEB** : \`${sebep}\``);
    }
  }
});
////////////////////////
// TEYIT \\

client.on("guildMemberAdd", async (member) => {
      let gkisi = client.users.get(member.id);
      const ktarih = new Date().getTime() - gkisi.createdAt.getTime();   

    if (ktarih < 2592000001) {
      member.addRole("727833596680732703")
      member.removeRole("726516583006077019")
        
    const embed = new Discord.RichEmbed()
     .setColor("#0080FF")
    .setAuthor(client.user.username,client.user.displayAvatarURL)
    .setDescription(`<@${member.user.id}>**, Aramıza Hoşgeldin :)**

     **Seninle Beraber *${member.guild.memberCount}* Kişiyiz.**
     **Teyit Olabilmeniz İçin Lütfen ~*"ᴄᴏɴғɪʀᴍᴀᴛɪᴏɴ"*~ Odalarına Giriş Yapınız.!**
     **Kayıt Tarihi: ${moment.utc(member.JoinedAt).format('DD.MM.YY')}**
     **Şüpheli Hesap!**

    **Kayıt Sorumlularımız Sizlerle İlgilenecektirler.**

`,true)
    
    .setTimestamp()
    .setFooter(`Şüpheli Hesaplar Yetkili İle İletişime Geçsinler!`)
        
    let mkanal = member.guild.channels.find(`name`, "kayıt-chat");
    mkanal.send(embed);
    
    }else{
              member.addRole("726516583006077019")
      
              
      
    const embed = new Discord.RichEmbed()
     .setColor("#0080FF")
    .setAuthor(client.user.username,client.user.displayAvatarURL)
    .setDescription(`<@${member.user.id}>** Aramıza Hoşgeldin :)**

    **Seninle Beraber ${member.guild.memberCount} Kişiyiz.**
     **Kayıt Olabilmeniz İçin Lütfen *V.Confirmed* Odalarına Giriş Yapınız.!**
     **Hesap Açma Tarihi: ${moment.utc(member.user.createdAt).format('DD.MM.YY')}**
     **Güvenli Hesap!**

    **Kayıt Sorumlularımız Sizlerle İlgilenecektirler.**

`,true)
    
    .setTimestamp()
    .setFooter(`Şüpheli Hesaplar Yetkili İle İletişime Geçsinler!`)
    
    let mkanal = member.guild.channels.find(`name`, "kayıt-chat");
    mkanal.send(embed);
      
      }
});


client.on("userUpdate", async (old, nev) => {
  let Sunucu = "758432300877873222"; //botun olduğu sunucu id
  let Kanal = "758432971081777222"; //log kanalının idsini
  let Rol = "758448776347516988"; //tag alınca verilecek alınacak rolun idsi
  let Tag = "★"; //tagınızı buraya girin
  if (old.username !== nev.username) {
    if (
      nev.username.includes(Tag) &&
      !client.guilds
        .get(Sunucu)
        .members.get(nev.id)
        .roles.has(Rol)
    ) {
      client.channels
        .get(Kanal)
        .send(
          ` **${nev}, \`${Tag}\` Tagını Aldı Ve Tagges Of Rebilius Rolünü Aldı**`
        );
      client.guilds
        .get(Sunucu)
        .members.get(nev.id)
        .addRole(Rol);
    }
    if (
      !nev.username.includes(Tag) &&
      client.guilds
        .get(Sunucu)
        .members.get(nev.id)
        .roles.has(Rol)
    ) {
      client.guilds
        .get(Sunucu)
        .members.get(nev.id)
        .removeRole(Rol);
      client.channels
        .get(Kanal)
        .send(
          ` **${nev}, \`${Tag}\` Tagını Çıkarttı Tagges Of Rebilius Rolü Alındı.**`
        );
    }
  }
});
// TEYIT \\
client.on('guildMemberAdd', (member) => {
 if(member.user.bot) return;
 member.setNickname('∞ İsim Yaş')
})
// SAY \\
client.on("ready", () => {
  client.channels.get("759706723740155914").join();
   //main dosyaya atılacak
})
//TAG\\
client.on("message", msg => {
  if (msg.content === ".tag") {
     msg.channel.send(`ꗈ`)
}
});
