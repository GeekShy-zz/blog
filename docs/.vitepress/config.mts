import { defineConfig } from "vitepress";
import frontItems from "./frontend.mjs";
import csItems from "./cs.mjs";
import exampleItems from './example.mjs';

export default defineConfig({
  title: "Final Form*",
  description: "A VitePress Site",
  themeConfig: {
    logo: "/G2.jpg",

    nav: [
      { text: "首页", link: "/" },
      { text: "前端", items: [{ text: "前端", items: frontItems }] },
      { text: "计算机基础", items: [{ text: "计算机基础", items: csItems }] },
      { text: "示例", items: [{ text: "示例", items: exampleItems }] },
    ],

    sidebar: {
      '/es6': [
        {
          text: "ES6+",
          items: [
            { text: "异步处理", link: "/es6/" },
            { text: "迭代器与生成器", link: "/es6/generator" },
          ],
        }
      ],
      '/react': [
        {
          text: "React",
          items: [
            { text: "hooks", link: "/react/" },
            { text: "自定义hook", link: "/react/hook" },
          ],
        }
      ],
      '/webpack': [
        { 
          text: "Webpack", 
          items: [
            { text: '' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },

    search: {
      provider: "local",
    },
  },
});
