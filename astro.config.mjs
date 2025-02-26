import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'WinX',
			// 为此网站设置英语为默认语言。
			defaultLocale: 'zh-cn',
			locales: {
				// 简体中文文档在 `src/content/docs/zh-cn/` 中。
				"zh-cn": {
					label: '简体中文',
					lang: 'zh-CN',
				},
				// 英文文档在 `src/content/docs/en/` 中。
				en: {
					label: 'English',
					lang: 'en',
				},
			},
			pagination: false,
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: '首页',
					translations: {
						'en': 'Home',
					},
					link: '/',
				},
				{
					label: 'Windows 系统',
					translations: {
						'en': 'Windows',
					},
					items: [
						{
							label: '11',
							collapsed: true,
							items: [
								{
									label: '22H2',
									link: '/windows/11/22h2',
								},
							],
						},
					],
				},
				{
					label: 'Linux',
					autogenerate: { directory: 'linux' },
				},
			],
		}),
	],
});