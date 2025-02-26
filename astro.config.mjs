import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://mirror.winx.run',
	integrations: [
		starlight({
			title: 'WinX-M',
			logo: {src: './src/assets/winx.webp',},
			favicon: '/favicon.ico',
			pagination: false,
			social: {
				github: 'https://github.com/winx-ipfs/Mirror-Web',
			},
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			head: [
				// 示例：添加 Fathom 分析脚本标签。
				{
					tag: 'link',
					attrs: {
						rel: "sitemap",
						href: '/sitemap-index.xml',
					},
				},
			],
			sidebar: [
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