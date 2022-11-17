const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Allows the admin or owner to kick the member.")
    .addUserOption((option) => option.setName('user').setDescription('The person who you want to kick').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('Reason to kick member').setRequired(true)),
	async execute(interation) {

       if(!interation.member.permissions.has("KICK_MEMBERS")) return interation.reply({ content: "You do not have enough permissions to use this command.", ephemeral: true })

        const user = interation.options.getUser('user')
        const member = interation.guild.members.cache.get(user.id) || await interation.guild.members.fetch(user.id).catch(err => {})

        if(!member) return interation.reply("😅 | Unable to get details related to given member.");
        const reason = interation.options.getString('reason')

        
        if(interation.member.roles.highest.position <= member.roles.highest.position) 
        return interation.reply('Given member have higher or equal rank as you so i can not kick them.')
        
        const embed = new MessageEmbed()
        .setDescription(`**${member.user.tag}** is kicked out from the server for \`${reason}\``)
        .setColor("#FFEE7C")
        .setFooter("Kick Member")
        .setTimestamp()

        await member.user.send(`You are kicked from **\`${interation.guild.name}\`** for \`${reason}\``).catch(err => {})
        member.kick({ reason })

        return interation.reply({ embeds: [ embed ]})

    },
    
};