exports.run = async (client, msg, [user]) => {
  msg.mentions.members.first().removeRole(msg.guild.roles.find('name','Time-Out'));
  msg.reply('', {embed: {
      color: 3447003,
      author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
      },
      title: 'Time-Out Initiated!',
      url: 'http://ezlgg.com',
      description: `${user} is now in the time-out corner. :smiley:`,
      timestamp: new Date(),
      footer: {
      icon_url: client.user.avatarURL,
      text: '© Esports Zodiac League LLC (EZL)'
      }
    }
  });
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ['tin', 'unmute'],
  permLevel: 2,
  botPerms: ['MUTE_MEMBERS'],
  requiredFuncs: [],
  cooldown: 0,
};

exports.help = {
  name: "unmute",
  description: "Un-mutes a person on both text and voice.",
  usage: "<user:user>",
  usageDelim: "",
  extendedHelp: "1) mute @user\n2) Requires the user to have a role called Moderators\n3) Bot requires Mute Members permissions.\n4) Requires a role that is called 'Time-Out' set up without any permissions and at a high level in the role settings as well as each channel permissions being edited with its settings.",
};