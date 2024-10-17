import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/note/',
  lang: 'ja',
  title: "ザワのメモ帳",
  description: "自分のメモ帳。日々気づいたことを一口メモの大きさで綴っていく。",
  head: [
    ['meta', { name: 'robots', content: 'noindex'}],
    ['link', { rel: 'icon', href: '/note/icon.png'}],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/note/icon.png'}],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'ザワメモ'}],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com'}],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''}],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Noto+Sans+JP&display=swap'}],
  ],
  appearance: 'dark'
})
