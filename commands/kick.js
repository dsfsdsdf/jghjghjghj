const { Discord, RichEmbed} = require('discord.js');


module.exports.run = async (bot, message, args) => {
        if(!message.member.hasPermission("KICK_MEMBERS"))
          return message.reply("Désolé mais tu as pas la permission de le faire :eyes:");
        message.delete().catch(O_o=>{});
        let toKick = message.mentions.members.first() || message.guild.members.get(args[2]);
        if(!toKick)
          return message.reply("Merci de mentionner un protagoniste");
        if(!toKick.kickable) 
          return message.reply("Désolé mais un problème de type problématique m'a empêché de kick l'individu récalcitrant. Ai-je la permission de kick? Ai-je mon rôle au dessus du membre en question?");
        let reason = args.slice(1).join(' ');
       
        if(!reason) reason = "pas de raison fournie";
        
        
        message.mentions.users.first().send(`:warning: Désolé de te l'annoncer mais tu as été kick du serveur ${message.guild.name} Raison: ${reason}`);
        toKick.kick(reason)

          .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
        message.reply(`${toKick.user.tag} à été kick avec force par ${message.author.tag} raison : ${reason}`);
   
    }
      
  module.exports.help = {
    name: "kick"
  }