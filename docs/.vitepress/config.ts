import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ja',
  title: "ザワのメモ帳",
  description: "自分のメモ帳。日々気づいたことを一口メモの大きさで綴っていく。",
  head: [
    ['meta', { name: 'robots', content: 'noindex'}],
    ['link', { rel: 'icon', href: '/note/images/me.png'}],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/note/images/me.png'}],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'ザワメモ'}]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
  }
})
