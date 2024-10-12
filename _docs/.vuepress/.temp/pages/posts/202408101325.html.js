import comp from "/Users/okazawashinya/Documents/vuepress-blog/docs/.vuepress/.temp/pages/posts/202408101325.html.vue"
const data = JSON.parse("{\"path\":\"/posts/202408101325.html\",\"title\":\"Biome は一旦お預け\",\"lang\":\"ja\",\"frontmatter\":{\"date\":\"2024-08-10T00:00:00.000Z\",\"category\":[\"Front-End\"],\"tag\":[\"formatter\"]},\"headers\":[],\"git\":{\"updatedTime\":1723264150000,\"contributors\":[{\"name\":\"ShinyaOkazawa\",\"email\":\"fess3idm@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"posts/202408101325.md\",\"excerpt\":\"\\n<p>コードフォーマットの機能がある Biome は .vue ファイルは <code>&lt;script&gt;</code> タグ部分のみが現在サポートされている。</p>\\n<p><a href=\\\"https://biomejs.dev/ja/internals/language-support/#:~:text=.vue%20%E3%81%8A%E3%82%88%E3%81%B3%20.svelte%20%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%A7%E3%81%AF%E3%80%81%3Cscript%3E%E3%82%BF%E3%82%B0%E9%83%A8%E5%88%86%E3%81%AE%E3%81%BF%E3%81%8C%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">参照</a></p>\"}")
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
