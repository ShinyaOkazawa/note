import comp from "/Users/okazawashinya/Documents/vuepress-blog/docs/.vuepress/.temp/pages/tag/vite/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/vite/\",\"title\":\"Tag Vite\",\"lang\":\"ja\",\"frontmatter\":{\"title\":\"Tag Vite\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"Vite\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
