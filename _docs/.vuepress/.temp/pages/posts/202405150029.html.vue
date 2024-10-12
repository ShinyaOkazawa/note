<template><div><h1 id="リアクティブは-ref-が推奨される" tabindex="-1"><a class="header-anchor" href="#リアクティブは-ref-が推奨される"><span>リアクティブは ref が推奨される</span></a></h1>
<p>以下の理由によりリアクティブな状態の宣言は ref が推奨されるとのこと。
分割代入はうっかりやりそうだなと思った。</p>
<ul>
<li>オブジェクト型に対してのみ機能する</li>
<li>オブジェクト全体を置換できない</li>
<li>分割代入できない</li>
</ul>
<p><a href="https://ja.vuejs.org/guide/essentials/reactivity-fundamentals.html#limitations-of-reactive" target="_blank" rel="noopener noreferrer">reactive()の制限<ExternalLinkIcon/></a></p>
</div></template>


