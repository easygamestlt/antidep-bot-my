const Scene = require('node-vk-bot-api/lib/scene');
const {addFeedback} = require("../repository/FeedbackRepository");

const feedback = new Scene('feedback',
    (ctx) => {
        ctx.scene.next();
        ctx.reply('Оставьте свое сообщение с пожеланием об исправлении ошибки или ' +
            'добавлении новой функции в программе:');
    },
    (ctx) => {
        ctx.scene.leave();
        addFeedback(ctx.message.from_id, ctx.message.text);
        ctx.reply('Спасибо, мы вас услышали!');
    }
);

module.exports = feedback