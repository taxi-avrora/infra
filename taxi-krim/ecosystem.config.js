module.exports = {
    apps: [
        {
            name: "taxi-krim",
            script: "./server/index.js",
            watch: false,
            restart_delay: 3000,
            env: {
                PORT: 3200,
                NODE_ENV: "production",
                SESSION_SECRET: process.env.SESSION_SECRET,
                VK_CLIENT_ID: process.env.VK_CLIENT_ID,
                VK_CLIENT_SECRET: process.env.VK_CLIENT_SECRET,
                VK_SERVICE_KEY: process.env.VK_SERVICE_KEY,
                MAIL_PASSWORD: process.env.MAIL_PASSWORD,
            },
        },
    ],
};
