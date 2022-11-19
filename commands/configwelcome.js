const { SlashCommandBuilder } = require("@discordjs/builders");
const { Permissions } = require("discord.js");
const GuildSettings = require("../models/GuildSettings");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("configwelcome")
		.setDescription("Configurate your welcome settings")
		.addSubcommand(sub => sub
			  .setName("welcomemessage")
			  .addStringOption(opt => opt.setName("text"))
		  )
		  .addSubcommand(sub => sub
			  .setName("channel")
			  .addChannelOption(opt => opt.setName("Welcome channel"))
		  ),
	async execute(interaction) {
		

if (interaction.options.getSubcommand() === 'channel') {
		// Check for admin permissions
		if (!interaction.member.permissions.has([Permissions.FLAGS.ADMINISTRATOR])) {
			interaction.reply("You do not have permission to use this command!");
			return;
		}

		GuildSettings.findOne({ guild_id: interaction.guild.id }, (err, settings) => {
			if (err) {
				console.log(err);
				interaction.reply("An error occurred while trying to set the welcome channel!");
				return;
			}

			if (!settings) {
				settings = new GuildSettings({
					guild_id: interaction.guild.id,
					welcome_channel_id: interaction.options.getChannel("welcome").id
				});
			} else {
				settings.welcome_channel_id = interaction.options.getChannel("welcome").id;
			}

			settings.save(err => {
				if (err) {
					console.log(err);
					interaction.reply("An error occurred while trying to set the welcome channel!");
					return;
				}

				interaction.reply(`Welcome channel has been set to <#${interaction.options.getChannel("welcome").id}>`);
			})
		})
	}


	if (interaction.options.getSubcommand() === 'welcomemessage') {
		// Check for admin permissions
		if (!interaction.member.permissions.has([Permissions.FLAGS.ADMINISTRATOR])) {
			interaction.reply("You do not have permission to use this command!");
			return;
		}

		GuildSettings.findOne({ guild_id: interaction.guild.id }, (err, settings) => {
			if (err) {
				console.log(err);
				interaction.reply("An error occurred while trying to set the welcome channel!");
				return;
			}

			if (!settings) {
				settings = new GuildSettings({
					guild_id: interaction.guild.id,
					welcome_message: interaction.options.getChannel("welcomemessage").id
				});
			} else {
				settings.welcome_message = interaction.options.getChannel("welcomemessage").id;
			}

			settings.save(err => {
				if (err) {
					console.log(err);
					interaction.reply("An error occurred while trying to set the welcome channel!");
					return;
				}

				interaction.reply(`Welcome message has been set to ``${interaction.options.getChannel("welcomemessage").id}```);
			})
		})
	}

	}
}