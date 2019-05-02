const { Discord, RichEmbed} = require('discord.js');


module.exports.run = async (bot, message, args) => {
        const m = await message.channel.send("Ping?");
          m.edit(`Pong! Le ping du bot est de ${m.createdTimestamp - message.createdTimestamp}ms. Ping de l'API ${Math.round(client.ping)}ms`);
       }
  module.exports.help = {
    name: "ping"
  }