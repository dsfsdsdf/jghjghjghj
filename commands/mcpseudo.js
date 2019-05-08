const { Discord, RichEmbed} = require('discord.js');
const snekfetch = require('snekfetch');
const moment = require("moment");

module.exports.run = async (bot, message, args) => {

        const pseudo = args[1]

        if (pseudo === undefined ){
          const embed = new RichEmbed()
          .setDescription("Merci d'indiquer un pseudo")
          .setColor(0xFE0000)
          message.channel.send(embed)
        }
        if (pseudo === undefined ) return 
          
      

       
      //get le uuid a partir du pseudo
       snekfetch.get(`https://api.mojang.com/users/profiles/minecraft/${pseudo}`).then(r => {    
            var uuid = r.body.id
            if (uuid === undefined ) {
                  const embed = new RichEmbed()
                  .setDescription("Merci d'indiquer un pseudo d'un compte minecraft valide")
                  .setColor(0xFE0000)
                  message.channel.send(embed)
            }
           if (uuid === undefined ) return


       //get les old name en array a partir de l'uuid
       snekfetch.get(`https://api.mojang.com/user/profiles/${uuid}/names`).then(r => {   
        let embed = new RichEmbed()
          .setTitle(`Liste des pseudos de ${pseudo}`)
          .setFooter('blabla')
          .setColor('GREEN');
          
        r.body.forEach(item => {
          let content = "Pseudo d'origine";
          if (item.changedToAt !== undefined) {
            content = `Changé le ${moment(item.changedToAt).format('DD/MM/YYYY')}`;
          }

          embed.addField(item.name, content, true);
        });

        message.channel.send(embed);    
        })
       })
      
}
       
  

  module.exports.help = {
    name: "mcpseudo"
  }