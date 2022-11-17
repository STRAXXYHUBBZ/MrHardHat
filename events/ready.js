const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
require("dotenv").config();

module.exports = {
	name: "ready",
	once: true,
	execute(client, commands) {
		console.log("HardHat is online.");
		let servercount = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0 )
		setInterval(() => {
			client.user.setActivity(`${client.guilds.cache.size} Servers/${servercount} Users!`, {type: "WATCHING"})
		}, 35000)
		client.user.setStatus("dnd")

		const CLIENT_ID = client.user.id;

		const rest = new REST({
			version: "9",
		}).setToken(process.env.TOKEN);

		(async () => {
			try {
				if (process.env.ENV === "production") {
					await rest.put(Routes.applicationCommands(CLIENT_ID), {
						body: commands,
					});

					console.log("Successfully registered commands globally.");
				} else {
					await rest.put(
						Routes.applicationGuildCommands(CLIENT_ID, process.env.GUILD_ID),
						{
							body: commands,
						}
					);
					console.log("Successfully registered commands locally.");
				}
			} catch (err) {
				if (err) console.error(err);
			}
		})();
	},
};
