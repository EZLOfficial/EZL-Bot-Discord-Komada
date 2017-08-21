exports.conf = {
  enabled: true,
  // Change to true if the filter should ignore other bots
  ignoreBots: false,
  // Change to true if the filter should ignore selfBots
  ignoreSelf: false
}

exports.run = (client, msg) => {
  if (msg.author.bot) return
  const swearWords = ['shucks', 'frak', 'shiit']

  const badWords = swearWords.filter(word => msg.content.toLowerCase().includes(word))
  if (badWords.length > 0) {
    let badWordList = []
    for (let i = 0; i < badWords.length; i++) {
      badWordList += badWords[i]
    }
    // Delete a message
    msg.delete()
    // DM the user regarding what words caused the message to be deleted.
    msg.author.send(`I deleted the message below because you used a word that is not allowed. : **${badWordList}**`)
    // DM the user with the message incase they wish to copy paste -> edit and resend. Imagine what happens when by accident a user gets the message deleted for a mistake.
    msg.author.send(`${msg.content}`)
    // Send a report of the effect to a channel of your choosing.
    client.channels.get('342015895784259584').send(`Deleted message from ${msg.author} that said the \n\n **Naughty Words:** ${badWordList} in the server ${msg.guild} in the channel ${msg.channel}. \n\n **Full Message:** ${msg.content}`)
  }
}
