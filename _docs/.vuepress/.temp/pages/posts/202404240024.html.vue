<template><div><h1 id="同名省略記法" tabindex="-1"><a class="header-anchor" href="#同名省略記法"><span>同名省略記法</span></a></h1>
<p>バインドする値と属性が同じ名前を持っている場合、下記のように省略した記法ができる。
Vue3.4以上から使用できる。</p>
<p>小さいコンポーネントであれば使う機会がありそう。</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token string">'hoge'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:id</span><span class="token punctuation">></span></span>hoge<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://ja.vuejs.org/guide/essentials/template-syntax.html#same-name-shorthand" target="_blank" rel="noopener noreferrer">同名省略記法<ExternalLinkIcon/></a>と呼ぶらしい。</p>
</div></template>


