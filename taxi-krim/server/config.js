module.exports = {
    staticFolder: "static",
    defaultPort: 3200,
    cacheTTL: 31000,
    sessionSecret: process.env.SESSION_SECRET,
    mongodb: process.env.MONGODB_URL,
    env: {
        env: process.env.NODE_ENV,
    },
    vk: {
        client_id: process.env.VK_CLIENT_ID,
        client_secret: process.env.VK_CLIENT_SECRET,
        service_key: process.env.VK_SERVICE_KEY,
        callback_url: "/vk/callback/",
        scope: ["email"],
        profile_fields: ["photo_200_orig"],
    },
    tg: {
        notification_bot_token: process.env.TELEGRAM_NOTIFICATION_BOT_TOKEN,
        chatIds: (process.env.TELEGRAM_CHATS || "").split(",") || [],
    },
    admins: [120446257, 344119707, 10546015],
    mail: {
        from: "Такси Аврора <no-reply@taxi-avrora-krim.ru>",
        user: "no-reply@taxi-avrora-krim.ru",
        password: process.env.MAIL_PASSWORD,
    },
    email: {
        to: "ataxikrim@gmail.com",
        copy: "yury.kundin@yandex.ru",
    },
};
