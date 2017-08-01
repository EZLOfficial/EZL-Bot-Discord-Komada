exports.run = async (client, msg, [user, role]) => {
  if (msg.guild.roles.exists('name', role)) {
        msg.mentions.members.first().removeRole(msg.guild.roles.find('name', role));
        msg.reply('', {embed: {
            color: 3447003,
            author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
            },
            description: `${user} has been lost the ${role} role. :smiley:`,
            timestamp: new Date(),
            footer: {
            icon_url: client.user.avatarURL,
            text: '© Esports Zodiac League LLC (EZL)'
            }
        }
        });
    } else {
        msg.reply('', {embed: {
            color: 3447003,
            author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
            },
            description: `I am sorry but ${role} role does not exist. :cry:`,
            timestamp: new Date(),
            footer: {
            icon_url: client.user.avatarURL,
            text: '© Esports Zodiac League LLC (EZL)'
            }
        }
        });
    }
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ['rrole', 'rr'],
  permLevel: 2,
  botPerms: ['MANAGE_ROLES'],
  requiredFuncs: [],
  cooldown: 0,
};

exports.help = {
  name: "removerole",
  description: "Remove a role from a user.",
  usage: "<user:user> <role:str>",
  usageDelim: " ",
  extendedHelp: "1) User must have a role called Moderators to use this command.\.2) Bot must have Manage Role permissions. The bot will not be able to remove a role higher than its highest role.",
};