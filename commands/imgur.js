const { Discord, RichEmbed} = require('discord.js');
var imgur = require('imgur');

module.exports.run = async (bot, message, args) => {
  console.log("imgur");

var Attachment = (message.attachments).array()
const msg = args.join(" ")
console.log(Attachment[0].url)
//  if(sayMessage === "") {
//message.channel.send("test");}
console.log("1")
console.log(message.attachments)
if (Attachment[0].url === undefined) {
  console.log("erreur")
  message.reply("erreur")
  return
}
imgur.setAPIUrl('https://api.imgur.com/3/');
imgur.uploadUrl(Attachment[0].url)
    .then(function (json) {
        console.log(json.data.link);
        message.channel.send(json.data.link)
    })
    .catch(function (err) {
        console.error(err.message);
        message.reply("erreur")
    });
}

  }

}


module.exports.help = {
    name: "upl"
  }
