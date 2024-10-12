import comp from "/Users/okazawashinya/Documents/vuepress-blog/docs/.vuepress/.temp/pages/posts/202405181111.html.vue"
const data = JSON.parse("{\"path\":\"/posts/202405181111.html\",\"title\":\"QCD とは\",\"lang\":\"ja\",\"frontmatter\":{\"date\":\"2024-05-18T00:00:00.000Z\",\"category\":[\"misc\"],\"tag\":[\"quality\",\"QCD\"]},\"headers\":[],\"git\":{\"updatedTime\":1716003192000,\"contributors\":[{\"name\":\"ShinyaOkazawa\",\"email\":\"fess3idm@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"posts/202405181111.md\",\"excerpt\":\"\\n<blockquote>\\n<p>QCDFとは、品質(Quality)、価格(Cost)、納期や入手性(Delivery)、柔軟性(Flexibility)の頭文字をとったもので、製造業における開発生産業務の評価における指標のひとつである。</p>\\n</blockquote>\\n<blockquote>\\n<p>よりよいものを生産するための資料とする。</p>\\n</blockquote>\\n<p><a href=\\\"https://ja.wikipedia.org/wiki/QCDF\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">引用元</a></p>\\n<p>「よりよいものを生産するため」という言葉はシステム開発の品質管理においても共感できる。</p>\"}")
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
