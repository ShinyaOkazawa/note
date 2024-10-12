import comp from "/Users/okazawashinya/Documents/vuepress-blog/docs/.vuepress/.temp/pages/posts/202404131457.html.vue"
const data = JSON.parse("{\"path\":\"/posts/202404131457.html\",\"title\":\"記事ファイル作成スクリプトを作った\",\"lang\":\"ja\",\"frontmatter\":{\"date\":\"2024-04-13T00:00:00.000Z\",\"category\":[\"misc\"],\"tag\":[\"Node.js\",\"ts-node\"]},\"headers\":[],\"git\":{\"updatedTime\":1713887161000,\"contributors\":[{\"name\":\"ShinyaOkazawa\",\"email\":\"fess3idm@gmail.com\",\"commits\":2}]},\"filePathRelative\":\"posts/202404131457.md\",\"excerpt\":\"\\n<ul>\\n<li>Node.js v20.10.0</li>\\n</ul>\\n<p>VuePress で記事を書くときにファイル名を考えること、作成することが面倒だったためスクリプトを実行して半自動的にファイルを作成することにした。</p>\\n<p>スクリプトは TypeScript で書きたいので ts-node をインストールしてスクリプトを実行したところ下記のエラーが発生した。</p>\\n<div class=\\\"language-text\\\" data-ext=\\\"text\\\" data-title=\\\"text\\\"><pre class=\\\"language-text\\\"><code>TypeError: Unknown file extension \\\".ts\\\"\\n</code></pre></div>\"}")
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
