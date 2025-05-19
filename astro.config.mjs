import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightDocSearch from '@astrojs/starlight-docsearch';

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
			social: [ // 社交媒体账户详情
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/winx-ipfs/Mirror-Web' }, // 添加 GitHub 社交媒体账户详情
			],
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
				starlightDocSearch({
					appId: 'R12YJAPH2R',
					apiKey: '0bce914754e280c1c721f4c862c4992d',
					indexName: 'mirror-winx',
				}),
			],
			credits: true, // 启用网站页脚显示 “基于 Starlight 构建” 的链接。
			sidebar: [ // 配置网站的侧边栏导航项目
				{
					label: '首页',
					link: '/',
				},
				{
					label: '帮助',
					collapsed: true,
					items: [
						{label: '欢迎来到 IPFS 文档',link: '/windows/help/ipfs',},
					],
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
								{label: 'Update',link: '/windows/8_1/update',},
								{label: 'RTM',link: '/windows/8_1/rtm',},
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
						{
							label: "Windows PE",
							collapsed: true,
							items: [
								{label: '微PE',link: '/windows/pe/tinype',},
								{label: 'FirPE',link: '/windows/pe/firpe',},
								{label: 'HotPE',link: '/windows/pe/hotpe',},
								{label: '优启通',link: '/windows/pe/easyu',},
								{label: '雷电PE',link: '/windows/pe/lightningpe',},
								{label: 'USBOS',link: '/windows/pe/usbos',},
								{label: 'H3PE',link: '/windows/pe/h3pe',},
								{label: 'Ventoy',link: '/windows/pe/ventoy',},
							],
						},
					],
				},
				{
					label: 'Linux 系统',
					collapsed: true,
					autogenerate: { directory: 'linux' },
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