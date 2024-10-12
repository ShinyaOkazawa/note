<template><div><h1 id="記事ファイル作成スクリプトを作った" tabindex="-1"><a class="header-anchor" href="#記事ファイル作成スクリプトを作った"><span>記事ファイル作成スクリプトを作った</span></a></h1>
<ul>
<li>Node.js v20.10.0</li>
</ul>
<p>VuePress で記事を書くときにファイル名を考えること、作成することが面倒だったためスクリプトを実行して半自動的にファイルを作成することにした。</p>
<p>スクリプトは TypeScript で書きたいので ts-node をインストールしてスクリプトを実行したところ下記のエラーが発生した。</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>TypeError: Unknown file extension ".ts"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>少し調べて解決できなかったのと、基本的にメンテナンスしないスクリプトなので一旦諦め JS で作成した。</p>
<p>スクリプトの内容は ChatGPT に作ってもらったのを少し修正を加えただけなので速攻できた。</p>
</div></template>


