# 青木 新樹選手 応援サイト

このリポジトリは、プロゴルファーを目指す青木 新樹選手の応援サイトです。

ホームページURL: https://bamba-ai.com/shinju

## 青木 新樹選手について

生年月日：2005年5月26日
年齢：21歳
出身地：東京都
身長：180cm
体重：75～80kg
血液型：AB型
出身校：ロスミニ・カレッジ
所属：フリー
ゴルフ開始：8～9歳ごろ
始めたきっかけ：父親の影響
得意クラブ：パター
ドライバー平均飛距離：約300ヤード
ベストスコア：63
現在の区分：アマチュア

## サポーター募集

青木 新樹君の挑戦を応援してくださる個人サポーター、企業・店舗スポンサー、応援メッセージを募集しています。

## 画像素材
`images` フォルダ以下には、青木 新樹選手のホームページで利用する画像・動画素材を配置します。

- Bamba AIのロゴ
- ビジョンのイメージ
- LINEのQRコード

サイト内で必要に応じて適宜利用してください。

## 技術要件

- フロントエンド: Next.js（App Router）
- ホスティング: Cloudflare Pages
- ドメイン: bamba-ai.com（Cloudflareで取得済み）
- ホームページURL: https://bamba-ai.com/shinju
- コード管理: https://github.com/bamba-ai/shinju
- CI/CD: GitHubのソースコードを更新すると、自動的にCloudflare Pagesも更新される構成にする

## Cloudflare Pages の設定

このサイトは Next.js の静的エクスポートで配信します。Cloudflare Pages では以下の設定にしてください。

| 項目 | 値 |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Deploy command | 空欄 |

`npx wrangler deploy` は Workers 用のデプロイコマンドです。このサイトで実行すると OpenNext/Workers 変換が走り、`.next/standalone/.next/server/pages-manifest.json` が見つからず失敗します。
