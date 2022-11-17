const { SlashCommandBuilder } = require("@discordjs/builders");
const ms = require("ms")
module.exports = {
	data: new SlashCommandBuilder()
   .setName("timeout")
   .setDescription("Put member in timeout.")
   .addUserOption((option) => option.setName("member").setDescription('Person who you want to put in timeout.').setRequired(true))
   .addStringOption((option) => option.setName("time").setDescription('For how much time you want to timeout member').setRequired(true))
   .addStringOption((option) => option.setName("reason").setDescription('Reason to put member in timeout')),
	async execute(interaction) {
    if(!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply({ content: "You do not have permission to use this command." });

    const member = interaction.options.getMember('member')
    const reason = interaction.options.getString('reason') || null
    const time = ms(interaction.options.getString('time'))

    if(!time) interaction.reply("Please provide a valid time!")
    member.timeout(time, reason)
    interaction.reply({
      content: `Successfully muted ${member} for ${time}`,
      ephemeral: true
   })
   }
}