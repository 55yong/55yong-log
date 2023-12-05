const CONFIG = {
  // profile setting (required)
  profile: {
    name: "IT's",
    image: "/logo.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "IT's 동아리 홈페이지",
    bio: "학습과 교류를 통해 개개인의 역량을 키워주는 동아리",
    email: "rmdir@kakao.com",
    linkedin: "",
    github: "",
    instagram: "ync_its",
  },
  projects: [
    {
      name: `IT's 대나무숲`,
      href: "https://padlet.com/a56986631/it-s-seistm8ti1tlux4i",
    },
  ],
  // blog setting (required)
  blog: {
    title: "IT's HomePage",
    description: "IT's 동아리 홈페이지에 오신 것을 환영합니다!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://yncits.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "55yong/IT-s-HomePage",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
