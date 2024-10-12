<template><div><h1 id="import-のファイルパス補完には-tsconfig-の設定が必要" tabindex="-1"><a class="header-anchor" href="#import-のファイルパス補完には-tsconfig-の設定が必要"><span>import のファイルパス補完には tsconfig の設定が必要</span></a></h1>
<p>Vite 環境、VSCode でコーディングするときに、パスの補完がされないと自力で相対パスを書かないといけないので面倒すぎる。</p>
<p>必要な設定は2つ。</p>
<p>vite 設定 の resolve.alias に解決したいパスを指定。</p>
<div class="language-vite.config.mjs line-numbers-mode" data-ext="vite.config.mjs" data-title="vite.config.mjs"><pre v-pre class="language-vite.config.mjs"><code>export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tsconfig.json の compilarOptions.paths にもパスを指定。</p>
<div class="language-tsconfig.json line-numbers-mode" data-ext="tsconfig.json" data-title="tsconfig.json"><pre v-pre class="language-tsconfig.json"><code>{
  &quot;compilerOptions&quot;: {
    &quot;baseUrl&quot;: &quot;.&quot;,
    &quot;paths&quot;: {
      &quot;@/*&quot;: [&quot;src/*&quot;]
    },
  },
  &quot;exclude&quot;: [&quot;node_modules&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>これで <code v-pre>@</code> まで入力すれば、src ディレクトリ配下のパスを候補として挙げてくれる。</p>
</div></template>


