const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ass")
		.setDescription("Shows a picture of 🍑 [NSFW]!"),
	async execute(interaction) {
    var subreddits = [
      'asstastic',
      'pawg',
      'facedownassup',
      'ass',
      'brunetteass',
      'CheekyBottoms',
      'datgap',
      'underbun',
      'pawgtastic',
      'BestBooties',
      'CuteLittleButts'
    ]

    var reddit = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
  
    const data = await fetch(`https://meme-api.herokuapp.com/gimme/${reddit}`).then(res => res.json())

    if (!data) return interaction.reply(`Sorry, seems like i can't connect to API.`);
  
    const { title, postLink, url, subreddit } = data

    const embed = new MessageEmbed()
    .setColor("#FFEE7C")
    .setTitle(`${title}`)
    .setURL(`${postLink}`)
    .setImage(`${url}`)
    .setFooter(`/reddit/${subreddit}`);
   
    interaction.reply({ embeds: [embed], ephemeral: true});
	}
}