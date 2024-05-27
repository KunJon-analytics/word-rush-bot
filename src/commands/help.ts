import { Context } from 'telegraf';
import createDebug from 'debug';

const debug = createDebug('bot:help_command');

const help = () => async (ctx: Context) => {
  const username = ctx.message?.from.username || ctx.message?.from.first_name;

  debug(`Triggered "help" command by user \n${username}`);
  ctx.replyWithHTML(
    `🚀 <b>Word Rush Bot Help:</b>

<b>Launch Word Rush:</b>
   - Use the <code> /start</code> command to launch the web app.
   - Dive into the addictive word hunt game!

<b>Get Your Referral Link:</b>
   - Type <code> /referral</code> to receive your unique referral link.
   - Share it with friends and multiply your points!

<b>View Your Points:</b>
   - Check your Word Rush points anytime by navigating to <i>referalls</i> using the navbar/sidebar.
   - Lexicon prowess pays off!

Ready to play? Let's turn words into wealth! 🌟🔠`,
  );
};

export { help };
