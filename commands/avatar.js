const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("avatar")
		.setDescription("Show a user's avatar!")
        .addUserOption((option) => option.setName('user').setDescription("The user's avatar you want").setRequired(false)),
	async execute(interaction) {
        const user = interaction.options.getUser('user') || interaction.user;

        let embed = new MessageEmbed()
        .setTitle(`${user.username}'s Avatar`)
        .setColor("#FFEE7C")
        .addField('PNG', `[Link](${user.displayAvatarURL({ size: 4096, dynamic: true, format: "png" })})`, true)
        .addField('JPG', `[Link](${user.displayAvatarURL({ size: 4096, dynamic: true, format: "jpg" })})`, true)
        .addField('WEBP', `[Link](${user.displayAvatarURL({ size: 4096, dynamic: true, format: "webp" })})`, true)

        .setImage(user.displayAvatarURL({ size: 4096, dynamic: true }))
        .setTimestamp()
        interaction.reply({ embeds: [embed] })
	}
}