const fs = require('fs');


module.exports = (client) => {
    client.handleCommands = async() => {
const commandsFolder = fs.readdirSync('./src/commands');
for (const folder of commandsFolder) {
    const commandsFiles = fs.readdirSync(`./src/commands/${folder}`).filter(file => file).filter(file => file.endsWith('.js'));
    const { commands, commandArray } = client;
    for (const commandFile of commandsFiles) {
        const command = require(`../../commands/${folder}/${file}`);
        client.commands.set(command.data.name, command);
        commandArray.push(command.data.toJson());
        console.log(`Command: ${command.data.name} has been loaded `);
    } 
}
    }
}