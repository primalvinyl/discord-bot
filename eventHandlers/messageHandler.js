const messageCommandHandler = require('./messageCommandHandler');
const messageEmbedHandler = require('./messageEmbedHandler');

module.exports = message => {
    messageCommandHandler(message);
    messageEmbedHandler(message);
};
