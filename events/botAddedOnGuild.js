const Discord = require('discord.js');
const GuildSettings = require('../models/GuildSettings');

module.exports = {
	name: "botAddedOnGuild",
	async execute(guild) {
		client.on('guildCreate', guild => {
            guild.systemChannel.send(`Hello, I'm HardHat! You can use me by doing ``/help``!!`, {
            });
          });
}
}