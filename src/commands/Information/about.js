const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "about",
    category: "Information",
    aliases: [ "botinfo" ],
    description: "See description about this project",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
     
    const row = new MessageActionRow()
			.addComponents(
    new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.gg/6ePN9bxXRx")
			);

      const mainPage = new MessageEmbed()
            .setAuthor({ name: 'BobeeBeatz', iconURL: 'https://cdn.discordapp.com/attachments/831823676398764052/976538215018287125/BoBeeBeatz.jpg'})
            .setThumbnail('https://cdn.discordapp.com/attachments/831823676398764052/976538215018287125/BoBeeBeatz.jpg')
            .setColor('#303236')
            .addField('Creator', '[Draxler#6145](https://discord.gg/6ePN9bxXRx)', true)
            .addField('Organization', '[HenGPlayZ](https://discord.gg/6ePN9bxXRx)', true)
            
        return message.reply({embeds: [mainPage], components: [row]});
    }
}
