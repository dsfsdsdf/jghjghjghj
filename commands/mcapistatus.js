const { Discord, RichEmbed} = require('discord.js');
const snekfetch = require('snekfetch');

module.exports.run = async (bot, message, args) => {

      snekfetch.get(`https://status.mojang.com/check`).then(r => {    console.log(r.body)
      const embed = new RichEmbed()
      .setAuthor(`Voici l'état des serveur d'api minecraft`, `https://i.imgur.com/IhU9HyT.jpg`, `https://status.mojang.com/`)
      .setDescription("green=✅ yellow=⚠ red=❌")
      .addField("minecraft.net", `${r.body[0]["minecraft.net"]}`)
      .addField("session.minecraft.net", `${r.body[1]["session.minecraft.net"]}`)
      .addField("account.mojang.com", `${r.body[2]["account.mojang.com"]}`)
      .addField("authserver.mojang.com", `${r.body[3]["authserver.mojang.com"]}`)
      .addField("sessionserver.mojang.com", `${r.body[4]["sessionserver.mojang.com"]}`)
      .addField("api.mojang.com", `${r.body[5]["api.mojang.com"]}`)
      .addField("textures.minecraft.net", `${r.body[6]["textures.minecraft.net"]}`)
      .addField("mojang.com", `${r.body[7]["mojang.com"]}`)
      
      message.channel.send(embed);
      
      
      })
      }
      
  

  module.exports.help = {
    name: "mcapistatus"
  }