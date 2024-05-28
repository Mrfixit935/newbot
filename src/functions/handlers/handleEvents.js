const fs = require('fs');


module.exports = (client) => {
    client.handleCommands = async() => { 
        const eventFolder = fs.readdirSync('./src/events');
        for (const folder of eventFolder) {
            const eventFiles = fs.readdirSync(`./src/events/${folder}`).filter(file => file).filter(file => file.endsWith('.js'));
            switch (folder) {
                case "client":
                    for  (const eventFile of eventFiles) {
                        const event = require(`../../events/${folder}/${file}`)
                        if (event.once) client.once(event.name, (...args) => event.run(client,...args));
                        else client.on(event.name, (...args) => event.excecute(client,...args));
                    }
                    break;
            
                default:
                    break;
            }
        }

    }
}