var Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("sorry xd");
let rMember = message.guild.member(message.mentions.users.find()) || message.guild.members.get(args[0]);
if(rMember) return message.reply("no se encuentra wey")
let role = args.join("").slice(22);
if(!role) return message.reply("especifia al rol");
let gRole = message.guild.roles.find(`name`,role);
if(!gRole) return message.reply("no se encuentra el rol");

if(rMember.roles.has(gRole.id));
await(rMember.addRole(gRole.id));

try{
rMember.send(`felicidades, se obtuvo el rol`);
}catch(e)
//message.channel.send(`felicidades`);
