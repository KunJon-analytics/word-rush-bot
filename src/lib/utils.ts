const getReferralLink = (referralCode: number) => {
  const referralLink = `https://t.me/WordHuntCoinBot/hunt?startapp=${referralCode}`;
  return referralLink;
};

export { getReferralLink };
