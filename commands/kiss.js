const Discord = require("discord.js");
const superagent = require("snekfetch");

        module.exports.run = async (bot, message, args) => {
            const user = message.mentions.users.first();
            if(!user)
                return message.channel.send({embed: {
                color: 16734039,
                description: "You must mention someone to kiss!"
            }})

		if (message.author === user) {
           return await message.channel.send({embed: {
                color: 16734039,
                description: "You cant kiss yourself!"
            }})
		}
            superagent.get('https://nekos.life/api/v2/img/kiss')
                .end((err, response) => {
              const embed = new Discord.MessageEmbed()
              .setTitle(user.username + " Just got a kiss from " + message.author.username)
              .setImage(response.body.url)
              .setColor("BLUE")
              .setDescription((user.toString() + " got a kiss from " + message.author.toString()))
              .setFooter(`this is so cute`)
              .setURL(response.body.url);
          message.channel.send(embed);
            }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }}));

        }

        module.exports.config = {
            name: "Lkiss",
            description: "",
            usage: "Lkiss",
            accessableby: "Members",
            aliases: []
        }