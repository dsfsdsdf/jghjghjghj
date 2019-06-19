const { Discord, RichEmbed} = require('discord.js');
const snekfetch = require('snekfetch');

module.exports.run = async (bot, message, args) => {

    const pseudo = args[1]
    message.channel.startTyping
    //if (args[0] === "") return message.reply("Tu n'as pas spécifié de pseudo minecraft");
    snekfetch.get(`http://www.lordmorgoth.tk/API/stats?periode=toujours&joueur=${pseudo}&mode=rush&key=${process.env.FCKEY}`).then(r => {    console.log(r.body)
   
   
    console.log(r.body.error)
    var exitcode = r.body.exit_code
    console.log(`Exitcode: ${exitcode}`)
  if (exitcode === 0) {
        console.log("pas d'erreur")
        const embed2 = new RichEmbed()
        .setColor(0x3399ff)
            .addField("Jeu", `${r.body.mode_jeu}`)
            .addField("classement total du serveur", `${r.body.rang}`)
            .addField("Points", `${r.body.data.points}`)
            .addField("Temps de jeu", `${r.body.data.temps_jeu} minutes`)
            .addField("Parties jouées | Victoires | défaites", `${r.body.data.parties} | ${r.body.data.victoires} | ${r.body.data.defaites} soit ${r.body.stats.winrate}% de victoires `)
            .addField("kills | morts", `${r.body.data.kills} | ${r.body.data.morts} soit un ratio de ${r.body.stats.kd} `)
            .addField("Lits détruits", `${r.body.data.lits_detruits} soit ${r.body.stats.lits_partie} lits par partie `)
            .setAuthor(`Voici les statistiques funcraft de ${r.body.pseudo}`, `https://i.imgur.com/IhU9HyT.jpg`, `https://funcraft.net/`)
            .setImage("https://i.imgur.com/43Huf1S.png")
            .setFooter("HighWay bot by chaun14 - API: www.lordmorgoth.tk", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
            .setThumbnail(" https://cdn.discordapp.com/attachments/463013852108292116/479653492370178060/1534290347248.png")
        message.channel.send(embed2);
       
  }
  if (r.body.exit_code === 1) {
    const embed = new RichEmbed()
        .setDescription("Merci d'indiquer un pseudo")
        .setColor(0xFE0000)
        message.channel.send(embed)
    }
    if (r.body.exit_code === 4) {
    const embed = new RichEmbed()
        .setDescription("Joueur introuvable sur la base de donnée Funcraft")
        .setColor(0xFE0000)
        message.channel.send(embed)
    }
    if (r.body.exit_code === 5) {
      const embed = new RichEmbed()
      .setDescription("Erreur interne, pour plus d'information contactez chaun14")
      .setColor(0xFE0000)
      message.channel.send(embed)
  }
    if (r.body === "jdj") {
        message.reply("Impossible de communiquer avec le serveur de statistiques")
    }
    message.channel.stopTyping
    
  })
  
      }
     
  


  module.exports.help = {
    name: "rush"
  }
