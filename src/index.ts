import { Telegraf } from 'telegraf';
import { VercelRequest, VercelResponse } from '@vercel/node';

import { about, start, help, referral } from './commands';
import { development, production } from './core';

const BOT_TOKEN = process.env.BOT_TOKEN || '';
const ENVIRONMENT = process.env.NODE_ENV || '';

const bot = new Telegraf(BOT_TOKEN);

bot.command('about', about());
bot.command('start', start());
bot.command('help', help());
bot.command('referral', referral());

//prod mode (Vercel)
export const startVercel = async (req: VercelRequest, res: VercelResponse) => {
  await production(req, res, bot);
};
//dev mode
ENVIRONMENT !== 'production' && development(bot);
