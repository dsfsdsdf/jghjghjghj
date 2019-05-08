const { Discord, RichEmbed} = require('discord.js');
const iplocate = require("node-iplocate");

module.exports.run = async (bot, message, args) => {

console.log(`iplocating ${args[1]}`);
var randomColor = randomColor = ((1 << 24) * Math.random() | 0).toString(16);

iplocate(args[1]).then(function(results) {
    console.log("IP Address: " + results.ip);
    console.log("Country: " + results.country + " (" + results.country_code + ")");
    console.log("Continent: " + results.continent);
    console.log("Organisation: " + results.org + " (" + results.asn + ")");

    const embed = new RichEmbed()
    .setAuthor(`Informations sur l'ip ${results.ip}`)
    .setDescription("")
    .addField("Pays: ", results.country + " (" + results.country_code + ")")
    .addField(":earth_americas: Continent: ", results.continent)
    .addField("Propriétaire: ", results.org + " (" + results.asn + ")")
    .setColor(randomColor)
    
    message.channel.send(embed);


}).catch(function(error){
    console.log(error)
    const embed = new RichEmbed()
    .setAuthor(`:x: Erreur`)
    .setDescription("Il y a eu un problème")
    .addField("Détail de l'erreur :", error)
    .setColor(0xf44242)
    
    message.channel.send(embed);

})








    
    
}

      

  module.exports.help = {
    name: "iplocate"
  }