exports.run = async (client, msg, [user, role]) => {
  console.log(args);
  console.log(args[1]);
  if (msg.guild.roles.exists('name', `${args[0]}`)) {
        msg.mentions.members.first().addRole(msg.guild.roles.find('name', `${args[1]}`));
        msg.reply('', {embed: {
            color: 3447003,
            author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
            },
            description: `${msg.mentions.members.first().user.username} has been given the ${args[1]} role. :smiley:`,
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
            description: `I am sorry but ${args[1]} role does not exist. :cry:`,
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
  aliases: ['arole', 'ar'],
  permLevel: 2,
  botPerms: ['MANAGE_ROLES'],
  requiredFuncs: [],
  cooldown: 0,
};

exports.help = {
  name: "addrole",
  description: "Assign a role to another user.",
  usage: "<user:user> <role:str>",
  usageDelim: " ",
  extendedHelp: "1) User must have a role called Moderators to use this command.\.2) Bot must have Manage Role permissions. The bot will not be able to assign a role higher than its highest role.",
};