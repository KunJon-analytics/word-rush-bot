import { Context } from 'telegraf';
import createDebug from 'debug';

import { getReferralLink } from '../lib';

const debug = createDebug('bot:referral_command');

const referral = () => async (ctx: Context) => {
  const username = ctx.message?.from.username || ctx.message?.from.first_name;

  debug(`Triggered "referral" command by user \n${username}`);

  const userId = ctx.message?.from.id;
  if (userId) {
    const referralLink = getReferralLink(userId);

    ctx.replyWithHTML(`🚀 <b>Join Word Rush and Unlock the Lexicon Fortune!</b>

🔗 <b>Your Referral Link:</b> ${referralLink}

🌟 <b>Why Word Rush?</b>
- 🎮 Play the addictive word hunt game.
- 💌 Invite friends and multiply your points.
- 💰 Convert points to valuable tokens on the TON blockchain.

Spread the word—let's make Word Rush go viral! 🌟✨`);
  } else {
    ctx.replyWithHTML(`🚀 <b>Join Word Rush and Unlock the Lexicon Fortune!</b>

🔗 <b>Your Referral Link:</b> Launch app using <i>/start</i> to get referral code

🌟 <b>Why Word Rush?</b>
- 🎮 Play the addictive word hunt game.
- 💌 Invite friends and multiply your points.
- 💰 Convert points to valuable tokens on the TON blockchain.

Spread the word—let's make Word Rush go viral! 🌟✨`);
  }
};

export { referral };
