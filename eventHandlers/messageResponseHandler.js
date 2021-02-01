const randomNumber = (min, max) => {
    // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = message => {
    // if a bot, ignore
    if (message.author.bot) return;

    // get content
    const contentBody = message.content;

    if (/apex/gmi.test(contentBody)) {
        const apexResponseMap = [
            'It would be most interesting to impress their engrams on a computer. The resulting torrential flood of illogic would be most entertaining.',
            'Ugly bags of mostly water.',
            'Their blood will paint the way to the future.',
            'Pink skins!' 
        ];
        const responseIndex = randomNumber(0, 3);
        const response = apexResponseMap[responseIndex];
        message.reply(response);
    }
};
