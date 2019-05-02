const { Discord, RichEmbed} = require('discord.js');


module.exports.run = async (bot, message, args) => {
          console.log("mute");
              if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les droits pour muter un utilisateur !");
              message.delete().catch(O_o=>{});
              let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
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


  module.exports.help = {
    name: "mute"
  }