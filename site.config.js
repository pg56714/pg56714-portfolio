const CONFIG = {
  // your domain link
  link: process.env.PUBLIC_URL || "http://localhost:3000",
  useFirebase: {
    enable: false, // If you want to use Firebase, set this to true. In the future, we might develop a backend file management system.
    config: {
      host: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "",
    },
  },
  head: {
    title: "Portfolio | Sam Hong - Software Engineer",
    description: "I'm Sam Hong, software engineer based in Taipei, Taiwan.",
    keywords:
      "Sam Hong, portfolio, sam, software engineer, nextjs portfolio, portfolio design, portfolio website, personal portfolio",
    site_name: "Sam Hong's Portfolio",
    url: process.env.PUBLIC_URL || "http://localhost:3000",
    author: "Sam Hong",
    lang: "en",
    image: "https://pg56714-portfolio.vercel.app/portfolio-fork.png",
  },
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
};

module.exports = { CONFIG };
