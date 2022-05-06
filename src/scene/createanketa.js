const Scene = require('node-vk-bot-api/lib/scene');
const AGREEMENT_BUTTONS = require("../keyboards/agreement");
const {createAnketa} = require("../repository/AnketaRepository");

let fullname, phone, mail, workandstudies, region, position, status;

const newAnketa = new Scene('newAnketa',
    (ctx) => {
        ctx.scene.next();
        ctx.reply('Вы выбрали пункт "Анкета для тестирования".' + '\n' +
            'Последовательно ответьте на все вопросы, вводя запрашиваемую информацию.' + '\n' +
            'Укажите ФИО: ');
    },
    (ctx) => {
        ctx.scene.next();
        ctx.reply('Укажите почту: ', null, null);
        fullname = ctx.message.text;
    },
    (ctx) => {
        ctx.scene.next();
        ctx.reply('Укажите номер телефона:');
        mail = ctx.message.text;
    },
    (ctx) => {
        ctx.scene.next();
        ctx.reply('Укажите регион проживания: ');
        phone = ctx.message.text;
    },
    (ctx) => {
        ctx.scene.next();
        ctx.reply('Укажите место работы или учебы: ');
        region = ctx.message.text;
    },
    (ctx) => {
        ctx.scene.next();
        ctx.reply('Укажите должность/специальность обучения: ');
        workandstudies = ctx.message.text;
    },
    (ctx) => {
        ctx.scene.next();
        ctx.reply('Укажите свой статус: медик, волонтер-медик, психолог-волонтер');
        position = ctx.message.text;
    },
    (ctx) => {
        ctx.scene.leave();
        status = ctx.message.text;
        createAnketa(ctx.message.from_id, fullname, phone, mail, workandstudies, region, position, status);
        ctx.reply('Спасибо за регистрацию в анкете!', null, AGREEMENT_BUTTONS);
    }
);

module.exports = newAnketa