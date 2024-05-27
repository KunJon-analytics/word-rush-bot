import { Markup, Context } from 'telegraf';
import createDebug from 'debug';

import { WEB_APP_URL } from '../core';

const debug = createDebug('bot:start_command');

const start = () => async (ctx: Context) => {
  const username = ctx.message?.from.username || ctx.message?.from.first_name;

  debug(`Triggered "start" command by user \n${username}`);
  ctx.replyWithHTML(
    `🚀 <b>Welcome to Word Rush.</b> @${username} 🌟 \n
    Unleash your lexicon power and dive into the addictive word hunt game. Earn points, invite friends, and convert them to valuable tokens. Let the word frenzy begin. \n`,
    Markup.inlineKeyboard([
      Markup.button.webApp('Launch Word Rush 🎮', WEB_APP_URL),
    ]),
  );
};

export { start };
