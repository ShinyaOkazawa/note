import comp from "/Users/okazawashinya/Documents/vuepress-blog/docs/.vuepress/.temp/pages/posts/202407131543.html.vue"
const data = JSON.parse("{\"path\":\"/posts/202407131543.html\",\"title\":\"トリプルスラッシュ・ディレクティブ\",\"lang\":\"ja\",\"frontmatter\":{\"date\":\"2024-07-13T00:00:00.000Z\",\"category\":[\"Front-End\"],\"tag\":[\"TypeScript\"]},\"headers\":[],\"git\":{\"updatedTime\":1720854032000,\"contributors\":[{\"name\":\"ShinyaOkazawa\",\"email\":\"fess3idm@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"posts/202407131543.md\",\"excerpt\":\"\\n<p><a href=\\\"https://histoire.dev/guide/vue3/getting-started.html#typescript\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Histoire</a> を使う際の型定義で初めて目にした。</p>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token comment\\\">/// &lt;reference types=\\\"@histoire/plugin-vue/components\\\" /&gt;</span>\\n</code></pre></div>\"}")
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
