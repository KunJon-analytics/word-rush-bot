import { Markup, Context } from 'telegraf';
import createDebug from 'debug';

import { WEB_APP_URL } from '../core';

const debug = createDebug('bot:start_command');

const start = () => async (ctx: Context) => {
  const username = ctx.message?.from.username || ctx.message?.from.first_name;

  debug(`Triggered "start" command by user \n${username}`);
  ctx.reply(
    `Welcome to Word Rush! ${username} 🚀 \n
        Unleash your lexicon power and dive into the addictive word hunt game. 
        Earn points, invite friends, and convert them to valuable tokens. \n
        Let the word frenzy begin!`,
    Markup.inlineKeyboard([
      Markup.button.webApp('Launch Word Rush 🎮', WEB_APP_URL),
    ]),
  );
};

export { start };
