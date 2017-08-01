exports.run = (client, message) => {
	//ignore all bots to prevent loops or spam
  if(message.author.bot) return;
	//create and edit your list of words you want to filter. This is a very powerful filter so be careful of using. For example, the word 'assign' will not be allowed if the word `ass` is present in the swear words. In other filters, they are easily breakable by typing 'ass.' but this filter will delete it.
  const swearWords = ["damn", "shucks", "frak", "ass"];

  let badWords = swearWords.filter(word => message.content.toLowerCase().includes(word));
  if(badWords.length > 0) {
    let badWordList = [];
    badWords.forEach(function(element) {
      badWordList += `${element} `;
    });
	//dm the user regarding what words caused the message to be deleted.
    message.author.send(`I deleted the message below because you used a word that is not allowed. : **${badWordList}**`);
	//dm the user with the message incase they wish to copy paste -> edit and resend. Imagine what happens when by accident a user gets the message deleted for a mistake.
    message.author.send(`${message.content}`);
    // Delete a message
    message.delete()
		//send a report of the effect to a channel of your choosing.
     .then((msg) => client.channels.get('336736165233295362').send(`Deleted message from ${msg.author} that said the \n\n **Naughty Words:** ${badWordList} in the server ${msg.guild} in the channel ${msg.channel}. \n\n **Full Message:** ${msg.content}` ) )
     .catch(console.error);
  } 

	//ignore all messages without its prefix.
  if(message.content.indexOf(client.config.prefix) !== 0) return;
  
};
