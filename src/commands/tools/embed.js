const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('embed')
    .setDescription('Returns embed'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`This is a Title`)
        .setDescription(`This is a description`)
        .setColor(0x18e1ee)
        .setImage(client.user.displayAvatarURL())// This is the large image
        .setThumbnail(client.user.displayAvatarURL()) //This is the small image
        .setTimestamp(Date.now())
        .setAuthor({
            url: `https://wavehost.org`,
            iconURL: interaction.user.displayAvatarURL(),
            name: interaction.user.tag
        })
        .addFields([
            {
            name:`the name`,
            value:`the value`,
            inline: true
            },
            {
                name:`the name2`,
                value:`the value2`,
                inline: true
            }
            

        ])
          .setFooter({
            text: client.user.tag,
       })
        await interaction.reply({
            embeds: [embed]
        });
    },
};