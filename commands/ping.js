const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Pong!"),
	async execute(interation) {
		interation.reply({content: `Getting Ping...`}).then((inter)=>{
			interation.editReply({
				content: `🏓test Latency is ${Date.now() - interation.createdTimestamp}ms`,
				ephemeral: true
			});
		});
		
	}
}