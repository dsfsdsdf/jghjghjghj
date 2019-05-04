const Discord = require("discord.js");
var log = require("json-log").log;
const talkedRecently = new Set();
const uplRecently = new Set();
const fs = require("fs");
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
const ms = require("ms");
var MojangAPI = require('mojang-api');
const client = new Discord.Client();
const config = require("./config.json");
const moment = require("moment");
const snekfetch = require('snekfetch');
require("moment-duration-format");
const { Client, RichEmbed } = require('discord.js');
var mention = "<@478881504773275658>"
const http = require('http');
const express = require('express');
client.commands = new Discord.Collection();
var imgur = require('imgur');
const app = express();
const scores = require("./scores.json");
typeof scores; // object
require('http').createServer().listen(3000)
require('dotenv').config()
const request = require("request");
client.on("ready", () => {
var servers = client.guilds.array().map(g => g.game).join(',');
console.log(`[Cmd]Je suis prêt à vous mettre des coups de tatane ${client.users.size}`);
console.log(`
        ╔═════════════════════════════════╗
        ║-->  Bot Name : ${client.user.username}
        ╟─────────────────────────────────╢
        ║-->  Prefix   : ${config.prefix} 
        ╟─────────────────────────────────╢
        ║-->  Users    : ${client.users.size}
        ╟─────────────────────────────────╢
        ║-->  Bots     : ${client.users.filter(user => !user.client).size}
        ╟─────────────────────────────────╢
        ║-->  Channels : ${client.channels.size}
        ╟─────────────────────────────────╢
        ║-->  Guilds   : ${client.guilds.size}
        ╚═════════════════════════════════╝`);
client.user.setActivity('c!help | updating');
  

});

 /*
client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "📦 Minecraft");
  if(!playRole) return;
  if(newMember.user.presence.game && newMember.user.presence.game.name === "Minecraft") {
    newMember.addRole(playRole);
  }
  else if(!newMember.user.presence.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  }
});

*/

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);
  });
});



//■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■
//■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■
//■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■
//■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■


client.on("message", async message => {

 
 
  var randomColor = randomColor = ((1 << 24) * Math.random() | 0).toString(16);
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];

  if(message.content.indexOf(config.prefix) !== 0) return;
	
	
  let commandfile = client.commands.get(cmd.slice(config.prefix.length));
  if(commandfile) commandfile.run(client,message,args);

  if(message.author.bot) return;
  
      if(message.content.indexOf(config.prefix) !== 0) return;


  const embed2 = new RichEmbed()
  .setColor(randomColor)
  .setAuthor(`${cmd} ${args[1]}`)
  .setDescription(`
 :person_with_blond_hair: ${message.author.tag} - ${message.author.id}
 :satellite_orbital: ${message.guild.name} - ${message.guild.id}
 :house: ${message.channel.name} - ${message.channel.id}`)
  client.channels.get('535213319817134085').send(embed2)



   









//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    if(message.author.bot) return;
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    if(message.content.indexOf(config.prefix) !== 0) return;
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
   // const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  
    
  if(command === "ping") {

    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Le ping du bot est de ${m.createdTimestamp - message.createdTimestamp}ms. Ping de l'API ${Math.round(client.ping)}ms`);
  }
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

if(command === "setgame") {
const game = args.join(' ');
console.log(message.member.id)
if(message.member.id === '417977361011572747'){

client.user.setActivity(`c!help | ${game}`);
message.reply (`jeu défini en *${game}*`);
} else {
message.channel.send('Désolé cette commande est reservée à chaun14')
}
}


//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■


//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■



//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■     


if(command === "restart"){
  if(message.author.id == 417977361011572747) return message.reply(`seul chaun14 peut utiliser cette commande ${message.member.id}`);
  message.reply("reload");
  client.shutdown(true);
  global.bot.disconnect()
  client.destroy()
	client.exit();
  await message.channel.createMessage('Bye.')
  global.bot.disconnect()
  client.destroy()
	client.exit();
}
  else{
    
    }
    

/*

  client.on("presenceUpdate", (oldMember, newMember) => 
 let guild = newMember.guild;
 let playRole = guild.roles.find("name", "Minecraft");
 if(!playRole) return;

  if(newMember.user.presence.game && newMember.user.presence.game.name === "Minecraft") {
    newMember.addRole(playRole).catch(console.error);
    console.log("cc")
  } else if(!newMember.user.presence.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole).catch(console.error);
  }
});
  
*/


 /* 

   if(command === "ip") {
    if(!message.member.roles.some(r=>["Dictateur Hw", "Modérateur", "Recruteur", "[-AntiRaid-]", "FrozedMaking"].includes(r.name)) )
      return message.channel.send("Désolé mais seuls les membres de la team peuvent récuperer des IPs >:D");
    let member = args[0];
    if(!member) 
      return message.channel.send("Euh, pardon mais c'est l'ip de qui que je dois prendre?")
    var ipList = [
    "192.25.124.41",
    "192.227.104.182",
    "192.241.1.229",
    "192.236.76.142",
    "192.154.148.10",
    "192.4.118.181",
    "192.24.159.221",
    "192.35.74.33",
    "192.95.238.121",
    "192.95.238.121"
    ];
    var randomItem = ipList[Math.floor(Math.random()*ipList.length)];
    message.channel.send(`Ip de ${member} : ${randomItem}`);
     console.log(`Ip de ${member} : ${randomItem} demandée `);
     const embed2 = new RichEmbed()
  .setAuthor(`${command} ${args[0]}`)
  .setDescription(`
 :person_with_blond_hair: ${message.author.tag} - ${message.author.id}
 :satellite_orbital: ${message.guild.name} - ${message.guild.id}
 :house: ${message.channel.name} - ${message.channel.id}`)
 client.channels.get('535213319817134085').send(embed2)
}
  
  */
  
  
  




//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■


//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■



//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■9

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(command === "wolfie1625") {
  const embed2 = new RichEmbed()
  .setAuthor(`hw!${command} ${args[0]}`)
  .setDescription(`
 :person_with_blond_hair: ${message.author.tag} - ${message.author.id}
 :satellite_orbital: ${message.guild.name} - ${message.guild.id}
 :house: ${message.channel.name} - ${message.channel.id}`)
 client.channels.get('535213319817134085').send(embed2)
    const embed = new RichEmbed() // Se
    .setColor(0x3399ff)
    .setTitle("highway-mc.tk", "http://highway-mc.tk/")
    .setDescription("Investi dans la highway qui fais bcp de pub et qui organise des nombreux mdt. Mais aussi aime bien les roux des bois mais pas ceux des champs de tulipe.  Puis il a un amour éternel pour les druides péruvien et les écureuils. Pour finir Wolfie>matt")
    .setImage("https://cdn.discordapp.com/avatars/373463891025461249/b8f1149f76810b441fb56d5d7b54fff4.png?size=2048")
    .setFooter("HighWay bot by chaun14", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
     .setThumbnail("https://cdn.discordapp.com/avatars/373463891025461249/b8f1149f76810b441fb56d5d7b54fff4.png?size=2048")
     .setAuthor("Tout savoir sur wolfie1625", "http://highway-mc.tk/", "https://cdn.discordapp.com/avatars/373463891025461249/b8f1149f76810b441fb56d5d7b54fff4.png?size=2048")  
    message.channel.send(embed);
    };

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(command === "issou") {
  const embed2 = new RichEmbed()
  .setAuthor(`hw!${command} `)
  .setDescription(`
 :person_with_blond_hair: ${message.author.tag} - ${message.author.id}
 :satellite_orbital: ${message.guild.name} - ${message.guild.id}
 :house: ${message.channel.name} - ${message.channel.id}`)
 client.channels.get('535213319817134085').send(embed2)
    const embed = new RichEmbed()
    .setFooter("HighWay bot by chaun14", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
    .setImage("https://media1.tenor.com/images/0ca6f8a1d31646286b94671f0cd0f5a4/tenor.gif?itemid=7315327")
    message.channel.send(embed);
    console.log("[gif] --> issou");
}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(command === "ah") {
  const embed2 = new RichEmbed()
  .setAuthor(`hw!${command} `)
  .setDescription(`
 :person_with_blond_hair: ${message.author.tag} - ${message.author.id}
 :satellite_orbital: ${message.guild.name} - ${message.guild.id}
 :house: ${message.channel.name} - ${message.channel.id}`)
 client.channels.get('535213319817134085').send(embed2)
    const embed = new RichEmbed()
    .setFooter("HighWay bot by chaun14", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
    .setImage("https://cdn.discordapp.com/attachments/462902707624345611/483394769008066570/tenor.gif")
    message.channel.send(embed);
    console.log("[gif] --> ah");
}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(command === "ids") {
  const embed2 = new RichEmbed()
  .setAuthor(`hw!${command} `)
  .setDescription(`
 :person_with_blond_hair: ${message.author.tag} - ${message.author.id}
 :satellite_orbital: ${message.guild.name} - ${message.guild.id}
 :house: ${message.channel.name} - ${message.channel.id}`)
 client.channels.get('535213319817134085').send(embed2)
    const embed = new RichEmbed()
    .setFooter("HighWay bot by chaun14", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
    .setImage("https://image.ibb.co/h7bmZ9/issoudesecours_1.gif")
    message.channel.send(embed);
    console.log("[gif] --> issou de secours");
}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

if(command === "nop") {
  const embed2 = new RichEmbed()
  .setAuthor(`hw!${command} `)
  .setDescription(`
 :person_with_blond_hair: ${message.author.tag} - ${message.author.id}
 :satellite_orbital: ${message.guild.name} - ${message.guild.id}
 :house: ${message.channel.name} - ${message.channel.id}`)
 client.channels.get('535213319817134085').send(embed2)
    const embed = new RichEmbed()
    .setFooter("HighWay bot by chaun14", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
    .setImage("https://cdn.discordapp.com/attachments/462902707624345611/483394769448337408/tenor-1.gif")
    message.channel.send(embed);
    console.log("[gif] --> nop");
}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  if(command === "head") {
    const embed2 = new RichEmbed()
  .setAuthor(`hw!${command} `)
  .setDescription(`
 :person_with_blond_hair: ${message.author.tag} - ${message.author.id}
 :satellite_orbital: ${message.guild.name} - ${message.guild.id}
 :house: ${message.channel.name} - ${message.channel.id}`)
 client.channels.get('535213319817134085').send(embed2)
    const embed = new RichEmbed()
    .setFooter("HighWay bot by chaun14", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
    .setImage("https://media.giphy.com/media/MuADK8u81TzIf87UNN/giphy.gif")
    message.channel.send(embed);
    console.log("[gif] --> head");
}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(command === "projet") {
  const embed2 = new RichEmbed()
  .setAuthor(`hw!${command} `)
  .setDescription(`
 :person_with_blond_hair: ${message.author.tag} - ${message.author.id}
 :satellite_orbital: ${message.guild.name} - ${message.guild.id}
 :house: ${message.channel.name} - ${message.channel.id}`)
 client.channels.get('535213319817134085').send(embed2)
    const embed = new RichEmbed()
    .setFooter("HighWay bot by chaun14", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
    .setImage("https://i0.kym-cdn.com/photos/images/newsfeed/001/246/478/eac.gif")
    message.channel.send(embed);
    console.log("[gif] --> projet");
}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  if(command === "clap") {
    const embed2 = new RichEmbed()
  .setAuthor(`hw!${command} `)
  .setDescription(`
 :person_with_blond_hair: ${message.author.tag} - ${message.author.id}
 :satellite_orbital: ${message.guild.name} - ${message.guild.id}
 :house: ${message.channel.name} - ${message.channel.id}`)
 client.channels.get('535213319817134085').send(embed2)
    const embed = new RichEmbed()
    .setFooter("HighWay bot by chaun14", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
    .setImage("https://cdn.discordapp.com/attachments/463013852108292116/472722794103439370/giphy.gif")
    message.channel.send(embed);
    console.log("[gif] --> clap");
}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(command === "fun") {
  const embed2 = new RichEmbed()
  .setAuthor(`hw!${command}`)
  .setDescription(`
 :person_with_blond_hair: ${message.author.tag} - ${message.author.id}
 :satellite_orbital: ${message.guild.name} - ${message.guild.id}
 :house: ${message.channel.name} - ${message.channel.id}`)
 client.channels.get('535213319817134085').send(embed2)
const embed = new RichEmbed() // Se
.setColor(0x3399ff)
.setTitle("highway-mc.tk", "http://highway-mc.tk/")
.setDescription("visitez notre site [ici](http://highway-mc.tk)")
 
.setFooter("HighWay bot by chaun14", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
 .setThumbnail("https://cdn.discordapp.com/attachments/463013852108292116/479651432547483650/JPEG_20180721_004113.jpg")
 .setImage("https://cdn.discordapp.com/attachments/463013852108292116/479651432547483650/JPEG_20180721_004113.jpg")
 .setAuthor("Les commandes fun du HighWay_bot", "http://highway-mc.tk/", "https://cdn.discordapp.com/attachments/463013852108292116/479653492370178060/1534290347248.png")
 .addField("hw!projet", "en marche avec macron", false)
 .addField("hw!issou", "issou", false)
 .addField("hw!head", "se tape la tête", false)
 .addField("hw!ah", "Denis Brognart ", false)
 .addField("hw!ids", "Au secours (issou de secours) ", false)
 .addField("hw!clap", "tout est dans la commande ", true)
 .addField("toujours pas d'inspiration", "hw>all", true)
message.channel.send(embed);
}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(command === "tools") {
  const embed2 = new RichEmbed()
  .setAuthor(`hw!${command} `)
  .setDescription(`
 :person_with_blond_hair: ${message.author.tag} - ${message.author.id}
 :satellite_orbital: ${message.guild.name} - ${message.guild.id}
 :house: ${message.channel.name} - ${message.channel.id}`)
 client.channels.get('535213319817134085').send(embed2)
const embed = new RichEmbed() // Se
.setColor(0x3399ff)
.setTitle("highway-mc.tk", "http://highway-mc.tk/")
.setDescription("visitez notre site [ici](http://highway-mc.tk)")
 
.setFooter("HighWay bot by chaun14", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
 .setThumbnail("https://cdn.discordapp.com/attachments/463013852108292116/479651432547483650/JPEG_20180721_004113.jpg")
 .setAuthor("Les commandes utiles du HighWay_bot", "http://highway-mc.tk/", "https://cdn.discordapp.com/attachments/463013852108292116/479653492370178060/1534290347248.png")
 .addField("hw!kick @user <raison>", "*staff* | universel", false)
 .addField("hw!ban @user <raison>", "*staff* | notre marteau favori", false)
 .addField("hw!say <votre message>", "*staff* | Le bot répète vos bétises", false)
 .addField("hw!ping", "*membres* | Voyez la super co du bot", true)
 .addField("hw!poll <votre question>", "*staff* | petit sondage oklm", true)
 .addField("hw!tempmute @user <durée>", "*staff* | un petit tempmute trkl", false)
 .addField("hw!mute @user", "*staff* |  mute à durée indéterminée", false)
message.channel.send(embed);
}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  if(command === "8ball") {
    message.delete().catch();
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Pas de raisons fournies" 
  
     let randomText = Math.floor(Math.random() * 10);
     if(randomText === 0) message.channel.send("Oups je ne suis pas capable de répondre à ton Dilemme");
     if(randomText === 1) message.channel.send("Je pense plutôt que je suis d'accord");
     if(randomText === 2) message.channel.send("Non");
     if(randomText === 3) message.channel.send("oui");
     if(randomText === 4) message.channel.send("Je penche vers le non");
     if(randomText === 5) message.channel.send("why not?")
     if(randomText === 6) message.channel.send("UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 2)");
     if(randomText === 7) message.channel.send("��");
     if(randomText === 8) message.channel.send("Bien sûr");
     if(randomText === 9) message.channel.send("Bien évidemment");
     
  const embed2 = new RichEmbed()
  .setAuthor(`hw!${command} ${args[0]}`)
  .setDescription(`
 :person_with_blond_hair: ${message.author.tag} - ${message.author.id}
 :satellite_orbital: ${message.guild.name} - ${message.guild.id}
 :house: ${message.channel.name} - ${message.channel.id}`)
 client.channels.get('535213319817134085').send(embed2)
  }
  
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■





});
//■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■
//■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■
//■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■
//■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●■●
 

client.login(process.env.TOKEN)
	.then(function() {
		console.log("Authentification Complete! Highway");
	}, function(err) {
		console.log('Authentification Failed! Highway');
		console.log("Error During Authentication! Highway" + " ~ " + JSON.stringify(err));
	});
//●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
//●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
//●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
//●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  client.channels.get('535213472980402187').send(`[Guild] J'ai rejoint un serveur de random: ${guild.name} (id: ${guild.id}). Ce serveur a ${guild.memberCount} membres !`);
 
/*guild.channel.createInvite().then(invite => message.channels.get('535213472980402187').send(`Votre lien d'invitation : \n\nhttps://discord.gg/${invite.code}`))  
*/
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  client.channels.get('535213472980402187').send(`[Guild]J'ai quitté le serveur: ${guild.name} (id: ${guild.id})`);
 
});

client.on("message", (message) => {
 if(message.guild.id === '530686638016299038') return
const embed3 = new RichEmbed()
.setAuthor(`message!`)
.setDescription(`
:envelope: **"${message}"** par **${message.author.tag} | ${message.author.id}**
:satellite_orbital: ${message.guild.name} - ${message.guild.id}
:house: ${message.channel.name} - ${message.channel.id}`)
client.channels.get('535213239601070080').send(embed3)
console.log(`Message "${message}" par "${message.author.tag}" Dans le serveur "${message.guild.name}" "${message.guild.id}"`)
//client.channels.get('535213239601070080').send(`Message "${message}" par "${message.author.tag}" "${message.author.name}" Dans le serveur "${message.guild.name}" "${message.guild.id}"`)
});
//●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
//●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
//●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
//●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
/*
client.on('message', function(message){
  if(message.author.bot) return;
const bannedwords = ['TG', ' tg', 'Tg ', 'fdp', 'enculer', 'pute', 'Pute', 'iphone', 'leuleu', 'ftg', 'suce', 'Fdp', 'f d p', 'F D P', 't g ', 'Bite']
//const bannedwords = ['TG']
if(bannedwords.some(word => message.content.includes(word))){
  if(message.author.bot) return;
message.delete();
message.reply("Surveille ton langage 👀💋");
console.log ("auto censure");

}
})
*/
/*
client.on('message', message => {
 // const pub = ["https://discord.gg/", "https://discord.me/"];
  const pub = ["djjfjfjfjfjfjfjfjrjjrjrrjjrjrjrjrj"];
  if( pub.some(word => message.content.includes(word)) ) {
    message.reply("Désolé d'avoir supprimé ton message 🐙... Les liens d'invitations doivent se rendre dans le #pub, autrement, ce channel en serai envahi.");
    message.delete();  
  }
});
*/
/*
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === '📑chat-global');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

*/

/*
client.on("message", (message) => {
  console.log(`Message "${message}" par "${message.author.tag}" "${message.author}" Dans le serveur "${message.guild.name}" "${message.guild.id}"`)
});
*/

//●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
//●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
//●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
//●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●















client.on("message", async message => {

let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));
 
if (message.content.startsWith(config.prefix + "warn")){
message.delete();
if (message.channel.type === "dm") return;
 
var mentionned = message.mentions.users.first();
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
if(message.mentions.users.size === 0) {
  return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");
}else{
    const args = message.content.split(' ').slice(1);
    const mentioned = message.mentions.users.first();
    if (message.member.hasPermission('MANAGE_MESSAGES')){
      if (message.mentions.users.size != 0) {
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
          if (args.slice(1).length != 0) {
            const date = new Date().toUTCString();
            if (warns[message.guild.id] === undefined)
              warns[message.guild.id] = {};
            if (warns[message.guild.id][mentioned.id] === undefined)
              warns[message.guild.id][mentioned.id] = {};
            const warnumber = Object.keys(warns[message.guild.id][mentioned.id]).length;
            if (warns[message.guild.id][mentioned.id][warnumber] === undefined){
              warns[message.guild.id][mentioned.id]["1"] = {"raison": args.slice(1).join(' '), time: date, user: message.author.id};
            } else {
              warns[message.guild.id][mentioned.id][warnumber+1] = {"raison": args.slice(1).join(' '),
                time: date,
                user: message.author.id};
            }
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
message.delete();
            message.channel.send(':warning: | **'+mentionned.tag+' à été averti**');
message.mentions.users.first().send(`:warning: **Warn |** depuis le serveur **${message.guild.name}** donné par **${message.author.username}**\n\n**Raison:** ` + args.slice(1).join(' '))
          } else {
            message.channel.send("Erreur mauvais usage: "+config.prefix+"warn <user> <raison>");
          }
        } else {
          message.channel.send("Erreur mauvais usage: "+config.prefix+"warn <user> <raison>");
        }
      } else {
        message.channel.send("Erreur mauvais usage: "+config.prefix+"warn <user> <raison>");
      }
    } else {
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
    }
  }
}
 
 
 
  if (message.content.startsWith(config.prefix+"seewarns")||message.content===config.prefix+"seewarns") {
if (message.channel.type === "dm") return;
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
    const mentioned = message.mentions.users.first();
    const args = message.content.split(' ').slice(1);
    if (message.member.hasPermission('MANAGE_MESSAGES')){
      if (message.mentions.users.size !== 0) {
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
          try {
            if (warns[message.guild.id][mentioned.id] === undefined||Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
              message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
              return;
            }
          } catch (err) {
            message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
            return;
          }
          let arr = [];
          arr.push(`**${mentioned.tag}** a **`+Object.keys(warns[message.guild.id][mentioned.id]).length+"** warns :eyes:");
          for (var warn in warns[message.guild.id][mentioned.id]) {
            arr.push(`**${warn}** - **"`+warns[message.guild.id][mentioned.id][warn].raison+
            "**\" warn donné par **"+message.guild.members.find("id", warns[message.guild.id][mentioned.id][warn].user).user.tag+"** a/le **"+warns[message.guild.id][mentioned.id][warn].time+"**");
          }
          message.channel.send(arr.join('\n'));
        } else {
          message.channel.send("Erreur mauvais usage: "+config.prefix+"seewarns <user> <raison>");
          console.log(args);
        }
      } else {
        message.channel.send("Erreur mauvais usage: "+config.prefix+"seewarns <user> <raison>");
      }
    } else {
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
    }
  }
 
 
 
 
 
  if (message.content.startsWith(config.prefix+"deletewarns")||message.content===config.prefix+"deletewarns") {
if (message.channel.type === "dm") return;
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
   const mentioned = message.mentions.users.first();
    const args = message.content.split(' ').slice(1);
    const arg2 = Number(args[1]);
    if (message.member.hasPermission('MANAGE_GUILD')){
      if (message.mentions.users.size != 0) {
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){
          if (!isNaN(arg2)) {
            if (warns[message.guild.id][mentioned.id] === undefined) {
              message.channel.send(mentioned.tag+" n'a aucun warn");
              return;
            } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {
              message.channel.send("**:x: Ce warn n'existe pas**");
              return;
            }
            delete warns[message.guild.id][mentioned.id][arg2];
            var i = 1;
            Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){
              var val=warns[message.guild.id][mentioned.id][key];
              delete warns[message.guild.id][mentioned.id][key];
              key = i;
              warns[message.guild.id][mentioned.id][key]=val;
              i++;
            });
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
            if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
              delete warns[message.guild.id][mentioned.id];
            }
            message.channel.send(`Le warn de **${mentioned.tag}**\': **${args[1]}** a été enlevé avec succès!`);
            return;
          } if (args[1] === "tout") {
            delete warns[message.guild.id][mentioned.id];
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
            message.channel.send(`Les warns de **${mentioned.tag}** a été enlevé avec succès!`);
            return;
          } else {
            message.channel.send("Erreur mauvais usage: "+config.prefix+"clearwarns <utilisateur> <nombre>");
          }
        } else {
          message.channel.send("Erreur mauvais usage: "+config.prefix+"clearwarns <utilisateur> <nombre>");
        }
      } else {
       message.channel.send("Erreur mauvais usage: "+config.prefix+"clearwarns <utilisateur> <nombre>");
      }
    } else {
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
    }
 
  }
})


app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 200000);


//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
const yt = require('ytdl-core');
const tokens = require('./tokens.json');
let queue = {};

const commands = {
	'play': (msg) => {
		if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`Merci d'ajouter une musique à la Playlist avec **hw!add <url>**`);
		if (!msg.guild.voiceConnection) return commands.join(msg).then(() => commands.play(msg));
		if (queue[msg.guild.id].playing) return msg.channel.sendMessage('je suis déja utilisé');
		let dispatcher;
		queue[msg.guild.id].playing = true;

		console.log(queue);
		(function play(song) {
			console.log(song);
			if (song === undefined) return msg.channel.sendMessage("Je n'ai rien à interpreter").then(() => {
				queue[msg.guild.id].playing = false;
				msg.member.voiceChannel.leave();
			});
			msg.channel.sendMessage(`Joue: **${song.title}** demandé par: **${song.requester}**`);
			dispatcher = msg.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes : tokens.passes });
			let collector = msg.channel.createCollector(m => m);
			collector.on('message', m => {
				if (m.content.startsWith(config.prefix + 'pause')) {
					msg.channel.sendMessage('pause').then(() => {dispatcher.pause();});
				} else if (m.content.startsWith(config.prefix + 'resume')){
					msg.channel.sendMessage('resumed').then(() => {dispatcher.resume();});
				} else if (m.content.startsWith(config.prefix + 'skip')){
					msg.channel.sendMessage('skipped').then(() => {dispatcher.end();});
				} else if (m.content.startsWith('volume+')){
					if (Math.round(dispatcher.volume*50) >= 100) return msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.min((dispatcher.volume*50 + (2*(m.content.split('+').length-1)))/50,2));
					msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith('volume-')){
					if (Math.round(dispatcher.volume*50) <= 0) return msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.content.split('-').length-1)))/50,0));
					msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith(config.prefix + 'time')){
					msg.channel.sendMessage(`time: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);
				}
			});
			dispatcher.on('end', () => {
				collector.stop();
				play(queue[msg.guild.id].songs.shift());
			});
			dispatcher.on('error', (err) => {
				return msg.channel.sendMessage('error: ' + err).then(() => {
					collector.stop();
					play(queue[msg.guild.id].songs.shift());
				});
			});
		})(queue[msg.guild.id].songs.shift());
	},
	'join': (msg) => {
		return new Promise((resolve, reject) => {
			const voiceChannel = msg.member.voiceChannel;
			if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply('I couldn\'t connect to your voice channel...');
			voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
		});
	},
  
  'stop': (msg) => {
		return new Promise((resolve, reject) => {
			const voiceChannel = msg.member.voiceChannel;
			msg.member.voiceChannel.leave();
		});
	},
	'add': (msg) => {
		let url = msg.content.split(' ')[1];
		if (url == '' || url === undefined) return msg.channel.sendMessage(`You must add a YouTube video url, or id after ${tokens.prefix}add`);
		yt.getInfo(url, (err, info) => {
			if(err) return msg.channel.sendMessage('Invalid YouTube Link: ' + err);
			if (!queue.hasOwnProperty(msg.guild.id)) queue[msg.guild.id] = {}, queue[msg.guild.id].playing = false, queue[msg.guild.id].songs = [];
			queue[msg.guild.id].songs.push({url: url, title: info.title, requester: msg.author.username});
			msg.channel.sendMessage(`added **${info.title}** to the queue`);
		});
	},
	'queue': (msg) => {
		if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`Add some songs to the queue first with ${tokens.prefix}add`);
		let tosend = [];
		queue[msg.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Requested by: ${song.requester}`);});
		msg.channel.sendMessage(`__**${msg.guild.name}'s Music Queue:**__ Currently **${tosend.length}** songs queued ${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
	},

  'music': (msg) => {
		let tosend = ['```xl', config.prefix + 'join : "Join Voice channel of msg sender"',	config.prefix + 'add : "Add a valid youtube link to the queue"', tokens.prefix + 'queue : "Shows the current queue, up to 15 songs shown."', tokens.prefix + 'play : "Play the music queue if already joined to a voice channel"', '', 'the following commands only function while the play command is running:'.toUpperCase(), tokens.prefix + 'pause : "pauses the music"',	tokens.prefix + 'resume : "resumes the music"', tokens.prefix + 'skip : "skips the playing song"', tokens.prefix + 'time : "Shows the playtime of the song."',	'volume+(+++) : "increases volume by 2%/+"',	'volume-(---) : "decreases volume by 2%/-"',	'```'];
		msg.channel.sendMessage(tosend.join('\n'));
	},
	'reboot': (msg) => {
		if (msg.author.id == tokens.adminID) process.exit(); //Requires a node module like Forever to work.
	}
};


client.on('message', msg => {
	if (!msg.content.startsWith(config.prefix)) return;
	if (commands.hasOwnProperty(msg.content.toLowerCase().slice(config.prefix.length).split(' ')[0])) commands[msg.content.toLowerCase().slice(tokens.prefix.length).split(' ')[0]](msg);
});
  






























const zkbot = new Discord.Client();
zkbot.on("ready", () => {
  console.log(`${zkbot.user.username} pret `);
  zkbot.user.setActivity('Bot ZenKun ~help');
})
        


zkbot.on("message", async message => {
  //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      if(message.author.bot) return;
  //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      if(message.content.indexOf(config.zkprefix) !== 0) return;
  //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      const args = message.content.slice(config.zkprefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
  //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      if(command === "") {
          message.channel.send("fais ~help pour voir toute notre panoplie de commandes");
          message.delete();
        }
  //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■   
        
        if(command === "say") {
          const sayMessage = args.join(" ");
              if(sayMessage === "") {
        message.channel.send("il manque un truc... *(exemple: ~say je suis le meilleur des bots)*");}
     if(message.member.hasPermission("ADMINISTRATOR")) {
        message.delete().catch(O_o=>{});
        message.channel.send(sayMessage);
        console.log('Zk[say] --> '+ sayMessage);}
        else {
        message.reply("tu n'as pas la permission d'effectuer cette commande");
    console.log('Zk[say] un joueur à tenté de !say --> '+ sayMessage );
       }
      }



//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■  
      if(command === "userinfo") {
        const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
        let bot;
        if (member.user.bot === true) {
          bot = "Yes";
        } else {
          bot = "No";
        }

      if (!member) return message.reply("veuillez mentionner quelqun");
      const embed = new RichEmbed()
      .setColor(randomColor)
      .setFooter("KagamiBot by chaun14", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
      .setThumbnail(`${member.user.displayAvatarURL}`)
      .setAuthor(`${member.user.tag} (${member.id})`, `${member.user.displayAvatarURL}`)
      .addField("Nickname:", `${member.nickname !== null ? `Nickname: ${member.nickname}` : "Pas de nickname"}`, true)
      .addField("Bot?", `${bot}`, true)
      .addField("Serveur", `${bot}`, true)
      .addField("Jeu", `${member.user.presence.game ? `${member.user.presence.game.name}` : "Ne joue pas"}`, true)
      .addField("Rôles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Pas de rôles"}`, true)
      .addField("A rejoint le serveur", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
      .addField("Création du compte", `${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
    message.channel.send(embed);
    message.delete();
      }




  //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  if(command === "help") {
    const embed = new RichEmbed() // Se
    .setColor(randomColor)
    .setTitle("KagamiBot#0274", "https://animeparadis.xyz/")
    
    .setFooter("KagamiBot by chaun14", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
    .setThumbnail("https://i.imgur.com/csVLvX7.png")
    .setImage("https://i.imgur.com/csVLvX7.png")
    .setAuthor("Menu d'aide du KagamiBot", "https://animeparadis.xyz/", "https://i.imgur.com/csVLvX7.png")
    .addField("~help", "affiche ce menu", false)
    .addField("~say", "je répète toutes vos bétises", false)
    .addField("~ban @user votre raison", "Ban Hammer", false)
    .addField("~kick @user votre raison", "Un petit kick de qualité", false)
    .addField("~mute @user", "du scotch sur la bouche", false)
    .addField("~unmute @user", "arrachage du scotch", false)
    .addField("~clear <nombredemessages>", "Pour un nettoyage digne des plus grands", false)
    .addField("~ping", "pong 😂 Admirez ma connection", false)
    .addField("~userinfo", "Des petites infos sur les membres", false)
    .addField("infos complémentaires", `${zkbot.users.size} membres`, true)
    message.channel.send(embed);
    message.delete();
  }
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■9
  if(command === "mute"){
    console.log("mute");
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les droits pour muter un utilisateur !");
        message.delete().catch(O_o=>{});
        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.send("Merci d'entrer un utilisateur !");
        let role = message.guild.roles.find(r => r.name === "Muted");
        if(!role){
          try {
            role = await message.guild.createRole({
              name: "Muted",
              color:"#000000",
              permissions:[]
            });    message.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermissions(role, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
              });
            });
          } catch (e) {
            console.log(e.stack)
          }
        }
   
        if(toMute.roles.has(role.id)) return message.channel.send('Cet utilisateur est déjà muté !');
   
        await(toMute.addRole(role));
        message.channel.send("Je l'ai muté !");
   
        return;
      }
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(command === "unmute"){
    console.log("unmute");
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les droits pour demute un utilisateur !");
        message.delete().catch(O_o=>{});
        let toUnMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toUnMute) return message.channel.send("Merci d'entrer un utilisateur !");
let role = message.guild.roles.find(r => r.name === "Muted");
if(toUnMute.roles.has(role.id)) {

 message.channel.send('Cet utilisateur est maintenant capable de parler :wink:');
 toUnMute.removeRole(role);
 }
 else{
 message.channel.send("Mais cet utilisateur n'est pas mute !!!");
 }
}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(command === "ban") {
    if(!message.member.hasPermission("BAN_MEMBERS"))
      return message.reply("Désolé mais tu as pas la permission de le faire :eyes:");
    message.delete().catch(O_o=>{});
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Merci de mentionner un utilisateur");
    if(!member.bannable) 
      return message.reply("Désolé mais un problème de type problématique m'a empêché de ban l'individu récalcitrant. Ai-je la permission de ban? Ai-je mon rôle au dessus du membre en question?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Pas de raisons fournies";
    
    await message.mentions.users.first().send(`:warning: Désolé de te l'annoncer mais tu as été ban du serveur ${message.guild.name} Raison: ${reason}`);
    member.ban(reason)
    
      .catch(error => message.reply(`Désolé ${message.author}, je ne peut pas ban car: ${error}`));
      
    message.reply(`${member.user.tag} à été banni par le grand ${message.author.tag} Raison: ${reason}`);
  }
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(command === "kick") {
    if(!message.member.hasPermission("KICK_MEMBERS"))
      return message.reply("Désolé mais tu as pas la permission de le faire :eyes:");
    message.delete().catch(O_o=>{});
    let toKick = message.mentions.members.first() || message.guild.members.get(args[0]);
    message.args.send("Te as été ban")
    if(!toKick)
      return message.reply("Merci de mentionner un protagoniste");
    if(!toKick.kickable) 
      return message.reply("Désolé mais un problème de type problématique m'a empêché de kick l'individu récalcitrant. Ai-je la permission de kick? Ai-je mon rôle au dessus du membre en question?");
    let reason = args.slice(1).join(' ');
   
    if(!reason) reason = "pas de raison fournie";
    
    await toKick.kick(reason)
    message.toKick.send(`Vous avez été kick du serveur `)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${toKick.user.tag} a été kick avec force par ${message.author.tag} raison : ${reason}`);

  }
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■9
if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Le ping du bot est de ${m.createdTimestamp - message.createdTimestamp}ms. Ping de l'API ${Math.round(zkbot.ping)}ms`);
 }

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(command === "userinfo") {
  const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
  let bot;
  if (member.user.bot === true) {
    bot = "Oui";
  } else {
    bot = "Non";
  }


if (!member) return message.reply("veuillez mentionner quelqu'un");
const embed = new RichEmbed()
.setColor(randomColor)
.setFooter("bot by chaun14", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
.setThumbnail(`${member.user.displayAvatarURL}`)
.setAuthor(`${member.user.tag} (${member.id})`, `${member.user.displayAvatarURL}`)
.addField("Nickname:", `${member.nickname !== null ? `Nickname: ${member.nickname}` : "Pas de nickname"}`, true)
.addField("Bot?", `${bot}`, true)
.addField("Serveur", `${bot}`, true)
.addField("Jeu", `${member.user.presence.game ? `${member.user.presence.game.name}` : "Ne joue pas"}`, true)
.addField("Rôles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Pas de rôles"}`, true)
.addField("A rejoint le serveur", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
.addField("Création du compte", `${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
message.channel.send(embed);
message.delete();
}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(command === "clear") {

  const deleteCount = parseInt(args[0], 10);
  
  // Ooooh nice, combined conditions. <3
  if(!deleteCount || deleteCount < 2 || deleteCount > 100)
    return message.reply("donnez un nombre entre 2 et 100 de messages à supprimer");
  

  const fetched = await message.channel.fetchMessages({limit: deleteCount});
  message.channel.bulkDelete(fetched)
    .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(command === "8ball") {
  message.delete().catch();
  let reason = args.slice(1).join(' ');
  if(!reason) reason = "Pas de raisons fournies" 

   let randomText = Math.floor(Math.random() * 10);
   if(randomText === 0) message.channel.send("Oups je ne suis pas capable de répondre à ton Dilemme");
   if(randomText === 1) message.channel.send("Je pense plutôt que je suis d'accord");
   if(randomText === 2) message.channel.send("Non");
   if(randomText === 3) message.channel.send("oui");
   if(randomText === 4) message.channel.send("Je penche vers le non");
   if(randomText === 5) message.channel.send("why not?")
   if(randomText === 6) message.channel.send("Aucune idée 😢");
   if(randomText === 7) message.channel.send("❓❔");
   if(randomText === 8) message.channel.send("Bien sûr");
   if(randomText === 9) message.channel.send("Bien évidemment");
   
}

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
   if(command === "punch") {
    const embed = new RichEmbed()
    .setFooter("KagamiBot by chaun14", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
    .setImage("https://media.tenor.com/images/b561ad7377142adf365fe33f20fa45e8/tenor.gif")
    message.channel.send(embed);
    console.log("ZK[gif] --> punch");
}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(command === "slap") {

  const embed = new RichEmbed()
  .setFooter("KagamiBot by chaun14", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
  .setImage("https://media.giphy.com/media/jLeyZWgtwgr2U/giphy.gif")

  message.channel.send(embed);
  console.log("ZK[gif] --> slap");
}






})

zkbot.login(process.env.ZKTOKEN)

	.then(function() {
		console.log("Authentification Complete! ZKbot");
	}, function(err) {
		console.log('Authentification Failed! Zkbot');
		console.log("Error During Authentication! Zkbot" + " ~ " + JSON.stringify(err));
  });

 








































const apbot = new Discord.Client();
apbot.on("ready", () => {
  console.log(`${apbot.user.username} pret `);
  apbot.user.setActivity('AnimeParadis.xyz');
})

apbot.login(process.env.APTOKEN)

	.then(function() {
		console.log("Authentification Complete! APbot");
	}, function(err) {
		console.log('Authentification Failed! APbot');
		console.log("Error During Authentication! APbot" + " ~ " + JSON.stringify(err));
  });
  apbot.on("message", async message => {
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
        if(message.author.bot) return;
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
        if(message.content.indexOf(config.apprefix) !== 0) return;
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
        const args = message.content.slice(config.apprefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
        if(command === "") {
            message.channel.send("fais help pour voir toute notre panoplie de commandes");
            message.delete();
          }
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■   
          
          if(command === "say") {
            const sayMessage = args.join(" ");
                if(sayMessage === "") {
        message.channel.send("il manque un truc... *(exemple: ^^say je suis le meilleur des bots)*");}
       if(message.member.hasPermission("ADMINISTRATOR")) {
          message.delete().catch(O_o=>{});
          message.channel.send(sayMessage);
          console.log('AP[say] --> '+ sayMessage);}
          else {
          message.reply("tu n'as pas la permission d'effectuer cette commande");
      console.log('AP[say] un joueur à tenté de !say --> '+ sayMessage );
         }
        }

     //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■  
        if(command === "tempmute") {
          let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if(!tomute) return message.channel.send("Désolé mais j'ai beau avoir fouillé partout, je ne trouve pas l'utilisateur mentionné");
            if(message.member.hasPermission("MANAGE_MESSAGES")) {
            let muterole = message.guild.roles.find(`name`, "Muted");
            //start of create role
            if(!muterole){
              try{
                muterole = await message.guild.createRole({
                  name: "Muted",
                  color: "#000000",
                  permissions:[]
                })
                message.guild.channels.forEach(async (channel, id) => {
                  await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                  });
                });
              }catch(e){
                console.log(e.stack);
              }
            }
            //end of create role
            let mutetime = args[1];
            if(!mutetime) return message.channel.send("Merci d'indiquer une durée de mute valide");
          
            await(tomute.addRole(muterole.id));
            message.channel.send(`<@${tomute.id}> sera mute pendant ${ms(ms(mutetime))}`);
            console.log(`[mute] --> ${tomute} a été mute pendant ${mutetime} par ${message.author}`);
            message.delete();
          
            setTimeout(function(){
              tomute.removeRole(muterole.id);
              message.channel.send(`<@${tomute.id}> a été enfin unmute`);
              console.log(`[mute] --> ${tomute} a été unmute auto`);
            }, ms(mutetime));
            }
          else{
          return message.channel.send("Tu as pas la permission, dommage pour toi");
          }
          
          //end of module
          }
          
          
          //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
          
          if(command === "poll") {
          if(message.member.hasPermission("MANAGE_GUILD")) { 
          if(!args[0]) return message.channel.send("la syntaxe de cette commande est hw!poll <sujet>");
          const pollEmbed = new RichEmbed() 
          .setColor(0xffffff)
          .setFooter("AnimeParadis.xyz", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
          .setDescription(args.join(' '))
          .setTitle(`Sondage demandé par ${message.author.username}`)
          let msg = await message.channel.send(pollEmbed);
          
          await msg.react('👍');
          await msg.react('👎');
          await msg.react('🤷');  
          message.delete();
          }
          else{
          message.channel.send("Vous n'avez pas les droits pour exécuter cette commande");
          }
          }

          //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
          if(command === "mute"){
              console.log("mute");
                  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les droits pour muter un utilisateur !");
                  message.delete().catch(O_o=>{});
                  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
                  if(!toMute) return message.channel.send("Merci d'entrer un utilisateur !");
                  var role = message.guild.roles.find(role => role.name === 'Muted');
                  if(!role){
                    try {
                      role = await message.guild.createRole({
                        name: "Muted",
                        color:"#000000",
                        permissions:[]
                      });    message.guild.channels.forEach(async (channel, id) => {
                        await channel.overwritePermissions(role, {
                          SEND_MESSAGES: false,
                          ADD_REACTIONS: false
                        });
                      });
                    } catch (e) {
                      console.log(e.stack)
                    }
                  }
             
                  if(toMute.roles.has(role.id)) return message.channel.send('Cet utilisateur est déjà muté !');
             
                  await(toMute.addRole(role));
                  message.channel.send("Je l'ai muté !");
             
                  return;
                }
          //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
          if(command === "unmute"){
              console.log("unmute");
                  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les droits pour demute un utilisateur !");
                  message.delete().catch(O_o=>{});
                  let toUnMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
                  if(!toUnMute) return message.channel.send("Merci d'entrer un utilisateur !");
          let role = message.guild.roles.find(r => r.name === "Muted");
          if(toUnMute.roles.has(role.id)) {
          
           message.channel.send('Cet utilisateur est maintenant capable de parler :wink:');
           toUnMute.removeRole(role);
           }
           else{
           message.channel.send("Mais cet utilisateur n'est pas mute !!!");
           }
          }
          //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
          if(command === "ban") {
              if(!message.member.hasPermission("BAN_MEMBERS"))
                return message.reply("Désolé mais tu as pas la permission de le faire :eyes:");
              message.delete().catch(O_o=>{});
              let member = message.mentions.members.first();
              if(!member)
                return message.reply("Merci de mentionner un utilisateur");
              if(!member.bannable) 
                return message.reply("Désolé mais un problème de type problématique m'a empêché de ban l'individu récalcitrant. Ai-je la permission de ban? Ai-je mon rôle au dessus du membre en question?");
          
              let reason = args.slice(1).join(' ');
              if(!reason) reason = "Pas de raisons fournies";
              
              await message.mentions.users.first().send(`:warning: Désolé de te l'annoncer mais tu as été ban du serveur ${message.guild.name} Raison: ${reason}`);
              member.ban(reason)
              
                .catch(error => message.reply(`Désolé ${message.author}, je ne peut pas ban car: ${error}`));
                
              message.reply(`${member.user.tag} à été banni par le grand ${message.author.tag} Raison: ${reason}`);
            }
          //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
          if(command === "kick") {
              if(!message.member.hasPermission("KICK_MEMBERS"))
                return message.reply("Désolé mais tu as pas la permission de le faire :eyes:");
              message.delete().catch(O_o=>{});
              let toKick = message.mentions.members.first() || message.guild.members.get(args[0]);
              message.args.send("Te as été ban")
              if(!toKick)
                return message.reply("Merci de mentionner un protagoniste");
              if(!toKick.kickable) 
                return message.reply("Désolé mais un problème de type problématique m'a empêché de kick l'individu récalcitrant. Ai-je la permission de kick? Ai-je mon rôle au dessus du membre en question?");
              let reason = args.slice(1).join(' ');
             
              if(!reason) reason = "pas de raison fournie";
              
              await toKick.kick(reason)
              message.toKick.send(`Vous avez été kick du serveur `)
                .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
              message.reply(`${toKick.user.tag} a été kick avec force par ${message.author.tag} raison : ${reason}`);
          
            }
          //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■9
          if(command === "ping") {
              // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
              // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
              const m = await message.channel.send("Ping?");
              m.edit(`Pong! Le ping du bot est de ${m.createdTimestamp - message.createdTimestamp}ms. Ping de l'API ${Math.round(apbot.ping)}ms`);
           }

  
          //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
          if(command === "issou") {
              const embed = new RichEmbed()
              .setFooter("HighWay bot by chaun14", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
              .setImage("https://media1.tenor.com/images/0ca6f8a1d31646286b94671f0cd0f5a4/tenor.gif?itemid=7315327")
              message.channel.send(embed);
              console.log("[gif] --> issou");
          }
          //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
          if(command === "ah") {
              const embed = new RichEmbed()
              .setFooter("bot by chaun14 for AnimeParadis.xyz", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
              .setImage("https://cdn.discordapp.com/attachments/462902707624345611/483394769008066570/tenor.gif")
              message.channel.send(embed);
              console.log("[gif] --> ah");
          }
          //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
          if(command === "ids") {
              const embed = new RichEmbed()
              .setFooter("bot by chaun14 for AnimeParadis.xyz", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
              .setImage("https://image.ibb.co/h7bmZ9/issoudesecours_1.gif")
              message.channel.send(embed);
              console.log("[gif] --> issou de secours");
          }
          //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
          
          if(command === "nop") {
              const embed = new RichEmbed()
              .setFooter("bot by chaun14 for AnimeParadis.xyz", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
              .setImage("https://cdn.discordapp.com/attachments/462902707624345611/483394769448337408/tenor-1.gif")
              message.channel.send(embed);
              console.log("[gif] --> nop");
          }
          //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
            if(command === "head") {
              const embed = new RichEmbed()
              .setFooter("bot by chaun14 for AnimeParadis.xyz", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
              .setImage("https://media.giphy.com/media/MuADK8u81TzIf87UNN/giphy.gif")
              message.channel.send(embed);
              console.log("[gif] --> head");
          }
          //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
          if(command === "projet") {
              const embed = new RichEmbed()
              .setFooter("bot by chaun14 for AnimeParadis.xyz", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
              .setImage("https://i0.kym-cdn.com/photos/images/newsfeed/001/246/478/eac.gif")
              message.channel.send(embed);
              console.log("[gif] --> projet");
          }
          //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
            if(command === "clap") {
              const embed = new RichEmbed()
              .setFooter("bot by chaun14 for AnimeParadis.xyz", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
              .setImage("https://cdn.discordapp.com/attachments/463013852108292116/472722794103439370/giphy.gif")
              message.channel.send(embed);
              console.log("[gif] --> clap");
          }
          //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
          if(command === "help") {
            const embed = new RichEmbed()
              .setColor(0x3399ff)
              .addField("ap!fun", "des petits gifs", false)

              message.channel.send(embed);
          }



          if(command === "fun") {
          const embed = new RichEmbed() // Se
          .setColor(0x3399ff)
          .setTitle("animeparadis.xyz", "http://animeparadis.xyz/")
          .setDescription("visitez notre site [ici](http://animeparadis.xyz)")
           
          .setFooter("bot by chaun14 for AnimeParadis.xyz", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
           .setThumbnail("https://cdn.discordapp.com/attachments/463013852108292116/479651432547483650/JPEG_20180721_004113.jpg")
           .setImage("https://cdn.discordapp.com/attachments/463013852108292116/479651432547483650/JPEG_20180721_004113.jpg")
           .setAuthor("Les commandes fun du bot animeparadis", "http://animeparadis.xyz/", "https://cdn.discordapp.com/attachments/463013852108292116/479653492370178060/1534290347248.png")
           .addField("projet", "en marche avec macron", false)
           .addField("issou", "issou", false)
           .addField("head", "se tape la tête", false)
           .addField("ah", "Denis Brognart ", false)
           .addField("ids", "Au secours (issou de secours) ", false)
           .addField("clap", "tout est dans la commande ", true)
          message.channel.send(embed);
          }
          //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
          if(command === "tools") {
          const embed = new RichEmbed() // Se
          .setColor(0x3399ff)
          .setTitle("highway-mc.tk", "http://highway-mc.tk/")
          .setDescription("visitez notre site [ici](http://highway-mc.tk)")
           
          .setFooter("bot by chaun14 for AnimeParadis.xyz", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
           .setThumbnail("https://cdn.discordapp.com/attachments/463013852108292116/479651432547483650/JPEG_20180721_004113.jpg")
           .setAuthor("Les commandes utiles du HighWay_bot", "http://highway-mc.tk/", "https://cdn.discordapp.com/attachments/463013852108292116/479653492370178060/1534290347248.png")
           .addField("kick @user <raison>", "*staff* | universel", false)
           .addField("ban @user <raison>", "*staff* | notre marteau favori", false)
           .addField("say <votre message>", "*staff* | Le bot répète vos bétises", false)
           .addField("ping", "*membres* | Voyez la super co du bot", true)
           .addField("poll <votre question>", "*staff* | petit sondage oklm", true)
           .addField("tempmute @user <durée>", "*staff* | un petit tempmute trkl", false)
           .addField("mute @user", "*staff* |  mute à durée indéterminée", false)
          message.channel.send(embed);

           //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
          }
          if(command === "userinfo") {
            const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
            let bot;
            if (member.user.bot === true) {
              bot = "Oui";
            } else {
              bot = "Non";
            }
    

          if (!member) return message.reply("veuillez mentionner quelqu'un");
          const embed = new RichEmbed()
          .setColor(randomColor)
          .setFooter("bot by chaun14 for AnimeParadis.xyz", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
          .setThumbnail(`${member.user.displayAvatarURL}`)
          .setAuthor(`${member.user.tag} (${member.id})`, `${member.user.displayAvatarURL}`)
          .addField("Nickname:", `${member.nickname !== null ? `Nickname: ${member.nickname}` : "Pas de nickname"}`, true)
          .addField("Bot?", `${bot}`, true)
          .addField("Serveur", `${bot}`, true)
          .addField("Jeu", `${member.user.presence.game ? `${member.user.presence.game.name}` : "Ne joue pas"}`, true)
          .addField("Rôles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Pas de rôles"}`, true)
          .addField("A rejoint le serveur", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
          .addField("Création du compte", `${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
        message.channel.send(embed);
        message.delete();
          }
    
    
    
    
   
          //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
            if(command === "8ball") {
              message.delete().catch();
              let reason = args.slice(1).join(' ');
              if(!reason) reason = "Pas de raisons fournies" 
            
               let randomText = Math.floor(Math.random() * 10);
               if(randomText === 0) message.channel.send("Oups je ne suis pas capable de répondre à ton Dilemme");
               if(randomText === 1) message.channel.send("Je pense plutôt que je suis d'accord");
               if(randomText === 2) message.channel.send("Non");
               if(randomText === 3) message.channel.send("oui");
               if(randomText === 4) message.channel.send("Je penche vers le non");
               if(randomText === 5) message.channel.send("why not?")
               if(randomText === 6) message.channel.send("UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 2)");
               if(randomText === 7) message.channel.send("��");
               if(randomText === 8) message.channel.send("Bien sûr");
               if(randomText === 9) message.channel.send("Bien évidemment");
               
            }
            
          //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      })











































































