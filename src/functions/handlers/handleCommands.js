const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require("fs");


module.exports = (client) => {
    client.handleCommands = async () => {
      const commandsFolder = fs.readdirSync("./src/commands");
      for (const folder of commandsFolder) {
        const commandsFiles = fs
         .readdirSync(`./src/commands/${folder}`)
         .filter((file) => file.endsWith(".js"));

        const { commands, commandArray } = client;
        for (const file of commandsFiles) {
          const command = require(`../../commands/${folder}/${file}`);
          commands.set(command.data.name, command);
       // commandArray.push(command.data.toJson());
       if (command.data && typeof command.data.toJson === 'function') {
       }
        }
      }
      const clientId = "1078055722459336734";
      const guildId = "1077722465763074079";
      const rest = new REST({ version: "9" }).setToken(process.env.token);
      try {
        console.log(`Started refreshing application (/) commands.`);
  
        // The put method is used to fully refresh all commands in the guild with the current set
      await rest.put(Routes.applicationCommands(clientId, guildId), {
        body: client.commandArray,
      })
  
        console.log(`Successfully reloaded application (/) commands.`);
      } catch (error) {
        // And of course, make sure you catch and log any errors!
        console.error(error);
      }
    };
}

