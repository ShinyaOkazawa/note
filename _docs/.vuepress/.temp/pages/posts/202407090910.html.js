import comp from "/Users/okazawashinya/Documents/vuepress-blog/docs/.vuepress/.temp/pages/posts/202407090910.html.vue"
const data = JSON.parse("{\"path\":\"/posts/202407090910.html\",\"title\":\"Slack通知を試してみた\",\"lang\":\"ja\",\"frontmatter\":{\"date\":\"2024-07-09T00:00:00.000Z\",\"category\":[\"misc\"],\"tag\":[\"Slack\"]},\"headers\":[{\"level\":2,\"title\":\"方法\",\"slug\":\"方法\",\"link\":\"#方法\",\"children\":[]}],\"git\":{\"updatedTime\":1720484095000,\"contributors\":[{\"name\":\"ShinyaOkazawa\",\"email\":\"fess3idm@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"posts/202407090910.md\",\"excerpt\":\"\\n<p>GitHub のリポジトリに push したら Slack に通知する仕組みを作ってみた。</p>\\n<h2>方法</h2>\\n<ul>\\n<li>Slack で Incoming Webhooks の設定をする</li>\\n<li>Webhook URL を GitHub の対象リポジトリの Settings にて Secrets に設定する</li>\\n<li>Secrets に設定した定数を用いて .github/workflows/slack-notify.yml を作成する</li>\\n</ul>\\n\"}")
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
