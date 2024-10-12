<template><div><h1 id="css-の-clamp-関数を使ってみた" tabindex="-1"><a class="header-anchor" href="#css-の-clamp-関数を使ってみた"><span>CSS の clamp 関数を使ってみた</span></a></h1>
<p>clamp とは CSS の数学関数の1つ。
使い方はこう。</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">clamp</span><span class="token punctuation">(</span>最小値<span class="token punctuation">,</span>推奨値<span class="token punctuation">,</span>最大値<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ボタンの幅に適用するユースケースが考えられる。
モバイルでは小さくなりすぎないように最小幅を決めて、デスクトップでは大きすぎてボタンに見えなくならないように最大幅を決めておく。
それ以外の中間のビューポートを持つデバイスに向けては相対的な推奨幅を指定しておくといった感じ。</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">button</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">clamp</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 50%<span class="token punctuation">,</span> 300px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推奨値で指定している相対値はビューポートもしくは内包されている親要素の幅に依存するみたい。</p>
<ul>
<li><a href="https://codepen.io/sowork/pen/PorEVQE" target="_blank" rel="noopener noreferrer">Code Pen<ExternalLinkIcon/></a></li>
</ul>
<h2 id="関連" tabindex="-1"><a class="header-anchor" href="#関連"><span>関連</span></a></h2>
<ul>
<li><a href="https://developer.mozilla.org/ja/docs/Web/CSS/clamp" target="_blank" rel="noopener noreferrer">MDN<ExternalLinkIcon/></a></li>
<li><a href="https://coliss.com/articles/build-websites/operation/css/clamp-calculator-for-calculating-viewport-based-clamped-values.html" target="_blank" rel="noopener noreferrer">最近よく使用されているCSSの実装テクニック！ レスポンシブ対応のフォントサイズをclamp()で超簡単に定義できるツール -clamp() Calculator<ExternalLinkIcon/></a></li>
<li><a href="https://coliss.com/articles/build-websites/operation/css/css-about-min-max-clamp.html" target="_blank" rel="noopener noreferrer">CSSの比較関数が便利すぎる！ min(), max(), clamp()の使い方を詳しく解説<ExternalLinkIcon/></a></li>
</ul>
</div></template>


