<template><div><h1 id="トリプルスラッシュ・ディレクティブ" tabindex="-1"><a class="header-anchor" href="#トリプルスラッシュ・ディレクティブ"><span>トリプルスラッシュ・ディレクティブ</span></a></h1>
<p><a href="https://histoire.dev/guide/vue3/getting-started.html#typescript" target="_blank" rel="noopener noreferrer">Histoire<ExternalLinkIcon/></a> を使う際の型定義で初めて目にした。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token comment">/// &lt;reference types="@histoire/plugin-vue/components" /></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>TypeScript独自の形式でコンパイラに対して指示を出す機能を持っています。</p>
</blockquote>
<p><a href="https://typescriptbook.jp/reference/declaration-file#%E3%83%88%E3%83%AA%E3%83%97%E3%83%AB%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%86%E3%82%A3%E3%83%96" target="_blank" rel="noopener noreferrer">引用元<ExternalLinkIcon/></a></p>
<p>参照ディレクティブ、型ディレクティブと種類があるみたいだが、上記の例は型ディレクティブである。
npm パッケージへの依存関係を宣言でき、型を import しているようなもの。</p>
<p>Histoire の例で言うと、<a href="https://github.com/histoire-dev/histoire/blob/main/packages/histoire-plugin-vue/components.d.ts" target="_blank" rel="noopener noreferrer">https://github.com/histoire-dev/histoire/blob/main/packages/histoire-plugin-vue/components.d.ts<ExternalLinkIcon/></a>を読み込むものと思われる。</p>
</div></template>


