import comp from "/Users/okazawashinya/Documents/vuepress-blog/docs/.vuepress/.temp/pages/posts/202405150029.html.vue"
const data = JSON.parse("{\"path\":\"/posts/202405150029.html\",\"title\":\"リアクティブは ref が推奨される\",\"lang\":\"ja\",\"frontmatter\":{\"date\":\"2024-05-15T00:00:00.000Z\",\"category\":[\"Front-End\"],\"tag\":[\"Vue.js\"]},\"headers\":[],\"git\":{\"updatedTime\":1715701208000,\"contributors\":[{\"name\":\"ShinyaOkazawa\",\"email\":\"fess3idm@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"posts/202405150029.md\",\"excerpt\":\"\\n<p>以下の理由によりリアクティブな状態の宣言は ref が推奨されるとのこと。\\n分割代入はうっかりやりそうだなと思った。</p>\\n<ul>\\n<li>オブジェクト型に対してのみ機能する</li>\\n<li>オブジェクト全体を置換できない</li>\\n<li>分割代入できない</li>\\n</ul>\\n<p><a href=\\\"https://ja.vuejs.org/guide/essentials/reactivity-fundamentals.html#limitations-of-reactive\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">reactive()の制限</a></p>\"}")
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
