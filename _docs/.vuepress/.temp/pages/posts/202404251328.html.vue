<template><div><h1 id="disabled-属性は空でも-truthy-になる" tabindex="-1"><a class="header-anchor" href="#disabled-属性は空でも-truthy-になる"><span>disabled 属性は空でも truthy になる</span></a></h1>
<p>disabled 属性は空の場合も truthy になるので注意。
基本的には boolean によって disabled 属性の付け外しを行うのが紛らわしくなくて良い。</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="https://ja.vuejs.org/guide/essentials/template-syntax.html#boolean-attributes" target="_blank" rel="noopener noreferrer">ブーリアン属性<ExternalLinkIcon/></a></p>
</div></template>


