const { MessageEmbed } = require('discord.js');
const somethingRandom = require('some-random-cat').Random

module.exports.run = async (bot, message, args) => {
        const subreddits = ["AnimeGirls"]
        let randomSubReddit = subreddits[Math.floor(Math.random() * subreddits.length)]
        somethingRandom.getMeme(randomSubReddit).then(res => {
            const embed = new MessageEmbed()
                .setTitle("Anime girl!")
                .setImage(res.img)
                .setFooter(`👍 ${res.upvotes} | 👎 ${res.downvotes} | 💬 ${res.comments}`)
                .setColor('RANDOM')
            message.channel.send(embed)
        }).catch(e => message.channel.send('API Error. Please try again.'))
    }

    module.exports.config = {
        name: "Lanimegirl",
        description: "example of an help.",
        usage: "Lanimegirl",
        accessableby: "Members",
        aliases: []
    }