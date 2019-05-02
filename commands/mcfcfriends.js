const { Discord, RichEmbed} = require('discord.js');
const snekfetch = require('snekfetch');

module.exports.run = async (bot, message, args) => {

  const pseudo = args[1]
 
  snekfetch.get(`http://www.lordmorgoth.tk/API/infos?joueur=${pseudo}`).then(r => {    console.log(r.body)
console.log(r.body.error)
  var exitcode = r.body.exit_code
  console.log(`Exitcode: ${exitcode}`)
  
  
  if (exitcode === 0) { 
  console.log("pas d'erreur")
  
  var array = r.body.amis
  console.log(array)
message.channel.send(`__Voici la liste d'amis de **${pseudo}**__`)
  array.forEach(function(item, index, array) {
console.log(item, index);
message.channel.send(`-${item.nom}`)

});
  
  message.channel.send('```  ```')
}
if (r.body.exit_code === 1) {
const embed = new RichEmbed()
  .setDescription("Merci d'indiquer un pseudo d'un joueur funcraft")
  .setColor(0xFE0000)
  message.channel.send(embed)
}
  })
 
}

       
  

  module.exports.help = {
    name: "fcfriends"
  }