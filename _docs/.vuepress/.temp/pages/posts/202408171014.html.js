import comp from "/Users/okazawashinya/Documents/vuepress-blog/docs/.vuepress/.temp/pages/posts/202408171014.html.vue"
const data = JSON.parse("{\"path\":\"/posts/202408171014.html\",\"title\":\"CSS の clamp 関数を使ってみた\",\"lang\":\"ja\",\"frontmatter\":{\"date\":\"2024-08-17T00:00:00.000Z\",\"category\":[\"Front-End\"],\"tag\":[\"CSS\",\"clamp\"]},\"headers\":[{\"level\":2,\"title\":\"関連\",\"slug\":\"関連\",\"link\":\"#関連\",\"children\":[]}],\"git\":{\"updatedTime\":1723857967000,\"contributors\":[{\"name\":\"ShinyaOkazawa\",\"email\":\"fess3idm@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"posts/202408171014.md\",\"excerpt\":\"\\n<p>clamp とは CSS の数学関数の1つ。\\n使い方はこう。</p>\\n<div class=\\\"language-css\\\" data-ext=\\\"css\\\" data-title=\\\"css\\\"><pre class=\\\"language-css\\\"><code><span class=\\\"token property\\\">width</span><span class=\\\"token punctuation\\\">:</span> <span class=\\\"token function\\\">clamp</span><span class=\\\"token punctuation\\\">(</span>最小値<span class=\\\"token punctuation\\\">,</span>推奨値<span class=\\\"token punctuation\\\">,</span>最大値<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
