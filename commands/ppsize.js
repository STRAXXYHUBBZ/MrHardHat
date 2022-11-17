const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ppsize")
		.setDescription("Show a user's PP Size!")
        .addUserOption((option) => option.setName('user').setDescription("The user's PP Size you want").setRequired(false)),
	async execute(interaction) {
        const user = interaction.options.getUser('user') || interaction.user;

        const size = (user.id.slice(-3) % 20) + 1;
	const sizee = size/2.54
	const random = (user.id.slice(-6) % 40) + 3;

        let embed = new MessageEmbed()
        .setTitle(`${user.username}'s PP Size`)
        .setColor("#FFEE7C")
        .setDescription(`${sizee.toFixed(2)} inch\n8${"=".repeat(size)}D`)
        .setThumbnail(user.displayAvatarURL({ size: 4096, dynamic: true }))
        .setTimestamp()
        interaction.reply({ embeds: [embed] })
	}
}