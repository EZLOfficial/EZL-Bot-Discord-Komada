exports.run = async (client, msg, [...args]) => {
  try {

  } catch (e) {
    msg.reply('Some error occured with xxxxxx. A report has been sent to the developers.');
    client.channels.get("341020497309597696").send(`There was an error trying to xxxxxx: ${e} in ${msg.channel} on ${msg.guild} by ${msg.author}`);
  }
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  cooldown: 0,
};

exports.help = {
  name: "name",
  description: "Command Description",
  usage: "",
  usageDelim: "",
  extendedHelp: "",
};