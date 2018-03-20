const TelegramBot = require ('node-telegram-bot-api');
const fs = require ('fs')
const TOKEN = '479065680:AAHUysRRFisfZdfEEPgM-uBvcWrrw0fYcRc';
const _ = require ('lodash')
const bot = new TelegramBot(TOKEN, {polling: true})
const ANSWER1 = {
    good: 'Хорошо',
    bad: 'Плохо',
    cat: 'Котик',
    dog: 'Щеночек',
    back: 'Назад'
}
const PicScrs = {
    [ANSWER1.cat]: [
        'cat1.jpg',
        'cat2.jpg',
        'cat3.jpg'
    ],
    [ANSWER1.dog]: [
        'dog1.jpg',
        'dog2.jpg',
        'dog3.jpg'
    ]
}




bot.onText(/\/start/, msg => {
    Greeting(msg)
})

bot.on('message', msg => {
    switch (msg.text) {
        case ANSWER1.bad:
            sendPictureScreen(msg.chat.id)
            break
        case ANSWER1.good:
            break
        case ANSWER1.back:
            Greeting(msg, false)
            break
        case ANSWER1.dog:
        case ANSWER1.cat:
            sendPictureByName(msg.chat.id, msg.text)
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

function Greeting(msg, Hello = true) {
    const text = Hello
        ? `Привет, ${msg.from.first_name}\nКак настроение?`
        : `Как настроение?`

    bot.sendMessage(msg.chat.id, text, {
        reply_markup: {
            keyboard: [
                [ANSWER1.good, ANSWER1.bad]
            ]
        }
    })
}

function sendPictureByName (chatId, picName) {
    const scrs = PicScrs[picName]

    const scr = scrs [_.random(0, scrs.length -1)]

    bot.sendMessage(chatId, `Так...посмотрим, что тут у нас...`)



fs.readFile(`${__dirname}/pictures/${scr}`, (error, picture) => {
    if (error) throw new Error(error)

    bot.sendPhoto(chatId, picture).then(() =>{
        bot.sendMessage(chatId, `Ну как вам? Показать кого-нибудь ещё?`)
    })
})
}
