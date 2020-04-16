  
var Discord = require("discord.js");
var prefix = "$";
var client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var bannedwords = "fuck,shit,slut,whore".split(",");

client.on('message', msg => {
  if (msg.content === '$ping') {
    msg.reply('si,estoy en linea,nya');
  }
});

client.on('message', msg => {
  if (msg.content === '$about') {
    msg.reply('Bot creado por Jeyson');
  }
});

client.on('message', msg => {
  if (msg.content === '$monchito') {
    msg.reply('San chubby, amen');
  }
});

client.on('message', msg => {
  if (msg.content === '$ip') {
    msg.reply('La IP del servidor es: play.ecziliumland.com Version: 1.15.1 ;)');
  }
});

client.on('message', msg => {
  if (msg.content === '$muted') {
    msg.reply('let rMember = message.guild.member(message.mentions.users.find()) || message.guild.members.get(args[0]);');
  }
});

client.on("message", msg => {
  if (msg.guild === null) return;

  for (i=0;i<bannedwords.length;i++) {
    if (msg.content.toLowerCase().includes(bannedwords[i])) {
      msg.delete();
      msg.reply("Please don't swear!");
      return;
    }
  }

  if (msg.author.bot) return;
  if (!msg.member.hasPermission("ADMINISTRATOR")) return;

  if (!msg.content.toLowerCase().startsWith(prefix)) return;
  msg.delete();

  if (msg.content.toLowerCase().startsWith(prefix + "kick ")) {
    var mem = msg.mentions.members.first();
    mem.kick().then(() => {
      msg.channel.send(mem.displayName + " has successfully been kicked by " + msg.author.username + "!");
    }).catch(e => {
      msg.channel.send("An error occured!");
    });
  }

  if (msg.content.toLowerCase().startsWith(prefix + "ban ")) {
    var mem = msg.mentions.members.first();
    var mc = msg.content.split(" ")[2];
    mem.ban(mc).then(() => {
      msg.channel.send(mem.displayName + " has successfully been banned by " + msg.author.username + " for " + mc + " days!");
    }).catch(e => {
      msg.channel.send("An error occured!");
    });
  }

  if (msg.content.toLowerCase().startsWith(prefix + "mute")) {
    var mem = mes.mentions.members.first();
    if (msg.guild.roles.find("name", "mute")) {
      console.log("true");    
    }
  }

  //if (msg.content.toLowerCase().startsWith(prefix + "unmute")) {
    //var mem = msg.mentions.members.first();
    //if (msg.guild.roles.find("name", "mute")) {
   // console.log(true);
    //}
  //}

  if (msg.content.toLowerCase().startsWith(prefix + "purge")) {
    var mc = msg.content.split(" ")[1];
    msg.channel.bulkDelete(mc);
  }

  if (msg.content.toLowerCase().startsWith(prefix + "eval")) {
    var sc = msg.content.substring(msg.content.indexOf(" "));
    eval(sc);
  }

  if (msg.content.toLowerCase().startsWith(prefix + "calc")) {
    var ca = msg.content.substring(msg.content.indexOf(" "));
    msg.reply(ca + " is " + eval(ca).toFixed(2));
  }
});

client.login('token your bot');
