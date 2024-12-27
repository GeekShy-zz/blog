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
          text: "JavaScript",
          items: [
            { text: "学习记录", link: "/es6/" },
            { text: "数据类型", link: "/es6/数据类型" },
            { text: "js加法运算法则", link: "/es6/加法运算法则" },
            { text: "赋值运算符", link: "/es6/赋值运算符" },
            { text: "对象遍历属性", link: "/es6/对象遍历属性" },
            { text: "位运算应用", link: "/es6/位运算应用" },
            { text: "判等运算符", link: "/es6/判等运算符" },
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
      ],
      '/algorithm': [
        { 
          text: "算法", 
          items: [
            { text: '数组求和', link: '/algorithm/index' }
          ]
        }
      ],
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
