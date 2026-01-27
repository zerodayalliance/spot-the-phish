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

export const scenarios: Scenario[] = [
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
    id: 3,
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
];

export const POINTS_PER_CORRECT = 100;
export const TOTAL_ROUNDS = scenarios.length;
