import comp from "/Users/okazawashinya/Documents/vuepress-blog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"ja\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"layout\":\"Timeline\"},\"headers\":[],\"git\":{\"updatedTime\":1713017589000,\"contributors\":[{\"name\":\"ShinyaOkazawa\",\"email\":\"fess3idm@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"index.md\"}")
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
