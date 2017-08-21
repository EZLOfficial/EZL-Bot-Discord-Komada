exports.run = async (client, msg) => {
  try {
    // code here
    const embed = new client.methods.Embed()
      .setTitle('This is your title, it can hold 256 characters')
      .setAuthor(client.user.username, client.user.avatarURL())
      /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
      .setColor(0x00AE86)
      .setDescription('This is the main body of text, it can hold 2048 characters.')
      .setFooter('This is the footer text, it can hold 2048 characters', 'http://i.imgur.com/w1vhFSR.png')
      .setImage('http://i.imgur.com/yVpymuV.png')
      .setThumbnail('http://i.imgur.com/p2qNFag.png')
      /*
   * Takes a Date object, defaults to current date.
   */
      .setTimestamp()
      .setURL('https://discord.js.org/#/docs/main/indev/class/RichEmbed')
      .addField('This is a field title, it can hold 256 characters',
        'This is a field value, it can hold 2048 characters.')
      /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
      .addField('Inline Field', 'They can also be inline.', true)
      /*
   * Blank field, useful to create some space.
   */
      .addBlankField(true)
      .addField('Inline Field 3', 'You can have a maximum of 25 fields.', true)

    msg.channel.send({ embed })
  } catch (e) {
    msg.reply('Some error occured with xxxxxx. A report has been sent to the developers.')
    client.channels.get('341020497309597696').send(`There was an error trying to xxxxxx: ${e} in ${msg.channel} on ${msg.guild} by ${msg.author}`)
  }
}

exports.conf = {
  enabled: true,
  runIn: ['text'],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  cooldown: 0
}

exports.help = {
  name: 'name',
  description: 'Command Description',
  usage: '',
  usageDelim: '',
  extendedHelp: ''
}
