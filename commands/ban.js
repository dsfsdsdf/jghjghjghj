const { Discord, RichEmbed} = require('discord.js');


module.exports.run = async (bot, message, args) => {

    console.log("ban");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les droits pour demute un utilisateur !");
    message.delete().catch(O_o=>{});
    let toBan = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toBan) return message.channel.send("Merci d'entrer un utilisateur !");


        if(!toBan.bannable) 
          return message.reply("Désolé mais un problème de type problématique m'a empêché de ban l'individu récalcitrant. Ai-je la permission de ban? Ai-je mon rôle au dessus du membre en question?");
    
        let reason = args.slice(3).join(' ');
        if(!reason) reason = "Pas de raisons fournies";
        
        await message.mentions.users.first().send(`:warning: Désolé de te l'annoncer mais tu as été ban du serveur ${message.guild.name} Raison: ${reason}`);
        member.ban(reason)
        
          .catch(error => message.reply(`Désolé ${message.author}, je ne peut pas ban car: ${error}`));
          
        message.reply(`${member.user.tag} à été banni par le grand ${message.author.tag} Raison: ${reason}`);
      }

  module.exports.help = {
    name: "ban"
  }