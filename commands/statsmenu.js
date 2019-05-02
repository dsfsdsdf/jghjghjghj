const { Discord, RichEmbed} = require('discord.js');
module.exports.run = async (bot, message, args) => {

    const embed = new RichEmbed()
  .setAuthor(`Les commandes de statistiques`, `https://i.imgur.com/IhU9HyT.jpg`, ``)
    .setImage("https://i.imgur.com/43Huf1S.png")
    .setFooter("HighWay bot by chaun14", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
    .setThumbnail(`https://i.imgur.com/IhU9HyT.jpg`)
    .setColor(0xF6DD04)
  
  .addField("Funcraft", `
  **hw!rush pseudofc** --> *stats rush fc*
  **hw!skywars pseudofc** --> *stats skywars fc*
  **hw!fcuserinfo pseudofc** --> *des infos sur un pseudo*`)
  .addField("Minecraft", `hw!mcapistatus --> donne l'états des serveur mojang
  hw!mcpseudo pseudomc --> donne les anciens pseudo d'un compte minecraft premium
  `)
  message.channel.send(embed); 
  }

  module.exports.help = {
    name: "stats"
  }