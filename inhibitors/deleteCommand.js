exports.run = (client, msg) => {
  if (msg.guildSettings.deleteCommand === true) msg.delete();
  return false;
};

exports.conf = {
  enabled: true,
  requiredModules: [],
};

exports.help = {
  name: "deleteCommand",
  type: "inhibitors",
  description: "Enables the ability for Guild/Bot owners to decide if they want all messages that initiate a command to be deleted.",
};

exports.init = (client) => {
  if (!client.settings.guilds.schema.deleteCommand) {
    client.settings.guilds.add("deleteCommand", { type: "Boolean", default: false }, true);
  }
};