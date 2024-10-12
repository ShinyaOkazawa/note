import comp from "/Users/okazawashinya/Documents/vuepress-blog/docs/.vuepress/.temp/pages/posts/202404251328.html.vue"
const data = JSON.parse("{\"path\":\"/posts/202404251328.html\",\"title\":\"disabled 属性は空でも truthy になる\",\"lang\":\"ja\",\"frontmatter\":{\"date\":\"2024-04-25T00:00:00.000Z\",\"category\":[\"Front-End\"],\"tag\":[\"Vue.js\"]},\"headers\":[],\"git\":{\"updatedTime\":1714019536000,\"contributors\":[{\"name\":\"ShinyaOkazawa\",\"email\":\"fess3idm@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"posts/202404251328.md\",\"excerpt\":\"\\n<p>disabled 属性は空の場合も truthy になるので注意。\\n基本的には boolean によって disabled 属性の付け外しを行うのが紛らわしくなくて良い。</p>\\n<div class=\\\"language-vue\\\" data-ext=\\\"vue\\\" data-title=\\\"vue\\\"><pre class=\\\"language-vue\\\"><code><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>input</span> <span class=\\\"token attr-name\\\">type</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>text<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">disabled</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span><span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n</code></pre></div>\"}")
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
