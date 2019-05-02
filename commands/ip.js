const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
  console.log("ip");

  //  if(!message.member.roles.some(r=>["Dictateur Hw", "Modérateur", "Recruteur", "[-AntiRaid-]", "FrozedMaking"].includes(r.name)) )
   //   return message.channel.send("Désolé mais seuls les membres de la team peuvent récuperer des IPs >:D");
    let member = args[1];
    if(!member) 
      return message.channel.send("Euh, pardon mais c'est l'ip de qui que je dois prendre?")
    var ipList = [
    "192.25.124.41",
    "192.227.104.182",
    "192.241.1.229",
    "192.236.76.142",
    "192.154.148.10",
    "192.4.118.181",
    "192.24.159.221",
    "192.35.74.33",
    "192.95.238.121",
    "192.95.238.121"
    ];
    var randomItem = ipList[Math.floor(Math.random()*ipList.length)];
    message.channel.send(`Ip de ${member} : ${randomItem}`);
     console.log(`Ip de ${member} : ${randomItem} demandée `);



}

module.exports.help = {
    name: "ip"
  }