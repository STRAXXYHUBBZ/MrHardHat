const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("invite")
		.setDescription("Gives an invite link for HardHat!"),
	async execute(interaction) {

        let embed = new MessageEmbed()
        .setTitle(`Press me to invite HardHat to your server!`)
        .setColor("#FFEE7C")
        .setURL("https://discord.com/api/oauth2/authorize?client_id=1003784428344070186&permissions=8&scope=bot%20applications.commands")
        .setTimestamp()
        interaction.reply({ embeds: [embed] })
	}
}