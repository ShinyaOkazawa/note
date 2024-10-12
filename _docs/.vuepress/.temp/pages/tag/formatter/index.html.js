import comp from "/Users/okazawashinya/Documents/vuepress-blog/docs/.vuepress/.temp/pages/tag/formatter/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/formatter/\",\"title\":\"Tag formatter\",\"lang\":\"ja\",\"frontmatter\":{\"title\":\"Tag formatter\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"formatter\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
