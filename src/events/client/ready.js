module.exports = {
    name: 'ready',
    description: 'Ready!',
  async execute(client) {
        console.log('Ready! ${client.user.tag} is online!');
        client.user.setPresence({ activities: [{name: 'In development', type: 'WATCHING'}], status: 'online' });
    } 
}
