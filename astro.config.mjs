// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// NOTE: site 域名占位（greenerai.top 为产品子域根，部署域名确定后更新）
export default defineConfig({
  site: 'https://greenerai.top',
  output: 'static',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', zh: 'zh-CN' },
      },
      // /og-card 是分享卡的渲染源（供截图用）、/404 本身是 noindex —— 都不进 sitemap
      filter: (page) => !page.includes('/og-card') && !page.includes('/404'),
      // @astrojs/sitemap 的 i18n 只按 locales 生成 alternate，不含 x-default。
      // 页面 head 里已经声明了 x-default，sitemap 不补就与页面不一致。
      serialize(item) {
        const links = Array.isArray(item.links) ? item.links : [];
        if (!links.some((l) => l.lang === 'x-default')) {
          item.links = [...links, { lang: 'x-default', url: 'https://greenerai.top/' }];
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false, // EN: /, ZH: /zh/
    },
  },
  build: {
    assets: 'assets',
    /* 全站只有 2 个页面、CSS 共 48KB（brotli 后 ~9KB）。
       两个 render-blocking 样式表各要一个 RTT，比内联进 HTML 更贵。 */
    inlineStylesheets: 'always',
  },
});
