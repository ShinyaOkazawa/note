<template><div><h1 id="slack通知を試してみた" tabindex="-1"><a class="header-anchor" href="#slack通知を試してみた"><span>Slack通知を試してみた</span></a></h1>
<p>GitHub のリポジトリに push したら Slack に通知する仕組みを作ってみた。</p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法</span></a></h2>
<ul>
<li>Slack で Incoming Webhooks の設定をする</li>
<li>Webhook URL を GitHub の対象リポジトリの Settings にて Secrets に設定する</li>
<li>Secrets に設定した定数を用いて .github/workflows/slack-notify.yml を作成する</li>
</ul>
</div></template>


