const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["reactiongifs"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setURL(`http://reddit.com/${random}`)
    .setColor(`#ff3399`)

    message.channel.send(embed);

}

module.exports.config = {
    name: "Lreaction",
    description: "",
    usage: "Lreaction",
    accessableby: "Members",
    aliases: []
}