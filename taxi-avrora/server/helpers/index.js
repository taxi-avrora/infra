const nodemailer = require("nodemailer"),
    config = require("../config"),
    request = require("request-promise");

const Helpers = {
    translitToUrl(string, char) {
        string = Helpers.trim(string);
        string = string.toLowerCase();

        // Символ, на который будут заменяться все спецсимволы
        var space = char || "_",
            // Массив для транслитерации
            transl = {
                а: "a",
                б: "b",
                в: "v",
                г: "g",
                д: "d",
                е: "e",
                ё: "e",
                ж: "zh",
                з: "z",
                и: "i",
                й: "j",
                к: "k",
                л: "l",
                м: "m",
                н: "n",
                о: "o",
                п: "p",
                р: "r",
                с: "s",
                т: "t",
                у: "u",
                ф: "f",
                х: "h",
                ц: "c",
                ч: "ch",
                ш: "sh",
                щ: "sh",
                ъ: "",
                ы: "y",
                ь: "",
                э: "e",
                ю: "yu",
                я: "ya",
                " ": space,
                "`": "",
                "~": "",
                "!": "",
                "@": "",
                "#": "",
                $: "",
                "%": "",
                "^": "",
                "&": "",
                "*": "",
                "(": "",
                ")": "",
                "-": "",
                "=": "",
                "+": "",
                "[": "",
                "]": "",
                "\\": "",
                "|": "",
                "/": "",
                ".": "",
                ",": "",
                "{": "",
                "}": "",
                "'": "",
                '"': "",
                ";": "",
                ":": "",
                "?": "",
                "<": "",
                ">": "",
                "№": "",
            },
            result = "",
            curent_sim = "";

        for (var i = 0; i < string.length; i++) {
            // Если символ найден в массиве то меняем его
            if (transl[string[i]] != undefined) {
                if (curent_sim != transl[string[i]] || curent_sim != space) {
                    result += transl[string[i]];
                    curent_sim = transl[string[i]];
                }
            } else {
                result += string[i];
                curent_sim = string[i];
            }
        }

        return result;
    },

    // Удаляет пробельные символы с начала и конца строки
    trim(str) {
        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    },

    // Отправить письмо
    sendMail(to, subject, html, attachments) {
        const transporter = nodemailer.createTransport({
            host: "smtp.yandex.ru",
            secure: true,
            port: 465,
            auth: {
                user: config.mail.user,
                pass: config.mail.password,
            },
        });

        return new Promise((resolve, reject) => {
            transporter.sendMail(
                {
                    from: config.mail.from,
                    to,
                    subject,
                    html,
                    attachments,
                },
                (err, info) => {
                    if (err) reject(err);
                    resolve(info);
                }
            );
        });
    },

    // Отправить сообщение в телеграм
    sendMessageTelegram(text, reply_markup = {}) {
        const url = `https://api.telegram.org/bot${config.tg.notification_bot_token}/sendMessage`;

        config.tg.chatIds.forEach((chatId) => {
            request
                .post(url, {
                    form: {
                        chat_id: chatId,
                        text,
                        parse_mode: "HTML",
                        reply_markup: JSON.stringify(reply_markup),
                    },
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    },

    // Формат даты и времени
    humanDateTime(date) {
        var today = new Date(),
            _hours = date.getHours(),
            _minutes = date.getMinutes(),
            hours = _hours > 9 ? _hours : `0${_hours}`,
            minutes = _minutes > 9 ? _minutes : `0${_minutes}`,
            months = [
                "января",
                "февраля",
                "марта",
                "апреля",
                "мая",
                "июня",
                "июля",
                "августа",
                "сентября",
                "ноября",
                "декабря",
            ],
            date_str = `${date.getDate()} ${months[date.getMonth()]}`;

        date.getDate() === today.getDate() - 1 && (date_str = "вчера");
        date.getDate() === today.getDate() && (date_str = "сегодня");
        date.getDate() === today.getDate() + 1 && (date_str = "завтра");

        return `${date_str} в ${hours}:${minutes}`;
    },
};

module.exports = Helpers;
