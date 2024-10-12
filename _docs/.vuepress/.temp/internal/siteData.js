export const siteData = JSON.parse("{\"base\":\"/note/\",\"lang\":\"ja\",\"title\":\"ザワのメモ帳\",\"description\":\"自分のメモ帳。日々気づいたことを一口メモの大きさで綴っていく。\",\"head\":[[\"meta\",{\"name\":\"robots\",\"content\":\"noindex\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/note/images/me.png\"}],[\"link\",{\"rel\":\"apple-touch-icon\",\"sizes\":\"180x180\",\"href\":\"/note/images/me.png\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-title\",\"content\":\"ザワメモ\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
