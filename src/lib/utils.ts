const getReferralLink = (referralCode: number) => {
  const referralLink = `https://t.me/WordHuntCoinBot?startattach=${referralCode}`;
  return referralLink;
};

export { getReferralLink };
