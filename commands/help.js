const { Discord, RichEmbed} = require('discord.js');
module.exports.run = async (bot, message, args) => {
  console.log("ip");

  const embed = new RichEmbed()
  .setColor(0x3399ff)
  .setTitle("highway-mc.tk", "http://highway-mc.tk/")
  .setDescription("visitez notre site [ici](http://highway-mc.tk)")
   
  .setFooter("HighWay bot by chaun14", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
   .setThumbnail("https://cdn.discordapp.com/attachments/463013852108292116/479651432547483650/JPEG_20180721_004113.jpg")
   .setImage("https://cdn.discordapp.com/attachments/463013852108292116/479651432547483650/JPEG_20180721_004113.jpg")
   .setAuthor("Menu d'aide du HighWayBot", "http://highway-mc.tk/", "https://cdn.discordapp.com/attachments/463013852108292116/479653492370178060/1534290347248.png")
   .addField("hw!help", "affiche ce menu", false)
   .addField("hw!fun", "les commandes censées être fun", false)
   .addField("hw!tools", "affichez le couteau suisse du serveur", false)
   .addField("hw!membres", "pour tout savoir sur nous autres :person_with_blond_hair: ", true)
   .addField("pas d'inspiration", "hw>all", true)
  message.channel.send(embed);
  }




module.exports.help = {
    name: "help"
  }