const { Discord, RichEmbed} = require('discord.js');


module.exports.run = async (bot, message, args) => {

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
     console.log("non mute")
     }
    
    }

  module.exports.help = {
    name: "unmute"
  }