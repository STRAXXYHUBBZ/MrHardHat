const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("premium")
		.setDescription("Show the premium version of the bot"),
	async execute(interaction) {

        let embed = new MessageEmbed()
        .setTitle(`HardHat Premium`)
        .setColor("DARK_RED")
        .setDescription("<:crossmark:1004681866558849104> HardHat Premium is not yet available!")
        .setTimestamp()
        interaction.reply({ embeds: [embed] })
	}
}