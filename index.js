const TelegramBot = require ('node-telegram-bot-api');

const TOKEN = '479065680:AAHUysRRFisfZdfEEPgM-uBvcWrrw0fYcRc';

const bot = new TelegramBot(TOKEN, {
    polling: true
});
const ANSWER1 = {
    good: 'Хорошо',
    bad: 'Плохо',
    cat: 'Котик',
    dog: 'Щеночек',
    back: 'Назад'
}
bot.onText(/\/start/, msg => {
    const text =  `Привет, ${msg.from.first_name}\nКак дела?`;

    bot.sendMessage(msg.chat.id, text, {
        reply_markup: {
            keyboard: [
                [ANSWER1.good, ANSWER1.bad]
        ]
        }
    })

});

bot.on('message',msg => {
    switch (msg.text) {
        case ANSWER1.bad:
            sendPictureScreen(msg.chat.id)
            break
        case ANSWER1.good:
            break
        case ANSWER1.back:
            bot.sendMessage(msg.chat.id, 'Так как ваше настроение?',{
            reply_markup: {
                keyboard: [
                    [ANSWER1.good, ANSWER1.bad]
                ]
            }
        })
            break
        case ANSWER1.dog:
        case ANSWER1.cat:
            break

    }
})

function sendPictureScreen(chatId) {
    bot.sendMessage(chatId, 'Давайте попробуем поднять его', {
        reply_markup: {
            keyboard: [
                [ANSWER1.dog, ANSWER1.cat],
                [ANSWER1.back]
            ]
        }
    })
}
