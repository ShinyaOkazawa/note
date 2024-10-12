import comp from "/Users/okazawashinya/Documents/vuepress-starter/docs/.vuepress/.temp/pages/tag/ww/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/ww/\",\"title\":\"Tag WW\",\"lang\":\"ja\",\"frontmatter\":{\"title\":\"Tag WW\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"WW\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
