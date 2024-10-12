import comp from "/Users/okazawashinya/Documents/vuepress-starter/docs/.vuepress/.temp/pages/home/index.html.vue"
const data = JSON.parse("{\"path\":\"/home/\",\"title\":\"Timeline\",\"lang\":\"ja\",\"frontmatter\":{\"title\":\"Timeline\",\"sidebar\":false,\"blog\":{\"type\":\"type\",\"key\":\"home\"},\"layout\":\"Timeline\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
