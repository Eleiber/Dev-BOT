const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");

bot.on("ready", () => {
  console.log(`${bot.guilds.size} servers`);

  setInterval(function () {
    bot.user.setActivity(`a frend`, { type: 'watching' })
  }, 10000)
});

bot.on("message", (msg) => {
  var messageArray = msg.content.split(' ');
  var command_prefix = messageArray[0];
  var command = command_prefix.replace(config.prefix, '');
  var args = messageArray.slice(1).join(' ');

  if(!msg.content.startsWith(config.prefix)) return;

  switch (command) {
    case 'ping':
    msg.channel.send(`${bot.ping}ms.`)
    break;

    case 'spinner':
      msg.channel.send('fidget spainer', { file: "http://gifimage.net/wp-content/uploads/2017/11/fidget-spinner-gif-transparent-6.gif"} );
      break;

    case 'mute':
      msg.reply(`muteame esta gil`)
      break;

    case 'kick':
      msg.channel.send('abcdefghijklmnñopqrstuvwxyz');
      break;

    case 'ban':
      msg.channel.send('garang de escrilecs ::V:V:V:V:VV: +10 prro :V:V::');
      break;
  }
});

//TOKEN
bot.login(config.token);
