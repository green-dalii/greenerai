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
        locales: { en: 'en', zh: 'zh' },
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
  },
});
