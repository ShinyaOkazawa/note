import comp from "/Users/okazawashinya/Documents/vuepress-blog/docs/.vuepress/.temp/pages/posts/202404240024.html.vue"
const data = JSON.parse("{\"path\":\"/posts/202404240024.html\",\"title\":\"同名省略記法\",\"lang\":\"ja\",\"frontmatter\":{\"date\":\"2024-04-24T00:00:00.000Z\",\"category\":[\"Front-End\"],\"tag\":[\"Vue.js\"]},\"headers\":[],\"git\":{\"updatedTime\":1713887291000,\"contributors\":[{\"name\":\"ShinyaOkazawa\",\"email\":\"fess3idm@gmail.com\",\"commits\":3}]},\"filePathRelative\":\"posts/202404240024.md\",\"excerpt\":\"\\n<p>バインドする値と属性が同じ名前を持っている場合、下記のように省略した記法ができる。\\nVue3.4以上から使用できる。</p>\\n<p>小さいコンポーネントであれば使う機会がありそう。</p>\\n<div class=\\\"language-vue\\\" data-ext=\\\"vue\\\" data-title=\\\"vue\\\"><pre class=\\\"language-vue\\\"><code><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>script</span> <span class=\\\"token attr-name\\\">setup</span> <span class=\\\"token attr-name\\\">lang</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>ts<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token script\\\"><span class=\\\"token language-javascript\\\">\\n<span class=\\\"token keyword\\\">const</span> id <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">'hoge'</span>\\n</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>script</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>template</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>div</span> <span class=\\\"token attr-name\\\">:id</span><span class=\\\"token punctuation\\\">&gt;</span></span>hoge<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>div</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>template</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n</code></pre></div>\"}")
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
