const { Discord, RichEmbed} = require('discord.js');
const config = require("./config.json");

module.exports.run = async (bot, message, args) => {
  console.log("ip");

  const embed = new RichEmbed()
  .setColor(0x3399ff)
  .setTitle("chaun14.fr", "https://chaun14.fr/")
  .setDescription("visitez mon site [ici](http://chaun14.fr)")
   
  .setFooter("Chaun bot bot by chaun14#4379", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
   .setThumbnail("https://cdn.discordapp.com/attachments/463013852108292116/479651432547483650/JPEG_20180721_004113.jpg")
   .setImage("https://cdn.discordapp.com/attachments/463013852108292116/479651432547483650/JPEG_20180721_004113.jpg")
   .setAuthor("Menu d'aide du Chaun_bot", "http://highway-mc.tk/", "https://cdn.discordapp.com/attachments/463013852108292116/479653492370178060/1534290347248.png")
   .addField(`${config.prefix}help`, "affiche ce menu", false)
   .addField(`${config.prefix}fun`, "les commandes censées être fun", false)
   .addField(`${config.prefix}tools`, "affichez le couteau suisse du serveur", false)
   .addField(`pas d'inspiration`, "🐑", true)
  message.channel.send(embed);
  }




module.exports.help = {
    name: "help"
  }
