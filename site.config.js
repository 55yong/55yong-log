const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Yongjun OH",
    image: "/55yong.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Front-End Developer",
    bio: "멋쟁이사자처럼 12기 (영남이공대학교 1기) 프론트엔드 개발자",
    email: "rmdir@kakao.com",
    linkedin: "",
    github: "55yong",
    instagram: "55yong_",
  },
  projects: [
    {
      name: `프론트엔드 스터디`,
      href: "https://github.com/55yong/Frontend-Study",
    },
  ],
  // blog setting (required)
  blog: {
    title: "55yong-log",
    description: "오용의 기술, 잡담용 블로그",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://55yong.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
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
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "55yong/55yong-log",
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
