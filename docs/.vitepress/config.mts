import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Final Form*",
  description: "A VitePress Site",
  themeConfig: {
    logo: "/G2.jpg",
    nav: [
      { text: "首页", link: "/" },
      { text: "前端", link: "/frontend" },
      { text: '计算机基础', link: '/cs'},
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },

    search: {
      provider: 'local',
    },
  },
});
