const TelegramBot = require ('node-telegram-bot-api');

const TOKEN = '479065680:AAHUysRRFisfZdfEEPgM-uBvcWrrw0fYcRc';

const bot = new TelegramBot(TOKEN, {
    polling: true
});

bot.onText(/\/start/, msg => {
    const text =  `Приветствую, ${msg.from.first_name}\nКак дела?`;

bot.sendMessage(msg.chat.id, text)

});