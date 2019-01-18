const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("535876726178447362")
setInterval(function() {
channel.send(`savagepro savagepro savagepro savagepro savagepro savagepro`);
}, 30)
})

client.login(process.env.BOT_TOKEN);