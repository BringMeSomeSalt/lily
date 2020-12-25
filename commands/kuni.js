const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
     if (!message.channel.nsfw) {
		message.react('💢');
		return message.channel.send({embed: {
                color: 16734039,
                description: "You can use this command in an NSFW Channel!"
            }})
	}
    superagent.get('https://nekos.life/api/v2/img/kuni')
        .end((err, response) => {
      const embed = new Discord.MessageEmbed()
      .setTitle("Kuni!")
      .setImage(response.body.url)
      .setColor(`#80dfff`)
      .setURL(response.body.url);
  message.channel.send(embed);
    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }}));
	
}

module.exports.config = {
    name: "Lkuni",
    description: "Answers support",
    usage: "Lkuni",
    accessableby: "Members",
    aliases: []
}
