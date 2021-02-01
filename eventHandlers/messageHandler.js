const messageCommandHandler = require('./messageCommandHandler');
const messageEmbedHandler = require('./messageEmbedHandler');
const messageResponseHandler = require('./messageResponseHandler');

module.exports = message => {
    messageCommandHandler(message);
    messageEmbedHandler(message);
    messageResponseHandler(message);
};
