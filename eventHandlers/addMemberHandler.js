module.exports = member => {
    // send the message to the designated channel on the server
    const channel = member.guild.channels.cache.find(ch => ch.name === 'general');

    // if the channel is not found, ignore
    if (!channel) return;

    // send message
    channel.send(`Welcome to the Shaka Alliance Discord server, ${member}!`);
};
