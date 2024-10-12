<template><div><h1 id="vuepress-で作ったサイトを公開" tabindex="-1"><a class="header-anchor" href="#vuepress-で作ったサイトを公開"><span>VuePress で作ったサイトを公開</span></a></h1>
<p>GitHub Pages を使うのは初めてだったが簡単に公開まで出来た。
GitHub ワークフローの設定を <code v-pre>.github/workflows/deploy-docs.yml</code> に書いているので、main ブランチにプッシュすることでワークフローが開始、gh-pages ブランチにビルドされたコードがデプロイされる。GitHub のリポジトリ設定で利用するブランチを gh-pages に指定すれば公開された URL を確認できる。</p>
</div></template>


