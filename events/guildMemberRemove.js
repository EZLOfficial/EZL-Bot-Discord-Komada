exports.run = (client, member) => {
  member.guild.channels.find('name', 'mod-log').send(`Goodbye ${member.user.username}.`)
}
