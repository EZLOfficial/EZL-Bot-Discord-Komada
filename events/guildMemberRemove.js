exports.run = (client, member) => {
  member.guild.defaultChannel.send(`Goodbye ${member.user.username}.`); 
};