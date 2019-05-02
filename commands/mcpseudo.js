const { Discord, RichEmbed} = require('discord.js');
const snekfetch = require('snekfetch');

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
       snekfetch.get(`https://api.mojang.com/users/profiles/minecraft/${pseudo}`).then(r => {    console.log(r.body)
       var uuid = r.body.id
       if (uuid === undefined ) {
        const embed = new RichEmbed()
        .setDescription("Merci d'indiquer un pseudo d'un compte minecraft valide")
        .setColor(0xFE0000)
        message.channel.send(embed)
       }
       if (uuid === undefined ) return
       //get les old name en array a partir de l'uuid
       snekfetch.get(`https://api.mojang.com/user/profiles/${uuid}/names`).then(r => {    console.log(r.body)
       var array = r.body
        console.log(array)
      message.channel.send("__Voici la liste des anciens pseudos de__ `"+`${pseudo}`+"`")
        array.forEach(function(item, index, array) {
      console.log(item, index);
      message.channel.send(`-${item.name}`)
        })
        message.channel.send('```  ```')
        })
        })
      
      }
       
  

  module.exports.help = {
    name: "mcpseudo"
  }