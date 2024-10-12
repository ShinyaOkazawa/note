import comp from "/Users/okazawashinya/Documents/vuepress-blog/docs/.vuepress/.temp/pages/posts/202410121237.html.vue"
const data = JSON.parse("{\"path\":\"/posts/202410121237.html\",\"title\":\"VitePress について調べてみる\",\"lang\":\"ja\",\"frontmatter\":{\"date\":\"2024-10-12T00:00:00.000Z\",\"category\":[\"Front-End\"],\"tag\":[\"VitePress\"]},\"headers\":[{\"level\":2,\"title\":\"VitePress とは\",\"slug\":\"vitepress-とは\",\"link\":\"#vitepress-とは\",\"children\":[]},{\"level\":2,\"title\":\"VuePress と VitePress の違い\",\"slug\":\"vuepress-と-vitepress-の違い\",\"link\":\"#vuepress-と-vitepress-の違い\",\"children\":[]},{\"level\":2,\"title\":\"参考\",\"slug\":\"参考\",\"link\":\"#参考\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"posts/202410121237.md\",\"excerpt\":\"\\n<p>本ブログを VuePress から VitePress に移行しようと思っているので VitePress について調べることにする。</p>\\n<h2>VitePress とは</h2>\\n<p>高速でコンテンツ中心のウェブサイトを構築するよう設計された静的サイトジェネレータ。\\nコンテンツは Markdown で書かれる。</p>\\n<p>Vue.js の公式ドキュメントも VitePress で作られているらしい。</p>\\n<p>Vite + Vue で作られているからカスタマイズもしやすいと。</p>\\n<h2>VuePress と VitePress の違い</h2>\\n<p>VuePress は Vue + webpack。\\nVitePress は Vue + vite。</p>\"}")
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
