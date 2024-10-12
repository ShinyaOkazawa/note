import comp from "/Users/okazawashinya/Documents/vuepress-blog/docs/.vuepress/.temp/pages/category/front-end/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/front-end/\",\"title\":\"Category Front-End\",\"lang\":\"ja\",\"frontmatter\":{\"title\":\"Category Front-End\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"Front-End\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
