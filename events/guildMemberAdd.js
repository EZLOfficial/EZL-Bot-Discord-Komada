exports.run = (client, member) => {
  member.guild.defaultChannel.send(`Welcome ${member.user.username}.`)
}
