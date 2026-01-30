export interface ScenarioContent {
  title: string;
  body: string;
  bgColor: string;
  accentColor: string;
  hasUrgency?: boolean;
}

export interface Scenario {
  id: number;
  realUrl: string;
  fakeUrl: string;
  realContent: ScenarioContent;
  fakeContent: ScenarioContent;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
}

export const allScenarios: Scenario[] = [
  {
    id: 1,
    realUrl: "https://www.google.com",
    fakeUrl: "https://www.googie.com",
    realContent: {
      title: "Google",
      body: "Search the world's information, including webpages, images, videos and more.",
      bgColor: "#ffffff",
      accentColor: "#4285f4",
    },
    fakeContent: {
      title: "Google",
      body: "Search the world's information, including webpages, images, videos and more.",
      bgColor: "#ffffff",
      accentColor: "#4285f4",
    },
    explanation:
      "Look closely at the URL! The fake site uses 'googie.com' with an 'i' instead of 'google.com' with an 'l'. Scammers often swap similar-looking letters.",
    difficulty: "easy",
  },
  {
    id: 2,
    realUrl: "https://www.amazon.com",
    fakeUrl: "https://www.amaz0n.com",
    realContent: {
      title: "Amazon.com",
      body: "Free shipping on millions of items. Get the best of Shopping and Entertainment.",
      bgColor: "#ffffff",
      accentColor: "#ff9900",
    },
    fakeContent: {
      title: "Amazon.com",
      body: "Free shipping on millions of items. Get the best of Shopping and Entertainment.",
      bgColor: "#ffffff",
      accentColor: "#ff9900",
    },
    explanation:
      "The fake URL uses a zero '0' instead of the letter 'o' in 'amaz0n.com'. This is called typosquatting - always check URLs character by character!",
    difficulty: "easy",
  },
  {
    id: 3,
    realUrl: "https://www.paypal.com",
    fakeUrl: "https://www.paypai.com",
    realContent: {
      title: "PayPal",
      body: "The safer, easier way to pay online. Send and receive money securely.",
      bgColor: "#ffffff",
      accentColor: "#003087",
    },
    fakeContent: {
      title: "PayPal",
      body: "The safer, easier way to pay online. Send and receive money securely.",
      bgColor: "#ffffff",
      accentColor: "#003087",
    },
    explanation:
      "The fake uses a 'i' instead of 'l' at the end - 'paypai.com' vs 'paypal.com'. In many fonts, these look identical!",
    difficulty: "easy",
  },

  {
    id: 4,
    realUrl: "https://support.apple.com",
    fakeUrl: "https://apple.support-verify.com",
    realContent: {
      title: "Apple Support",
      body: "Get help with your Apple devices. Find solutions, manuals, and support articles.",
      bgColor: "#f5f5f7",
      accentColor: "#0066cc",
    },
    fakeContent: {
      title: "Apple Support",
      body: "Get help with your Apple devices. Find solutions, manuals, and support articles.",
      bgColor: "#f5f5f7",
      accentColor: "#0066cc",
    },
    explanation:
      "The real Apple support page is 'support.apple.com' — the subdomain comes BEFORE the main domain. The fake uses 'apple.support-verify.com' where 'support-verify.com' is the actual domain!",
    difficulty: "medium",
  },
  {
    id: 5,
    realUrl: "https://accounts.google.com",
    fakeUrl: "https://google.accounts-signin.com",
    realContent: {
      title: "Sign in - Google Accounts",
      body: "Use your Google Account to sign in to services across the web.",
      bgColor: "#ffffff",
      accentColor: "#4285f4",
    },
    fakeContent: {
      title: "Sign in - Google Accounts",
      body: "Use your Google Account to sign in to services across the web.",
      bgColor: "#ffffff",
      accentColor: "#4285f4",
    },
    explanation:
      "The real Google sign-in is 'accounts.google.com' but the fake is 'google.accounts-signin.com'. Here, 'accounts-signin.com' is the actual domain, not 'google.com'!",
    difficulty: "medium",
  },
  {
    id: 6,
    realUrl: "https://login.microsoft.com",
    fakeUrl: "https://microsoft.login-secure.net",
    realContent: {
      title: "Microsoft Account",
      body: "Sign in to access your Microsoft account, Office apps, and cloud services.",
      bgColor: "#ffffff",
      accentColor: "#0078d4",
    },
    fakeContent: {
      title: "Microsoft Account",
      body: "Sign in to access your Microsoft account, Office apps, and cloud services.",
      bgColor: "#ffffff",
      accentColor: "#0078d4",
    },
    explanation:
      "Look at the domain structure! 'login.microsoft.com' means microsoft.com is the real domain. But 'microsoft.login-secure.net' has 'login-secure.net' as the actual domain!",
    difficulty: "medium",
  },
  {
    id: 7,
    realUrl: "https://www.netflix.com",
    fakeUrl: "https://netflix.billing-update.com",
    realContent: {
      title: "Netflix",
      body: "Watch TV shows and movies online. Stream on your favorite devices.",
      bgColor: "#141414",
      accentColor: "#e50914",
    },
    fakeContent: {
      title: "Netflix",
      body: "Watch TV shows and movies online. Stream on your favorite devices.",
      bgColor: "#141414",
      accentColor: "#e50914",
    },
    explanation:
      "The fake uses 'netflix.billing-update.com' - but 'billing-update.com' is the real domain here, not Netflix! Real Netflix billing is always on netflix.com.",
    difficulty: "medium",
  },
  {
    id: 8,
    realUrl: "https://secure.bankofamerica.com",
    fakeUrl: "https://secure-bankofamerica.login-verify.net",
    realContent: {
      title: "Bank of America - Online Banking",
      body: "Sign in to access your accounts, view statements, and manage your finances securely.",
      bgColor: "#ffffff",
      accentColor: "#012169",
    },
    fakeContent: {
      title: "Bank of America - URGENT: Verify Your Account",
      body: "⚠️ ACT NOW! Your account has been suspended. Verify immediately to restore access! This is your FINAL WARNING!",
      bgColor: "#fff8f8",
      accentColor: "#cc0000",
      hasUrgency: true,
    },
    explanation:
      "Red flags everywhere! 1) The URL uses 'login-verify.net' as the real domain. 2) Urgent language like 'ACT NOW' and 'FINAL WARNING' are classic phishing tactics. Real banks never threaten you like this!",
    difficulty: "hard",
  },
  {
    id: 9,
    realUrl: "https://www.irs.gov",
    fakeUrl: "https://irs-refund-claim.com",
    realContent: {
      title: "Internal Revenue Service | IRS",
      body: "Pay your taxes, check your refund status, and find tax forms and information.",
      bgColor: "#ffffff",
      accentColor: "#004b87",
    },
    fakeContent: {
      title: "IRS - CLAIM YOUR $1,500 REFUND NOW!",
      body: "🎉 CONGRATULATIONS! You have an unclaimed tax refund of $1,500! Click here within 24 HOURS or forfeit your money!",
      bgColor: "#fffef0",
      accentColor: "#228b22",
      hasUrgency: true,
    },
    explanation:
      "The IRS uses '.gov' domains exclusively! 'irs-refund-claim.com' is fake. Also, the IRS NEVER contacts you about refunds via urgent pop-ups or promises of money!",
    difficulty: "hard",
  },
  {
    id: 10,
    realUrl: "https://www.instagram.com",
    fakeUrl: "https://instagram-verify-badge.com",
    realContent: {
      title: "Instagram",
      body: "Create an account or log in to Instagram. Share photos and videos with friends.",
      bgColor: "#ffffff",
      accentColor: "#e1306c",
    },
    fakeContent: {
      title: "Instagram - FREE Verification Badge!",
      body: "🔵 Get your VERIFIED badge NOW! Limited time offer - only 50 spots left! Enter your password to claim!",
      bgColor: "#f0f8ff",
      accentColor: "#1da1f2",
      hasUrgency: true,
    },
    explanation:
      "Multiple red flags: 1) 'instagram-verify-badge.com' is not Instagram's domain. 2) Instagram never offers free verification badges. 3) Asking for your password on a sketchy site = scam!",
    difficulty: "hard",
  },
  {
    id: 11,
    realUrl: "https://web.whatsapp.com",
    fakeUrl: "https://whatsapp-web.online",
    realContent: {
      title: "WhatsApp Web",
      body: "Send and receive messages from your browser. Keep your phone connected.",
      bgColor: "#111b21",
      accentColor: "#25d366",
    },
    fakeContent: {
      title: "WhatsApp Web",
      body: "Send and receive messages from your browser. Keep your phone connected.",
      bgColor: "#111b21",
      accentColor: "#25d366",
    },
    explanation:
      "The real WhatsApp Web is 'web.whatsapp.com'. The fake 'whatsapp-web.online' uses a different domain entirely! Always check for the official .com domain.",
    difficulty: "easy",
  },
  {
    id: 12,
    realUrl: "https://www.linkedin.com",
    fakeUrl: "https://www.linkedln.com",
    realContent: {
      title: "LinkedIn",
      body: "Manage your professional identity. Build and engage with your professional network.",
      bgColor: "#ffffff",
      accentColor: "#0a66c2",
    },
    fakeContent: {
      title: "LinkedIn",
      body: "Manage your professional identity. Build and engage with your professional network.",
      bgColor: "#ffffff",
      accentColor: "#0a66c2",
    },
    explanation:
      "Sneaky! The fake uses 'linkedln.com' (linked-l-n) instead of the correct 'linkedin.com' (linked-i-n). In many sans-serif fonts, a lowercase 'l' looks identical to an uppercase 'I' or even a lowercase 'i'!",
    difficulty: "easy",
  },
  {
    id: 13,
    realUrl: "https://www.dropbox.com",
    fakeUrl: "https://dropbox.file-share-secure.com",
    realContent: {
      title: "Dropbox",
      body: "Store, share, and access files from anywhere. Keep your files safe and easy to find.",
      bgColor: "#ffffff",
      accentColor: "#0061fe",
    },
    fakeContent: {
      title: "Dropbox",
      body: "Store, share, and access files from anywhere. Keep your files safe and easy to find.",
      bgColor: "#ffffff",
      accentColor: "#0061fe",
    },
    explanation:
      "The fake domain is 'file-share-secure.com', NOT dropbox.com! 'dropbox' is just a subdomain on the phishing site. Real Dropbox links are always on dropbox.com.",
    difficulty: "medium",
  },
  {
    id: 14,
    realUrl: "https://x.com",
    fakeUrl: "https://twitter-x.account-verify.com",
    realContent: {
      title: "X (formerly Twitter)",
      body: "See what's happening in the world right now. Join the conversation.",
      bgColor: "#000000",
      accentColor: "#1d9bf0",
    },
    fakeContent: {
      title: "X - Verify Your Account",
      body: "⚠️ Your account will be suspended! Complete verification within 12 hours to keep your followers!",
      bgColor: "#1a1a1a",
      accentColor: "#ff6b00",
      hasUrgency: true,
    },
    explanation:
      "X (Twitter) uses 'x.com' or 'twitter.com'. The fake uses 'account-verify.com' as the real domain. Plus, the threatening language is a classic phishing tactic!",
    difficulty: "hard",
  },
  {
    id: 15,
    realUrl: "https://store.steampowered.com",
    fakeUrl: "https://steamcommunlty.com",
    realContent: {
      title: "Steam Store",
      body: "Browse and purchase games, software, and more. Join the Steam community.",
      bgColor: "#1b2838",
      accentColor: "#66c0f4",
    },
    fakeContent: {
      title: "Steam Store",
      body: "Browse and purchase games, software, and more. Join the Steam community.",
      bgColor: "#1b2838",
      accentColor: "#66c0f4",
    },
    explanation:
      "Very tricky! The fake uses 'steamcommunlty.com' with an 'l' (L) instead of 'steamcommunity.com' with an 'i' (I). Steam scams are extremely common - always double-check!",
    difficulty: "medium",
  },
  {
    id: 16,
    realUrl: "https://www.spotify.com",
    fakeUrl: "https://spotify.premium-free.net",
    realContent: {
      title: "Spotify",
      body: "Listen to music and podcasts for free. Millions of songs and episodes.",
      bgColor: "#121212",
      accentColor: "#1db954",
    },
    fakeContent: {
      title: "Spotify - FREE Premium Account!",
      body: "🎵 Get Spotify Premium for FREE! No credit card required! Just enter your login details!",
      bgColor: "#1a1a1a",
      accentColor: "#1db954",
      hasUrgency: true,
    },
    explanation:
      "The domain 'premium-free.net' is the scam! Spotify would never offer free Premium on a third-party site. If it sounds too good to be true, it's phishing!",
    difficulty: "hard",
  },
  {
    id: 17,
    realUrl: "https://www.facebook.com",
    fakeUrl: "https://www.faceb00k.com",
    realContent: {
      title: "Facebook",
      body: "Connect with friends and the world around you. Share photos, videos, and more.",
      bgColor: "#ffffff",
      accentColor: "#1877f2",
    },
    fakeContent: {
      title: "Facebook",
      body: "Connect with friends and the world around you. Share photos, videos, and more.",
      bgColor: "#ffffff",
      accentColor: "#1877f2",
    },
    explanation:
      "The fake uses 'faceb00k.com' with two zeros instead of 'facebook.com' with two letter O's. Classic typosquatting - numbers replacing letters!",
    difficulty: "easy",
  },
  {
    id: 18,
    realUrl: "https://secure.chase.com",
    fakeUrl: "https://chase.secure-banking-login.com",
    realContent: {
      title: "Chase Online Banking",
      body: "Sign in to manage your accounts, pay bills, and transfer money securely.",
      bgColor: "#ffffff",
      accentColor: "#117aca",
    },
    fakeContent: {
      title: "Chase - Security Alert!",
      body: "🔒 Unusual activity detected! Verify your identity NOW or your account will be locked in 24 hours!",
      bgColor: "#fff5f5",
      accentColor: "#cc0000",
      hasUrgency: true,
    },
    explanation:
      "The fake domain is 'secure-banking-login.com' - NOT chase.com! Banks never send urgent threats. If you're worried, go directly to chase.com by typing it yourself.",
    difficulty: "hard",
  },
  {
    id: 19,
    realUrl: "https://www.uber.com",
    fakeUrl: "https://uber.ride-promo-code.com",
    realContent: {
      title: "Uber",
      body: "Request a ride, get picked up. Food delivery from your favorite restaurants.",
      bgColor: "#000000",
      accentColor: "#ffffff",
    },
    fakeContent: {
      title: "Uber - $50 FREE Ride Credit!",
      body: "🚗 CONGRATULATIONS! You've been selected for $50 in free Uber credits! Claim within 1 hour!",
      bgColor: "#f0fff0",
      accentColor: "#00aa00",
      hasUrgency: true,
    },
    explanation:
      "The domain 'ride-promo-code.com' is fake! Real Uber promotions come from uber.com. The urgency and 'too good to be true' offer are red flags!",
    difficulty: "medium",
  },
  {
    id: 20,
    realUrl: "https://discord.com",
    fakeUrl: "https://discordapp.gift-nitro.com",
    realContent: {
      title: "Discord",
      body: "Your place to talk and hang out. Join gaming communities and chat with friends.",
      bgColor: "#313338",
      accentColor: "#5865f2",
    },
    fakeContent: {
      title: "Discord - FREE Nitro Gift!",
      body: "🎁 Someone sent you a FREE Discord Nitro gift! Click to claim before it expires in 48 hours!",
      bgColor: "#2b2d31",
      accentColor: "#f47fff",
      hasUrgency: true,
    },
    explanation:
      "Discord Nitro scams are everywhere! The real domain is 'discord.com', not 'gift-nitro.com'. Real Nitro gifts are claimed INSIDE the Discord app, never on external sites!",
    difficulty: "medium",
  },
  {
    id: 21,
    realUrl: "https://zoom.us",
    fakeUrl: "https://zoom-meeting-join.com",
    realContent: {
      title: "Zoom",
      body: "Video conferencing, web conferencing, and webinars. Connect with anyone, anywhere.",
      bgColor: "#ffffff",
      accentColor: "#2d8cff",
    },
    fakeContent: {
      title: "Zoom",
      body: "Video conferencing, web conferencing, and webinars. Connect with anyone, anywhere.",
      bgColor: "#ffffff",
      accentColor: "#2d8cff",
    },
    explanation:
      "Real Zoom uses 'zoom.us' domain! The fake 'zoom-meeting-join.com' is a completely different domain. Always check meeting links carefully!",
    difficulty: "easy",
  },
  {
    id: 22,
    realUrl: "https://github.com",
    fakeUrl: "https://githud.com",
    realContent: {
      title: "GitHub",
      body: "Where the world builds software. Millions of developers building together.",
      bgColor: "#0d1117",
      accentColor: "#238636",
    },
    fakeContent: {
      title: "GitHub",
      body: "Where the world builds software. Millions of developers building together.",
      bgColor: "#0d1117",
      accentColor: "#238636",
    },
    explanation:
      "The fake uses 'githud.com' with a 'd' instead of 'github.com' with a 'b'. These letters look similar - always double-check developer tool URLs!",
    difficulty: "easy",
  },
  {
    id: 23,
    realUrl: "https://www.coinbase.com",
    fakeUrl: "https://coinbase.wallet-verify.com",
    realContent: {
      title: "Coinbase",
      body: "Buy, sell, and manage your cryptocurrency. The most trusted crypto exchange.",
      bgColor: "#0052ff",
      accentColor: "#ffffff",
    },
    fakeContent: {
      title: "Coinbase - Wallet Verification Required",
      body: "⚠️ SECURITY ALERT: Verify your wallet within 24 hours or your funds will be frozen!",
      bgColor: "#1a1a2e",
      accentColor: "#ff4444",
      hasUrgency: true,
    },
    explanation:
      "Crypto scams are rampant! 'wallet-verify.com' is the real domain here, NOT coinbase.com. Coinbase will NEVER threaten to freeze your funds via a random website!",
    difficulty: "hard",
  },
  {
    id: 24,
    realUrl: "https://venmo.com",
    fakeUrl: "https://venmo-payment.secure-transfer.net",
    realContent: {
      title: "Venmo",
      body: "Send and receive money with friends. Split bills, pay rent, and more.",
      bgColor: "#ffffff",
      accentColor: "#3d95ce",
    },
    fakeContent: {
      title: "Venmo - Payment Pending!",
      body: "💰 You have $500 waiting! Someone sent you money. Log in NOW to claim before it expires!",
      bgColor: "#f5fffa",
      accentColor: "#228b22",
      hasUrgency: true,
    },
    explanation:
      "The domain 'secure-transfer.net' is fake! Real Venmo is only at venmo.com. The 'money waiting' trick creates urgency to make you act without thinking!",
    difficulty: "hard",
  },
  {
    id: 25,
    realUrl: "https://www.binance.com",
    fakeUrl: "https://binance-login.crypto-secure.io",
    realContent: {
      title: "Binance",
      body: "Buy, trade, and hold 350+ cryptocurrencies. The world's leading crypto exchange.",
      bgColor: "#181a20",
      accentColor: "#f0b90b",
    },
    fakeContent: {
      title: "Binance",
      body: "Buy, trade, and hold 350+ cryptocurrencies. The world's leading crypto exchange.",
      bgColor: "#181a20",
      accentColor: "#f0b90b",
    },
    explanation:
      "The actual domain is 'crypto-secure.io', NOT binance.com! Crypto exchange phishing is extremely common - always type the URL directly or use bookmarks!",
    difficulty: "medium",
  },
  {
    id: 26,
    realUrl: "https://mail.yahoo.com",
    fakeUrl: "https://yah00.mail-secure.com",
    realContent: {
      title: "Yahoo Mail",
      body: "Get organized with Yahoo Mail. Powerful search, smart filters, and 1TB storage.",
      bgColor: "#ffffff",
      accentColor: "#6001d2",
    },
    fakeContent: {
      title: "Yahoo Mail",
      body: "Get organized with Yahoo Mail. Powerful search, smart filters, and 1TB storage.",
      bgColor: "#ffffff",
      accentColor: "#6001d2",
    },
    explanation:
      "Two tricks here! 'yah00' uses zeros instead of 'o's, AND 'mail-secure.com' is the actual domain. Real Yahoo Mail is at mail.yahoo.com!",
    difficulty: "medium",
  },
  {
    id: 27,
    realUrl: "https://www.reddit.com",
    fakeUrl: "https://www.reddlt.com",
    realContent: {
      title: "Reddit",
      body: "Dive into anything. Communities for every topic imaginable.",
      bgColor: "#1a1a1b",
      accentColor: "#ff4500",
    },
    fakeContent: {
      title: "Reddit",
      body: "Dive into anything. Communities for every topic imaginable.",
      bgColor: "#1a1a1b",
      accentColor: "#ff4500",
    },
    explanation:
      "The fake uses 'reddlt.com' with an 'L' and 'T' instead of 'reddit.com' with 'I' and 'T'. The 'lt' looks like 'it' in many fonts!",
    difficulty: "easy",
  },
  {
    id: 28,
    realUrl: "https://www.tiktok.com",
    fakeUrl: "https://tiktok.creator-rewards.com",
    realContent: {
      title: "TikTok",
      body: "Make your day. Watch short videos and create your own.",
      bgColor: "#000000",
      accentColor: "#fe2c55",
    },
    fakeContent: {
      title: "TikTok Creator Fund - You're Eligible!",
      body: "🎉 CONGRATULATIONS! You qualify for $2,000/month in creator rewards! Apply in the next 30 minutes!",
      bgColor: "#0a0a0a",
      accentColor: "#00f2ea",
      hasUrgency: true,
    },
    explanation:
      "The domain 'creator-rewards.com' is fake! TikTok's Creator Fund is managed through the official app, never through external websites promising easy money!",
    difficulty: "hard",
  },
  {
    id: 29,
    realUrl: "https://www.twitch.tv",
    fakeUrl: "https://twitch.stream-drops.com",
    realContent: {
      title: "Twitch",
      body: "Watch live streams and chat with millions of gamers and creators.",
      bgColor: "#0e0e10",
      accentColor: "#9147ff",
    },
    fakeContent: {
      title: "Twitch - Claim Your FREE Drops!",
      body: "🎮 You have 5 unclaimed Twitch Drops! Link your Steam account NOW before they expire!",
      bgColor: "#18181b",
      accentColor: "#9147ff",
      hasUrgency: true,
    },
    explanation:
      "Fake Twitch Drops scam! 'stream-drops.com' is not Twitch. Real Drops are claimed on twitch.tv. Never link accounts through third-party sites!",
    difficulty: "medium",
  },
  {
    id: 30,
    realUrl: "https://www.adobe.com",
    fakeUrl: "https://adobe.license-renew.com",
    realContent: {
      title: "Adobe",
      body: "Creativity for all. Photoshop, Illustrator, Premiere Pro, and more.",
      bgColor: "#1a1a1a",
      accentColor: "#ff0000",
    },
    fakeContent: {
      title: "Adobe - License Expired!",
      body: "⚠️ Your Adobe subscription has expired! Renew NOW to avoid losing your files and settings!",
      bgColor: "#2a1a1a",
      accentColor: "#cc0000",
      hasUrgency: true,
    },
    explanation:
      "The domain 'license-renew.com' is fake! Adobe renewals happen on adobe.com. The threat of 'losing files' is a scare tactic - your local files are safe!",
    difficulty: "hard",
  },
  {
    id: 31,
    realUrl: "https://www.snapchat.com",
    fakeUrl: "https://snapchat-score.boost-free.com",
    realContent: {
      title: "Snapchat",
      body: "The fastest way to share a moment. Send snaps to friends and family.",
      bgColor: "#fffc00",
      accentColor: "#000000",
    },
    fakeContent: {
      title: "Snapchat - FREE Score Boost!",
      body: "🔥 Get 100,000 Snap Score instantly! Just enter your username and password!",
      bgColor: "#fffde7",
      accentColor: "#ff9800",
      hasUrgency: true,
    },
    explanation:
      "Score boost scams steal your account! 'boost-free.com' is the real domain. Snapchat Score can ONLY increase by using the real app - no hacks exist!",
    difficulty: "medium",
  },
  {
    id: 32,
    realUrl: "https://www.ebay.com",
    fakeUrl: "https://www.ebay-billing.com",
    realContent: {
      title: "eBay",
      body: "Buy and sell electronics, cars, fashion, collectibles, and more.",
      bgColor: "#ffffff",
      accentColor: "#e53238",
    },
    fakeContent: {
      title: "eBay",
      body: "Buy and sell electronics, cars, fashion, collectibles, and more.",
      bgColor: "#ffffff",
      accentColor: "#e53238",
    },
    explanation:
      "The domain 'ebay-billing.com' is completely separate from eBay! Real eBay billing is handled on ebay.com. Adding words with hyphens creates fake lookalike domains!",
    difficulty: "medium",
  },
  {
    id: 33,
    realUrl: "https://www.dhl.com",
    fakeUrl: "https://dhl-tracking.delivery-notice.com",
    realContent: {
      title: "DHL Express",
      body: "Track your shipment, schedule a pickup, and find shipping rates.",
      bgColor: "#ffcc00",
      accentColor: "#d40511",
    },
    fakeContent: {
      title: "DHL - Delivery Failed!",
      body: "📦 Your package couldn't be delivered! Pay $2.99 redelivery fee within 24 hours or it will be returned!",
      bgColor: "#fff9e6",
      accentColor: "#d40511",
      hasUrgency: true,
    },
    explanation:
      "Delivery scams are extremely common! 'delivery-notice.com' is fake. DHL never asks for fees via random websites. Track packages only on dhl.com!",
    difficulty: "hard",
  },
  {
    id: 34,
    realUrl: "https://hdfc.bank.in",
    fakeUrl: "https://hdfc.netbanking-secure.in",
    realContent: {
      title: "HDFC Bank NetBanking",
      body: "Access your accounts, transfer funds, pay bills, and manage your finances online.",
      bgColor: "#ffffff",
      accentColor: "#004c8f",
    },
    fakeContent: {
      title: "HDFC Bank NetBanking",
      body: "Access your accounts, transfer funds, pay bills, and manage your finances online.",
      bgColor: "#ffffff",
      accentColor: "#004c8f",
    },
    explanation:
      "The real HDFC NetBanking is 'hdfc.bank.in'. The fake uses 'netbanking-secure.in' as the domain with 'hdfc' as subdomain - a common trick!",
    difficulty: "medium",
  },
  {
    id: 35,
    realUrl: "https://sbi.bank.in",
    fakeUrl: "https://sbi.online-banking-login.com",
    realContent: {
      title: "SBI Online Banking",
      body: "State Bank of India - Internet Banking. Access your accounts securely.",
      bgColor: "#ffffff",
      accentColor: "#22409a",
    },
    fakeContent: {
      title: "SBI - Account Verification Required!",
      body: "🔒 Your account will be blocked! Complete KYC verification immediately to continue banking!",
      bgColor: "#fff5f5",
      accentColor: "#cc0000",
      hasUrgency: true,
    },
    explanation:
      "SBI uses 'sbi.bank.in' domain! The fake uses 'online-banking-login.com'. Also, SBI never sends threatening KYC messages via websites - visit your branch instead!",
    difficulty: "hard",
  },
  {
    id: 36,
    realUrl: "https://www.flipkart.com",
    fakeUrl: "https://flipkart.sale-offers.in",
    realContent: {
      title: "Flipkart",
      body: "India's leading e-commerce marketplace. Shop for electronics, fashion, and more.",
      bgColor: "#ffffff",
      accentColor: "#2874f0",
    },
    fakeContent: {
      title: "Flipkart - Exclusive Flash Sale!",
      body: "🎊 You won a ₹10,000 shopping voucher! Claim within 10 minutes before it expires!",
      bgColor: "#fff8e1",
      accentColor: "#ff9800",
      hasUrgency: true,
    },
    explanation:
      "The domain 'sale-offers.in' is fake! Real Flipkart sales are only on flipkart.com. Free voucher scams are designed to steal your payment details!",
    difficulty: "hard",
  },
  {
    id: 37,
    realUrl: "https://paytm.com",
    fakeUrl: "https://paytm.cashback-offer.in",
    realContent: {
      title: "Paytm",
      body: "India's largest digital payments platform. Pay bills, recharge, and shop online.",
      bgColor: "#00baf2",
      accentColor: "#ffffff",
    },
    fakeContent: {
      title: "Paytm - ₹500 Cashback Waiting!",
      body: "💸 You have ₹500 cashback pending! Link your bank account NOW to claim!",
      bgColor: "#e3f2fd",
      accentColor: "#00baf2",
      hasUrgency: true,
    },
    explanation:
      "The domain 'cashback-offer.in' is fake! Paytm cashback only appears in the official Paytm app. Never link bank accounts through third-party sites!",
    difficulty: "medium",
  },
  {
    id: 38,
    realUrl: "https://www.phonepe.com",
    fakeUrl: "https://phonepe.reward-claim.in",
    realContent: {
      title: "PhonePe",
      body: "UPI payments, money transfers, recharges, and bill payments made simple.",
      bgColor: "#5f259f",
      accentColor: "#ffffff",
    },
    fakeContent: {
      title: "PhonePe - Scratch Card Won!",
      body: "🎉 You won ₹1000! Complete verification to receive your prize in 24 hours!",
      bgColor: "#f3e5f5",
      accentColor: "#5f259f",
      hasUrgency: true,
    },
    explanation:
      "The domain 'reward-claim.in' is fake! PhonePe rewards are only inside the app. This scam tries to steal your UPI PIN or personal information!",
    difficulty: "medium",
  },
  {
    id: 39,
    realUrl: "https://www.zomato.com",
    fakeUrl: "https://zomato.free-delivery.in",
    realContent: {
      title: "Zomato",
      body: "Order food online from restaurants near you. Fast delivery to your doorstep.",
      bgColor: "#ffffff",
      accentColor: "#e23744",
    },
    fakeContent: {
      title: "Zomato - FREE Delivery Pass!",
      body: "🍕 Get FREE delivery for 1 year! Just pay ₹1 registration fee. Limited 100 spots!",
      bgColor: "#ffebee",
      accentColor: "#e23744",
      hasUrgency: true,
    },
    explanation:
      "The domain 'free-delivery.in' is fake! Zomato subscriptions are only on zomato.com or the app. The '₹1 fee' is to steal your card details!",
    difficulty: "hard",
  },
  {
    id: 40,
    realUrl: "https://www.swiggy.com",
    fakeUrl: "https://swiggy.voucher-gift.in",
    realContent: {
      title: "Swiggy",
      body: "Food delivery, groceries, and more delivered to your door in minutes.",
      bgColor: "#ffffff",
      accentColor: "#fc8019",
    },
    fakeContent: {
      title: "Swiggy - ₹200 Gift Voucher!",
      body: "🎁 You received a ₹200 Swiggy gift voucher! Redeem NOW - expires in 1 hour!",
      bgColor: "#fff3e0",
      accentColor: "#fc8019",
      hasUrgency: true,
    },
    explanation:
      "The domain 'voucher-gift.in' is fake! Swiggy vouchers are redeemed only on swiggy.com or the app. Fake voucher links steal your login credentials!",
    difficulty: "medium",
  },
  {
    id: 41,
    realUrl: "https://slack.com",
    fakeUrl: "https://slack.workspace-login.com",
    realContent: {
      title: "Slack",
      body: "Where work happens. Connect your team and tools in one place.",
      bgColor: "#4a154b",
      accentColor: "#ffffff",
    },
    fakeContent: {
      title: "Slack - Session Expired",
      body: "⚠️ Your Slack session has expired due to security reasons. Re-authenticate immediately!",
      bgColor: "#3d1340",
      accentColor: "#e01e5a",
      hasUrgency: true,
    },
    explanation:
      "The domain 'workspace-login.com' is fake! Slack logins happen on slack.com. Scammers target workplace tools to access company data!",
    difficulty: "medium",
  },
  {
    id: 42,
    realUrl: "https://www.notion.so",
    fakeUrl: "https://notion.document-share.com",
    realContent: {
      title: "Notion",
      body: "Write, plan, and get organized. All your docs and projects in one place.",
      bgColor: "#ffffff",
      accentColor: "#000000",
    },
    fakeContent: {
      title: "Notion",
      body: "Write, plan, and get organized. All your docs and projects in one place.",
      bgColor: "#ffffff",
      accentColor: "#000000",
    },
    explanation:
      "Notion uses 'notion.so' domain! The fake 'document-share.com' is a phishing site. Be careful with shared document links from unknown sources!",
    difficulty: "easy",
  },
  {
    id: 43,
    realUrl: "https://aws.amazon.com",
    fakeUrl: "https://aws.console-signin.net",
    realContent: {
      title: "Amazon Web Services",
      body: "Cloud computing services. Build, deploy, and scale applications.",
      bgColor: "#232f3e",
      accentColor: "#ff9900",
    },
    fakeContent: {
      title: "AWS - Billing Alert!",
      body: "🚨 URGENT: Unusual charges of $4,500 detected! Verify immediately to prevent suspension!",
      bgColor: "#2a1a1a",
      accentColor: "#ff0000",
      hasUrgency: true,
    },
    explanation:
      "AWS uses 'aws.amazon.com' domain! The fake 'console-signin.net' is a phishing site. AWS scams target developers and businesses - very dangerous!",
    difficulty: "hard",
  },
  {
    id: 44,
    realUrl: "https://www.cred.club",
    fakeUrl: "https://cred.coins-redeem.in",
    realContent: {
      title: "CRED",
      body: "Pay credit card bills and earn rewards. Exclusive deals for creditworthy members.",
      bgColor: "#0d0d0d",
      accentColor: "#ffffff",
    },
    fakeContent: {
      title: "CRED - 50,000 Coins Bonus!",
      body: "🪙 You've earned 50,000 bonus CRED coins! Redeem for ₹5,000 cashback NOW!",
      bgColor: "#1a1a1a",
      accentColor: "#c4a000",
      hasUrgency: true,
    },
    explanation:
      "CRED uses 'cred.club' domain! The fake 'coins-redeem.in' is a scam. CRED coins are redeemed only in the official app, never on external websites!",
    difficulty: "medium",
  },
  {
    id: 45,
    realUrl: "https://pay.google.com",
    fakeUrl: "https://googlepay.reward-cashback.in",
    realContent: {
      title: "Google Pay",
      body: "A safe and simple way to pay, send money, and earn rewards.",
      bgColor: "#ffffff",
      accentColor: "#4285f4",
    },
    fakeContent: {
      title: "GPay - Scratch Card Won!",
      body: "🎊 You won ₹1,000 cashback! Complete payment of ₹1 to claim your reward!",
      bgColor: "#e8f5e9",
      accentColor: "#34a853",
      hasUrgency: true,
    },
    explanation:
      "Google Pay is at 'pay.google.com'! The fake 'reward-cashback.in' is a scam. You should NEVER pay money to claim rewards - that's a huge red flag!",
    difficulty: "hard",
  },
  {
    id: 46,
    realUrl: "https://www.olx.in",
    fakeUrl: "https://olx.payment-secure.in",
    realContent: {
      title: "OLX India",
      body: "Buy and sell used goods locally. Find great deals on cars, mobiles, and more.",
      bgColor: "#002f34",
      accentColor: "#23e5db",
    },
    fakeContent: {
      title: "OLX - Buyer Payment Ready!",
      body: "💰 A buyer has sent ₹25,000 for your item! Click to receive payment in your bank account!",
      bgColor: "#e0f7fa",
      accentColor: "#00695c",
      hasUrgency: true,
    },
    explanation:
      "OLX scams are very common! 'payment-secure.in' is fake. OLX doesn't process payments - all money exchanges happen in person. Never click payment links!",
    difficulty: "hard",
  },
  {
    id: 47,
    realUrl: "https://www.makemytrip.com",
    fakeUrl: "https://makemytrip.booking-confirm.in",
    realContent: {
      title: "MakeMyTrip",
      body: "Book flights, hotels, and holiday packages. Best prices guaranteed.",
      bgColor: "#ffffff",
      accentColor: "#eb2026",
    },
    fakeContent: {
      title: "MakeMyTrip - Booking Failed!",
      body: "⚠️ Your flight booking payment failed! Complete payment within 30 minutes or lose your seats!",
      bgColor: "#fff8e1",
      accentColor: "#f57c00",
      hasUrgency: true,
    },
    explanation:
      "MakeMyTrip uses 'makemytrip.com'! The fake 'booking-confirm.in' is a scam. Always check your bookings directly on the official app or website!",
    difficulty: "medium",
  },
  {
    id: 48,
    realUrl: "https://www.myntra.com",
    fakeUrl: "https://myntra.fashion-sale.in",
    realContent: {
      title: "Myntra",
      body: "Online shopping for fashion and lifestyle. Top brands at best prices.",
      bgColor: "#ffffff",
      accentColor: "#ff3f6c",
    },
    fakeContent: {
      title: "Myntra - 90% OFF Sale!",
      body: "🔥 MEGA SALE: Everything at 90% off! Only for first 100 customers! Shop NOW!",
      bgColor: "#fce4ec",
      accentColor: "#ff3f6c",
      hasUrgency: true,
    },
    explanation:
      "The domain 'fashion-sale.in' is fake! Myntra sales are only on myntra.com. 90% off on everything is too good to be true - it's a scam to steal payment info!",
    difficulty: "medium",
  },
  {
    id: 49,
    realUrl: "https://www.bigbasket.com",
    fakeUrl: "https://bigbasket.free-delivery.in",
    realContent: {
      title: "BigBasket",
      body: "Online grocery shopping. Fresh fruits, vegetables, and daily essentials delivered.",
      bgColor: "#84c225",
      accentColor: "#ffffff",
    },
    fakeContent: {
      title: "BigBasket - FREE 1 Year Delivery!",
      body: "🛒 Get FREE delivery for 1 year! Pay just ₹49 registration. Limited 50 spots remaining!",
      bgColor: "#f1f8e9",
      accentColor: "#689f38",
      hasUrgency: true,
    },
    explanation:
      "The domain 'free-delivery.in' is fake! BigBasket subscriptions are only on bigbasket.com. The ₹49 fee is to steal your card details!",
    difficulty: "medium",
  },
  {
    id: 50,
    realUrl: "https://razorpay.com",
    fakeUrl: "https://razorpay.payment-gateway-secure.com",
    realContent: {
      title: "Razorpay",
      body: "Accept payments online. India's leading payment gateway for businesses.",
      bgColor: "#0c2651",
      accentColor: "#528ff0",
    },
    fakeContent: {
      title: "Razorpay",
      body: "Accept payments online. India's leading payment gateway for businesses.",
      bgColor: "#0c2651",
      accentColor: "#528ff0",
    },
    explanation:
      "Razorpay uses 'razorpay.com'! The fake 'payment-gateway-secure.com' looks legitimate but is a phishing site. Payment gateway scams can steal business funds!",
    difficulty: "hard",
  },
];

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getRandomScenarios(count: number = 5): Scenario[] {
  return shuffleArray(allScenarios).slice(0, count);
}

export const POINTS_PER_CORRECT = 100;
export const ROUNDS_PER_GAME = 5;
