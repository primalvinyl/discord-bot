const Discord = require("discord.js");
if (process.env.node_env !== 'production') require('dotenv').config();
const messageHandler = require('./eventHandlers/messageHandler');
const addMemberHandler = require('./eventHandlers/addMemberHandler');

// create bot server
const client = new Discord.Client();

// event handlers
client.on('ready', () => console.log('Discord bot online'));
client.on('message', messageHandler);
client.on('guildMemberAdd', addMemberHandler);

// start server
client.login(process.env.BOT_TOKEN);
