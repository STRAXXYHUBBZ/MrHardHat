const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("help")
		.setDescription("Shows all of the bots commands!"),
    	async execute(interaction) {
        const user = interaction.options.getUser('user');

        const embed = new MessageEmbed()
        .setTitle(`HardHat's command list!`)
        .setTimestamp()
        .setColor("#FFEE7C")
        .setThumbnail('')
        .setDescription(`Displays all of HardHat's commands!`)
        .addFields(
        { name: '<:moderation:1004643656508117082> Moderation', value: `\nBan\nKick\nTimeout`, inline: true },

        { name: '<:config:1004643855771127818> Configuration', value: `\nSetwelcomechannel`, inline: true },
        
        { name: '<:misc:1004643782395973712> Misc', value: `\nAvatar\nPing\nUserinfo\nInvite`, inline: true },

        )
        .addFields(
            { name: '<:nsfw:1004676157041553478> NSFW', value: `\n``Ass```, inline: true },
    
            { name: '<:animals:1004676295562637373> Animals', value: `\nDog`, inline: true },

            { name: '<:fun:1004676242781523968> Fun', value: `\nPickupline\nPPSize`, inline: true },
            )
        .setTimestamp()
        interaction.reply({ embeds: [embed] })
	}
}