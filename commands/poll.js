const { Discord, RichEmbed} = require('discord.js');


module.exports.run = async (bot, message, args) => {
        var randomColor = randomColor = ((1 << 24) * Math.random() | 0).toString(16);
        if(message.member.hasPermission("MANAGE_GUILD")) { 
        if(!args[0]) return message.channel.send("la syntaxe de cette commande est hw!poll <sujet>");
        const pollEmbed = new RichEmbed() 
        .setColor(randomColor)
        .setFooter("HighWay bot by chaun14", "https://cdn.discordapp.com/attachments/463013852108292116/479651432547483648/1531836179399.png")
        .setDescription(args.join(' ').slice(4))
        .setTitle(`Sondage demandé par ${message.author.username}`)
        let msg = await message.channel.send(pollEmbed);
        
        await msg.react('👍');
        await msg.react('👎');
        await msg.react('🤷');  
        message.delete();
        }
        else{
        message.channel.send("Vous n'avez pas les droits pour exécuter cette commande");
        }
    }


  module.exports.help = {
    name: "poll"
  }