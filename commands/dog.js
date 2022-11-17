const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("dog")
		.setDescription("Shows a picture of a dog!"),
	async execute(interaction) {
        const user = interaction.options.getUser('user');

        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        const img = (await res.json()).message;

        let embed = new MessageEmbed()
          .setImage(img)
          .setColor("#FFEE7C")
          .setTimestamp()
        interaction.reply({ embeds: [embed] })
	}
}