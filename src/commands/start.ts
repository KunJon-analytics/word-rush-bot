import { Markup, Context } from 'telegraf';
import createDebug from 'debug';

import { WEB_APP_URL } from '../core';

const debug = createDebug('bot:start_command');

const start = () => async (ctx: Context) => {
  debug(
    `Triggered "start" command by user \n${ctx.message?.from.username || ctx.message?.from.first_name}`,
  );
  ctx.reply(
    `Welcome to Word Rush! ${ctx.message?.from.username || ctx.message?.from.first_name} 🚀 \n
        Unleash your lexicon power and dive into the addictive word hunt game. 
        Earn points, invite friends, and convert them to valuable tokens. \n
        Let the word frenzy begin!`,
    Markup.inlineKeyboard([
      Markup.button.webApp('Launch Word Rush 🎮', WEB_APP_URL),
    ]),
  );
};

export { start };
