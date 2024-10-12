import comp from "/Users/okazawashinya/Documents/vuepress-blog/docs/.vuepress/.temp/pages/posts/202404141109.html.vue"
const data = JSON.parse("{\"path\":\"/posts/202404141109.html\",\"title\":\"VuePress で作ったサイトを公開\",\"lang\":\"ja\",\"frontmatter\":{\"date\":\"2024-04-14T00:00:00.000Z\",\"category\":[\"misc\"],\"tag\":[\"GitHub Pages\"]},\"headers\":[],\"git\":{\"updatedTime\":1713887161000,\"contributors\":[{\"name\":\"ShinyaOkazawa\",\"email\":\"fess3idm@gmail.com\",\"commits\":2}]},\"filePathRelative\":\"posts/202404141109.md\",\"excerpt\":\"\\n<p>GitHub Pages を使うのは初めてだったが簡単に公開まで出来た。\\nGitHub ワークフローの設定を <code>.github/workflows/deploy-docs.yml</code> に書いているので、main ブランチにプッシュすることでワークフローが開始、gh-pages ブランチにビルドされたコードがデプロイされる。GitHub のリポジトリ設定で利用するブランチを gh-pages に指定すれば公開された URL を確認できる。</p>\\n\"}")
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
