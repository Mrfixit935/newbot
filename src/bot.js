require('dotenv').config()
const { token } = process.env;
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

const client  = new Client({ intents: GatewayIntentBits.Guilds})
client.commands = new Collection();
client.commandArray = [];

const functionFolders = fs.readdirSync(`./src/functions`);
const functionFiles = fs
for (const folder of functionFolders) {
    const functionFiles = fs.readdirSync(`./src/functions/${folder}`).filter(file => file.endsWith('.js'));
for (const functionFile of functionFiles) require(`./functions/${folder}/${functionFile}`)(client);
    
}
client.handleEvents()
client.handleCommands()

client.login(token)