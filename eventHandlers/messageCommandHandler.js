module.exports = message => {
    // define instruction prefix
    const prefix = "!";

    // if a bot, ignore
    if (message.author.bot) return;

    // if not a command, ignore
    if (!message.content.startsWith(prefix)) return;

    // get command
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    // ping command
    if (command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
    }
    
    // sum command
    else if (command === "sum") {
        if (args.length < 1) return;
        const numArgs = args.map(x => parseFloat(x));
        const sum = numArgs.reduce((counter, x) => counter += x);
        message.reply(`The sum of all the arguments you provided is ${sum}!`);                  
    }

    // if the command does not exist, ignore
    else return;
};
