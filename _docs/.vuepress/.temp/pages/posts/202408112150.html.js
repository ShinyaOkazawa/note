import comp from "/Users/okazawashinya/Documents/vuepress-blog/docs/.vuepress/.temp/pages/posts/202408112150.html.vue"
const data = JSON.parse("{\"path\":\"/posts/202408112150.html\",\"title\":\"import のファイルパス補完には tsconfig の設定が必要\",\"lang\":\"ja\",\"frontmatter\":{\"date\":\"2024-08-11T00:00:00.000Z\",\"category\":[\"Front-End\"],\"tag\":[\"Vite\"]},\"headers\":[],\"git\":{\"updatedTime\":1723381592000,\"contributors\":[{\"name\":\"ShinyaOkazawa\",\"email\":\"fess3idm@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"posts/202408112150.md\",\"excerpt\":\"\\n<p>Vite 環境、VSCode でコーディングするときに、パスの補完がされないと自力で相対パスを書かないといけないので面倒すぎる。</p>\\n<p>必要な設定は2つ。</p>\\n<p>vite 設定 の resolve.alias に解決したいパスを指定。</p>\\n<div class=\\\"language-vite.config.mjs\\\" data-ext=\\\"vite.config.mjs\\\" data-title=\\\"vite.config.mjs\\\"><pre class=\\\"language-vite.config.mjs\\\"><code>export default defineConfig({\\n  plugins: [vue()],\\n  resolve: {\\n    alias: {\\n      '@': fileURLToPath(new URL('./src', import.meta.url))\\n    }\\n  }\\n})\\n</code></pre></div>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
