import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点的标题。使用默认主题时，这将显示在导航栏中。
  title: "WinX-M",
  // 站点的描述。这将呈现为页面 HTML 中的 <meta> 标签
  description: "一个由IPFS支持的镜像站",
  // 要在页面 HTML 的 <head> 标签中呈现的其他元素
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 设置网站favicon
  ],
  // 为站点生成 sitemap.xml 文件
  sitemap: {
    hostname: 'https://mirror.winx.run' // 站点地图的主机名配置
  },
  // 站点的默认语言
  lang: 'zh-CN',
  // 从 URL 中删除 .html 后缀
  cleanUrls: true,
  // 深色模式
  appearance: true,
  // 配置 Markdown 解析器选项
  markdown: {},
  // 将原始 Vite 配置传递给内部 Vite 开发服务器 / bundler
  vite: {},
  // 将原始的 @vitejs/plugin-vue 选项传递给内部插件实例
  vue: {},
  // 主题相关配置
  themeConfig: {
    // 导航栏上显示的 Logo
    logo: {
      light: '/winx-light.ico', // 浅色模式下的 logo 路径
      dark: '/winx-dark.ico' // 深色模式下的 logo 路径
    },
    // 在导航栏中展示带有图标的社交帐户链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/winx-ipfs/Mirror-Web/' } // GitHub仓库链接
    ],
    // 页脚配置
    footer: {
      message: 'Released under the MIT License.', // 页脚消息
      copyright: 'Copyright © 2019-present Evan You' // 版权声明
    },
    // 全局禁用上一页/下一页链接
    docFooter: {
      prev: false, // 禁用上一页链接
      next: false, // 禁用下一页链接
    },
    // 全局大纲显示设置
    outline: {
      level: [2, 6],  // 控制大纲显示的标题级别范围（h2到h6）
      label: '快速导航'  // 大纲标题文本
    },
    // 导航菜单项的配置
    nav: [
      { text: '首页', link: '/', }, // 导航栏"首页"链接
      { text: '镜像', link: '/mirror', } // 导航栏"镜像"链接
    ],
    // 侧边栏菜单项的配置
    sidebar: [
      { text: '简介', link: '/mirror', }, // 侧边栏"简介"链接
      { // Windows系统版本及其版本的侧边栏链接配置
        text: 'Windows 系统', // Windows系统镜像侧边栏链接配置
        items: [
          {
            text: "Windows 11", // Windows 11 版本的侧边栏链接配置
            collapsed: true, // 侧边栏组可折叠并且默认折叠
            items: [
              {text: '24H2',link: '/windows/11/24h2',},
              {text: '23H2',link: '/windows/11/23h2',},
              {text: '22H2',link: '/windows/11/22h2',},
              {text: '21H2',link: '/windows/11/21h2',},
              {text: 'LTSC',link: '/windows/11/ltsc',},
              {text: 'ARM',link: '/windows/11/arm',},
              {text: 'Preview',link: '/windows/11/preview',},
            ],
          },
          {
            text: "Windows 10", // Windows 10 版本的侧边栏链接配置
            collapsed: true, // 侧边栏组可折叠并且默认折叠
            items: [
              {text: '22H2',link: '/windows/10/22h2',},
              {text: '21H2',link: '/windows/10/21h2',},
              {text: '21H1',link: '/windows/10/21h1',},
              {text: '20H2',link: '/windows/10/20h2',},
              {text: '2004',link: '/windows/10/2004',},
              {text: '1909',link: '/windows/10/1909',},
              {text: '1903',link: '/windows/10/1903',},
              {text: '1809',link: '/windows/10/1809',},
              {text: '1803',link: '/windows/10/1803',},
              {text: '1709',link: '/windows/10/1709',},
              {text: '1703',link: '/windows/10/1703',},
              {text: '1607',link: '/windows/10/1607',},
              {text: '1511',link: '/windows/10/1511',},
              {text: '1507',link: '/windows/10/1507',},
              {text: 'LTSC',link: '/windows/10/ltsc',},
              {text: 'LTSB',link: '/windows/10/ltsb',},
              {text: 'ARM',link: '/windows/10/arm',},
            ],
          },
          {
            text: "Windows 8.1", // Windows 8.1 版本的侧边栏链接配置
            collapsed: true, // 侧边栏组可折叠并且默认折叠
            items: [
              {text: 'Update',link: '/windows/8.1/update',},
              {text: 'RTM',link: '/windows/8.1/rtm',},
            ],
          },
          {
            text: "Windows 8", // Windows 8 版本的侧边栏链接配置
            collapsed: true, // 侧边栏组可折叠并且默认折叠
            items: [
              {text: 'RTM',link: '/windows/8/rtm',},
            ],
          },
          {
            text: "Windows 7", // Windows 7 版本的侧边栏链接配置
            collapsed: true, // 侧边栏组可折叠并且默认折叠
            items: [
              {text: '2019',link: '/windows/7/2019',},
              {text: 'SP1',link: '/windows/7/sp1',},
              {text: 'RTM',link: '/windows/7/rtm',},
            ],
          },
          {
            text: "Windows Vista", // Windows Vista 版本的侧边栏链接配置
            collapsed: true, // 侧边栏组可折叠并且默认折叠
            items: [
              {text: 'SP2',link: '/windows/vista/sp2',},
              {text: 'SP1',link: '/windows/vista/sp1',},
              {text: 'RTM',link: '/windows/vista/rtm',},
            ],
          },
          {
            text: "Windows XP", // Windows XP 版本的侧边栏链接配置
            collapsed: true, // 侧边栏组可折叠并且默认折叠
            items: [
              {text: 'SP3',link: '/windows/xp/sp3',},
              {text: 'SP2',link: '/windows/xp/sp2',},
              {text: 'SP1',link: '/windows/xp/sp1',},
              {text: 'XP Mode',link: '/windows/xp/xpmode',},
              {text: 'MediaCenter',link: '/windows/xp/mediacenter',},
              {text: 'TabletPC',link: '/windows/xp/tabletpc',},
              {text: 'RTM',link: '/windows/xp/rtm',},
            ],
          },
        ],
      },
      { // Linux系统版本及其版本的侧边栏链接配置
        text: 'Linux 系统', // Linux系统镜像侧边栏链接配置
        autogenerate: { directory: 'linux' },
      },
      { // 国产系统版本及其版本的侧边栏链接配置
        text: '国产系统', // 国产系统镜像侧边栏链接配置
        autogenerate: { directory: 'cnos' },
      },
    ],
  },
})
