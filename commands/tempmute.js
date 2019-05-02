const { Discord, RichEmbed} = require('discord.js');
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
          if(!tomute) return message.channel.send("Désolé mais j'ai beau avoir fouillé partout, je ne trouve pas l'utilisateur mentionné");
          if(message.member.hasPermission("MANAGE_MESSAGES")) {
          let muterole = message.guild.roles.find(role => role.name === 'Muted');
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
          let mutetime = args[2];
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
      
        }
  


  module.exports.help = {
    name: "tempmute"
  }