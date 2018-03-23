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
    back: 'Назад',
    good2: 'Теперь хорошо!',
    bad2: 'Всё ещё плохо :(',
    back2: 'Спасибо, достаточно'
}
const ANSWER2 = {
    work: 'Давай поболтаем!',
    joke: 'Расскажи анекдот',
    joke2: 'Давай другой анекдот',
    joke3: 'Давай ещё',
    joke4: 'Есть ещё?'
}
const ANSWER3 = {
    a1: 'Как дела?',
    a2: 'Как ты?',
    a3: 'Что ты умеешь?',
    a4: 'Что ты можешь?',
    a5: 'Зачем ты нужен?',
    a6: '.',
    a7: 'Ау',
    a8: 'Ауу',
    a72: 'ау',
    a82: 'ауу',
    a9: 'Какой сегодня день?',
    a10: 'За кого ты голосовал?',
    a11: 'За кого бы ты проголосовал?',
    a12: 'Что ты думаешь о любви?',
    a13: 'Что посоветуешь?',
    a14: 'Что делать?',
    a15: 'Как поступить?',
    a16: 'Что происходит?',
    a17: 'Как меня зовут?',
    a172:'Как моё имя?',
    a18: 'Как тебя зовут?',
no:'Нет',
    yes: 'Да',
hi: 'Привет'
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
        case ANSWER3.a1:
            bot.sendMessage (msg.chat.id, 'Неплохо! Хочу - в окно смотрю...Хочу - на транзисторе играю!',{
                reply_markup: {
                    keyboard: [
                        [ANSWER1.back]
                    ]
                }
            })
            break
        case ANSWER3.a2:
            bot.sendMessage (msg.chat.id, 'Хорошо!',{
                reply_markup: {
                    keyboard: [
                        [ANSWER1.back]
                    ]
                }
            })
            break
        case ANSWER3.a3:
            bot.sendMessage (msg.chat.id, 'Пока немного: показывать милые картинки, рассказывать анекдоты и отвечать на некоторые дурацкие вопросы :)',{
                reply_markup: {
                    keyboard: [
                        [ANSWER1.back]
                    ]
                }
            })
            break
        case ANSWER3.a5:
            bot.sendMessage (msg.chat.id, 'Чтобы показать, что мой хозяин много трудился и чему-то научился',{
                reply_markup: {
                    keyboard: [
                        [ANSWER1.back]
                    ]
                }
            })
            break
        case ANSWER3.a4:
            bot.sendMessage (msg.chat.id, 'Пока немного: показывать милые картинки, рассказывать анекдоты и отвечать на некоторые дурацкие вопросы :)',{
                reply_markup: {
                    keyboard: [
                        [ANSWER1.back]
                    ]
                }
            })
            break
        case ANSWER3.a6:
            bot.sendMessage (msg.chat.id, 'м?',{
                reply_markup: {
                    keyboard: [
                        [ANSWER1.back]
                    ]
                }
            })
            break
        case ANSWER3.a7:
        case ANSWER3.a8:
        case ANSWER3.a72:
        case ANSWER3.a82:
            bot.sendMessage (msg.chat.id, 'Я здесь, не теряйте меня :)',{
                reply_markup: {
                    keyboard: [
                        [ANSWER1.back]
                    ]
                }
            })
            break
        case ANSWER3.a9:
            bot.sendMessage (msg.chat.id, 'Не знаю, но на момент написания этого текста - 23 марта',{
                reply_markup: {
                    keyboard: [
                        [ANSWER1.back]
                    ]
                }
            })
            break
        case ANSWER3.a10:
        case ANSWER3.a11:
            bot.sendMessage (msg.chat.id, 'Очень провокационный вопрос! :) А вы как думаете?',{
                reply_markup: {
                    keyboard: [
                        [ANSWER1.back]
                    ]
                }
            })
            break
        case ANSWER3.a12:
            bot.sendMessage (msg.chat.id, 'Я же бот! Я о ней не думаю)',{
                reply_markup: {
                    keyboard: [
                        [ANSWER1.back]
                    ]
                }
            })
            break
        case ANSWER3.a13:
            bot.sendMessage (msg.chat.id, 'Хм...Вообще? Идти работать!',{
                reply_markup: {
                    keyboard: [
                        [ANSWER1.back]
                    ]
                }
            })
            break
        case ANSWER3.a14:
            bot.sendMessage (msg.chat.id, 'Работать!',{
                reply_markup: {
                    keyboard: [
                        [ANSWER1.back]
                    ]
                }
            })
            break
        case ANSWER3.a15:
            bot.sendMessage (msg.chat.id, 'Не знаю',{
                reply_markup: {
                    keyboard: [
                        [ANSWER1.back]
                    ]
                }
            })
            break
        case ANSWER3.a16:
            bot.sendMessage (msg.chat.id, 'Я и сам не понимаю!',{
                reply_markup: {
                    keyboard: [
                        [ANSWER1.back]
                    ]
                }
            })
            break
        case ANSWER3.a172:
        case ANSWER3.a17:
                    const name = `${msg.from.first_name}`
            bot.sendMessage (msg.chat.id, name, {
                reply_markup: {
                    keyboard: [
                        [ANSWER1.back]
                    ]
                }
            })
            break
        case ANSWER3.a18:
            bot.sendMessage (msg.chat.id, 'Джо...Дядюшка Джо! Хо-хо-хо!',{
                reply_markup: {
                    keyboard: [
                        [ANSWER1.back]
                    ]
                }
            })
            break
        case ANSWER3.hi:
            bot.sendMessage (msg.chat.id, 'Мы уже здоровались : )',{
                reply_markup: {
                    keyboard: [
                        [ANSWER1.back]
                    ]
                }
            })
            break




        case ANSWER1.bad:
        case ANSWER1.bad2:
            sendPictureScreen(msg.chat.id)
            break
        case ANSWER1.good:
        case ANSWER1.good2:
            bot.sendMessage(msg.chat.id, 'Отлично! \nЧем теперь займёмся?', {
                reply_markup: {
                    keyboard: [
                        [ANSWER2.work, ANSWER2.joke],
                        [ANSWER1.back]
                    ]
                }
            })
            break
        case ANSWER1.back:
                    Greeting(msg, false)
            break
        case ANSWER1.back2:
            Greeting2(msg.chat.id)
            break
        case ANSWER1.dog:
        case ANSWER1.cat:
            sendPictureByName(msg.chat.id, msg.text)
            break
        case ANSWER2.joke:
                      bot.sendMessage(msg.chat.id, ' Голодный ковбой едет по пустыне.\n' +
                '            Смотрит - впереди сидит у костра индеец и жарит мясо. \n' +
                '            Ковбой молча спрыгивает с лошади, подходит к костру, берет мясо и начинает есть. \n' +
                '            Насытившись, он решил поговорить с индейцем:\n' +
                '        - Мне ваш вождь что-то не очень нравится!\n' +
                '        - Не нравится - не ешь!', {
                reply_markup: {
                    keyboard: [
                        [ANSWER2.joke2],
                        [ANSWER1.back]
                    ]
                }
            })
            break
        case ANSWER2.joke2:
                     bot.sendMessage(msg.chat.id, ' - Простите, это не вы вытащили вчера из проруби еврейского мальчика?\n' +
                '- Ну я.\n' +
                '- А шапочка, простите, где ?', {
                reply_markup: {
                    keyboard: [
                        [ANSWER2.joke3],
                        [ANSWER1.back]
                    ]
                }
            })
            break
        case ANSWER2.joke3:
            bot.sendMessage(msg.chat.id, ' Едут в одном вагоне четверо программистов и четверо пользователей.\n' +
                'У пользователей четыре билета на четверых, а у программистов один. Приходит пора предъявлять билеты. Программисты запираются в туалете, приходит контролер.' +
                ' Стучится, высовывается рука и протягивает билет. Контролер уходит. Пользователи все видят и им завидно.\n' +
                ' Едут все те же пользователи и программисты обратно. Но на этот раз у пользователей один билет на четверых, а у программистов - ни одного.\n' +
                ' Приходит пора проверки билетов. Пользователи запираются в туалете. Приходит один из программистов и стучится в дверь. Ему высовывают билет.\n' +
                ' Он берет билет, программисты запираются в другом туалете. Приходит контролер.\n ' +
                'Мораль:\n' +
                ' - Не каждый алгоритм придуманный программистом подходит простым пользователям!', {
                    reply_markup: {
                        keyboard: [
                            [ANSWER2.joke4],
                            [ANSWER1.back]
                        ]
                    }
                })
            break
        case ANSWER2.joke4:
            bot.sendMessage(msg.chat.id, 'Всё, других анекдотов не знаю :(', {
                reply_markup: {
                    keyboard: [
                        [ANSWER1.back]
                    ]
                }
            })
            break
        case ANSWER2.work:
            bot.sendMessage (msg.chat.id, 'Отлично! Я умею поддерживать несложный разговор. Давай попробуем пообщаться.',{
            reply_markup: {
                keyboard: [
                    [ANSWER1.back]
                ]
            }
        })
            break

    }
})


function sendPictureScreen(chatId) {
    bot.sendMessage(chatId, 'Давай попробуем поднять его. \nКто тебе больше нравится?', {
        reply_markup: {
            keyboard: [
                [ANSWER1.dog, ANSWER1.cat],
                [ANSWER1.back]
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
        bot.sendMessage(chatId, `Показать что-нибудь ещё?`,{
            reply_markup: {
                keyboard: [
                    [ANSWER1.dog, ANSWER1.cat],
                    [ANSWER1.back2]
                ]
            }
        })
    })
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
function Greeting2(chatId) {
    bot.sendMessage(chatId, 'Как теперь твоё настроение?', {
        reply_markup: {
            keyboard: [
                [ANSWER1.good2, ANSWER1.bad2]

            ]
        }
    })
}
