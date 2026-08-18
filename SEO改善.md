# SEO改善
青木新樹選手応援サイト
https://shinju.bamba-ai.com/
のSEOを改善してください。

目的は、Googleで「青木 新樹」「青木新樹」「Shinju Aoki」と検索した際に、このサイトが青木新樹選手本人についての応援サイトであることをGoogleが正しく理解できるようにすることです。

Next.js App Routerの現在の実装を最初に確認し、以下について、すでに適切に設定されている項目は重複実装せず、不足している項目だけ追加・修正してください。

## 1. title

日本語トップページ：

青木 新樹（Shinju Aoki）公式応援サイト｜プロゴルファーへの挑戦

英語トップページ：

Shinju Aoki Official Support Site | Golfer

を基本案として、Next.js Metadata APIで適切に設定してください。

## 2. meta description

日本語トップページ：

プロゴルファーを目指す青木 新樹（Shinju Aoki）選手の公式応援サイト。プロフィール、競技情報、インタビュー、練習ラウンド、最新ニュース、サポーター情報を紹介します。

英語ページについても自然な英語のdescriptionを設定してください。

## 3. canonical

日本語トップページ：

https://shinju.bamba-ai.com/

英語トップページ：

https://shinju.bamba-ai.com/en/

をそれぞれcanonicalとして設定してください。

ニュース記事についても、それぞれ自分自身のURLをcanonicalとして設定してください。

## 4. hreflang

日本語版と英語版の対応関係をGoogleが理解できるようにしてください。

日本語：
ja

英語：
en

必要に応じてx-defaultも設定してください。

トップページだけでなく、日本語版・英語版が存在するニュース記事についても対応させてください。

## 5. Person構造化データ

トップページにJSON-LD形式でSchema.orgのPerson構造化データを追加してください。

基本情報：

@type: Person
name: 青木 新樹
alternateName: Shinju Aoki
birthDate: 2005-05-26
nationality: Japan
jobTitle: Golfer
url: https://shinju.bamba-ai.com/

サイト内に本人のプロフィール画像がある場合はimageも適切に設定してください。

本人の公式SNSやJGTO、PGA、JGA、ALBA等に青木新樹本人のページが存在し、本人であることが確実に確認できるURLについては、sameAsへの追加を検討してください。

推測したURLは使用しないでください。

## 6. WebSite構造化データ

サイト自体についても、必要であればWebSite構造化データを追加してください。

name:
青木 新樹選手 応援サイト

url:
https://shinju.bamba-ai.com/

## 7. OGP

SNSやLINEで共有された際にも適切に表示されるよう、

og:title
og:description
og:image
og:url
og:type

およびTwitter Cardを確認し、不足している場合は設定してください。

日本語ページと英語ページで適切な内容にしてください。

## 8. インデックス制御

公開ページに誤って

noindex
nofollow

が設定されていないことを確認してください。

robots.txtおよびsitemap.xmlはすでに作成済みなので、現在の正常な設定を壊さないでください。

## 9. 見出し構造

現在トップページのH1「青木 新樹」は維持してください。

H1をSEO目的で複数追加することはせず、H2以下の階層が自然になっているか確認してください。

## 10. 動作確認

修正後、以下を確認してください。

* npm buildが成功すること
* 日本語トップページが正常表示されること
* 英語トップページが正常表示されること
* ニュースページが正常表示されること
* sitemap.xmlが引き続き正常表示されること
* robots.txtが引き続き正常表示されること
* title / description / canonical / hreflangがHTMLに正しく出力されること
* Person JSON-LDが正しいJSONとして出力されること
* 既存デザインや機能を変更しないこと

最後に、変更したファイルと変更内容を簡潔に報告してください。
