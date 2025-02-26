# Mirror-Web

## 一个由IPFS支持的镜像站

## 项目基于

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

---

## 🚀 项目结构

在 Astro + Starlight 项目中，将看到以下文件夹和文件：

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight 在 `src/content/docs/` 目录中查找 `.md` 和 `.mdx` 文件。

每个文件都基于其文件名显示为一条路径。


图片可以添加到 `src/assets/` 并通过相对链接嵌入到 Markdown 中。

静态资产， 例如图标，都可以放在 `public/` 目录中。

## 🧞 指令

所有命令都是从项目根目录的终端运行的：

| 命令                     | 运行                                   |
|:-----------------------|:-------------------------------------|
| `yarn install`         | 安装依赖项                                |
| `yarn dev`             | 在 `localhost:4321` 上启动本地开发服务器        |
| `yarn build`           | 构建站点到 `./dist/` 目录                   |
| `yarn preview`         | 在部署之前在本地预览构建                         |
| `yarn astro ...`       | 运行CLI命令 如 `astro add`, `astro check` |
| `yarn astro -- --help` | 获取使用 Astro CLI 的帮助                   |

## 👀 想了解更多吗？

查看 [Starlight’s docs](https://starlight.astro.build/)，阅读 [the Astro documentation](https://docs.astro.build)，或者跳转到 [Astro Discord server](https://astro.build/chat)服务器。
