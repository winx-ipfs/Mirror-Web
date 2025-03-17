import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://mirror.winx.run',
	integrations: [
		starlight({
			title: 'WinX-M', // 设置网站标题
			description: '一个基于 IPFS 的镜像站', // 设置网站描述
			logo: { // 在导航栏中设置一个 logo 图片
				light: './src/assets/winx-light.svg', // 导航栏中浅色模式 logo 图片
				dark: './src/assets/winx-dark.svg',}, // 导航栏中深色模式 logo 图片
			tableOfContents: { // 配置每个页面右侧显示的目录
				minHeadingLevel: 2, // 从 <h2> 开始
				maxHeadingLevel: 4, }, // 到 <h4> 结束
			editLink: { // 启用 “编辑此页” 链接
				baseUrl: 'https://github.com/winx-ipfs/Mirror-Web/edit/develop/', // 设置 “编辑此页” 链接
			},
			locales: { // 设置多语言
				root: { // 不用设置语言目录
					label: '简体中文', // 设置网站支持简体中文作为语言
					lang: 'zh-CN', // 向浏览器告知页面语言
					dir: 'ltr', // 设置网站为从左到右
				},
			},
			defaultLocale: 'zh-CN', // 为网站设置简体中文作为默认语言
			social: { // 社交媒体账户详情
				github: 'https://github.com/winx-ipfs/Mirror-Web', // 添加 GitHub 社交媒体账户详情
			},
			// customCss: [ // 使用 CSS 文件来自定义 Starlight 网站的外观和风格
			// 		'./src/custom-styles.css', // 使用本地css
			// 		'@fontsource/roboto' // 使用模块css
			// ],
			expressiveCode: { // 代码块设置
				styleOverrides: { // 代码块样式
					borderRadius: '0.5rem' }, // 设置 0.5rem 的圆角
			},
			pagefind: true, // 开启网站搜索
			prerender: true, // 让网站为静态生成
			head: [ // 自定义标签到 Starlight 网站的 <head> 中
				{
					tag: 'link',
					attrs: {
						rel: "sitemap",
						href: '/sitemap-index.xml',
					},
				},
				{
					tag: 'script',
					attrs: {
						src: '/js/clarity.js',
					},
				},
			],
			lastUpdated: false, // 控制页脚是否显示页面上次更新的时间
			pagination: false, // 定义页脚是否应包含上一页和下一页的链接
			favicon: '/favicon.svg', // 设置网站的默认 favicon 的路径
			titleDelimiter: '|', // 设置在页面的 <title> 标签里页面标题和网站标题之间的分隔符
			disable404Route: false, // 自定义 404 页面
			components: { // 提供组件的路径来覆盖 Starlight 的默认实现
				// SocialLinks: './src/components/MySocialLinks.astro',
			},
			plugins: [ // 使用自定义插件扩展 Starlight
				// starlightPlugin()
			],
			credits: true, // 启用网站页脚显示 “基于 Starlight 构建” 的链接。
			sidebar: [ // 配置网站的侧边栏导航项目
				{
					label: '首页',
					link: '/',
				},
				{
					label: '帮助',
					link: 'help',
				},
				{
					label: 'Windows 系统',
					items: [
						{
							label: "Windows 11",
							collapsed: true,
							items: [
								{label: '24H2',link: '/windows/11/24h2',},
								{label: '23H2',link: '/windows/11/23h2',},
								{label: '22H2',link: '/windows/11/22h2',},
								{label: '21H2',link: '/windows/11/21h2',},
								{label: 'LTSC',link: '/windows/11/ltsc',},
								{label: 'ARM',link: '/windows/11/arm',},
								{label: 'Preview',link: '/windows/11/preview',},
							],
						},
						{
							label: "Windows 10",
							collapsed: true,
							items: [
								{label: '22H2',link: '/windows/10/22h2',},
								{label: '21H2',link: '/windows/10/21h2',},
								{label: '21H1',link: '/windows/10/21h1',},
								{label: '20H2',link: '/windows/10/20h2',},
								{label: '2004',link: '/windows/10/2004',},
								{label: '1909',link: '/windows/10/1909',},
								{label: '1903',link: '/windows/10/1903',},
								{label: '1809',link: '/windows/10/1809',},
								{label: '1803',link: '/windows/10/1803',},
								{label: '1709',link: '/windows/10/1709',},
								{label: '1703',link: '/windows/10/1703',},
								{label: '1607',link: '/windows/10/1607',},
								{label: '1511',link: '/windows/10/1511',},
								{label: '1507',link: '/windows/10/1507',},
								{label: 'LTSC',link: '/windows/10/ltsc',},
								{label: 'LTSB',link: '/windows/10/ltsb',},
								{label: 'ARM',link: '/windows/10/arm',},
							],
						},
						{
							label: "Windows 8.1",
							collapsed: true,
							items: [
								{label: 'Update',link: '/windows/8.1/update',},
								{label: 'RTM',link: '/windows/8.1/rtm',},
							],
						},
						{
							label: "Windows 8",
							collapsed: true,
							items: [
								{label: 'RTM',link: '/windows/8/rtm',},
							],
						},
						{
							label: "Windows 7",
							collapsed: true,
							items: [
								{label: '2019',link: '/windows/7/2019',},
								{label: 'SP1',link: '/windows/7/sp1',},
								{label: 'RTM',link: '/windows/7/rtm',},
							],
						},
						{
							label: "Windows Vista",
							collapsed: true,
							items: [
								{label: 'SP2',link: '/windows/vista/sp2',},
								{label: 'SP1',link: '/windows/vista/sp1',},
								{label: 'RTM',link: '/windows/vista/rtm',},
							],
						},
						{
							label: "Windows XP",
							collapsed: true,
							items: [
								{label: 'SP3',link: '/windows/xp/sp3',},
								{label: 'SP2',link: '/windows/xp/sp2',},
								{label: 'SP1',link: '/windows/xp/sp1',},
								{label: 'XP Mode',link: '/windows/xp/xpmode',},
								{label: 'MediaCenter',link: '/windows/xp/mediacenter',},
								{label: 'TabletPC',link: '/windows/xp/tabletpc',},
								{label: 'RTM',link: '/windows/xp/rtm',},
							],
						},
					],
				},
				{
					label: "Linux系统",
					collapsed: true,
					items: [
					  {
						label: "Ubuntu",
						collapsed: true,
						items: [
						  { label: "24.04 LTS", link: "/linux/ubuntu/24-04" },
						  { label: "22.04 LTS", link: "/linux/ubuntu/22-04" },
						  { label: "20.04 LTS", link: "/linux/ubuntu/20-04" },
						  { label: "18.04 LTS", link: "/linux/ubuntu/18-04" },
						  { label: "非 LTS 版本", link: "/linux/ubuntu/non-lts" }
						]
					  },
					  {
						label: "Debian",
						collapsed: true,
						items: [
						  { label: "Bookworm (12)", link: "/linux/debian/12" },
						  { label: "Bullseye (11)", link: "/linux/debian/11" },
						  { label: "Buster (10)", link: "/linux/debian/10" },
						  { label: "Testing", link: "/linux/debian/testing" },
						  { label: "Unstable (Sid)", link: "/linux/debian/unstable" }
						]
					  },
					  {
						label: "Arch Linux",
						collapsed: true,
						items: [
						  { label: "最新稳定版", link: "/linux/arch/stable" },
						  { label: "滚动更新", link: "/linux/arch/rolling" }
						]
					  },
					  {
						label: "Fedora",
						collapsed: true,
						items: [
						  { label: "40", link: "/linux/fedora/40" },
						  { label: "39", link: "/linux/fedora/39" },
						  { label: "38", link: "/linux/fedora/38" },
						  { label: "Rawhide", link: "/linux/fedora/rawhide" }
						]
					  },
					  {
						label: "openSUSE",
						collapsed: true,
						items: [
						  { label: "Leap 15.6", link: "/linux/opensuse/leap-15-6" },
						  { label: "Leap 15.5", link: "/linux/opensuse/leap-15-5" },
						  { label: "Tumbleweed", link: "/linux/opensuse/tumbleweed" }
						]
					  },
					  {
						label: "Alpine Linux",
						collapsed: true,
						items: [
						  { label: "3.19", link: "/linux/alpine/3-19" },
						  { label: "3.18", link: "/linux/alpine/3-18" },
						  { label: "Edge", link: "/linux/alpine/edge" }
						]
					  }
					]
				  },				  
				{
					label: '国产系统',
					collapsed: true,
					autogenerate: { directory: 'linux' },
				},
			],
		}),
	],
});

  