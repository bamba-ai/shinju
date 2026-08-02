# 青木 新樹選手 応援サイト

このリポジトリは、プロゴルファーを目指す青木 新樹選手の応援サイトです。

ホームページURL: https://shinju.bamba-ai.com

## 青木 新樹選手について

生年月日：2005年5月26日
年齢：21歳
出身地：東京都
身長：180cm
体重：80kg
血液型：AB型
出身校：ロスミニ・カレッジ
所属：フリー
ゴルフ開始：8～9歳ごろ
始めたきっかけ：父親の影響
得意クラブ：パター
ドライバー平均飛距離：約300ヤード
ベストスコア：63
現在の区分：アマチュア

## インタビュー動画
インタビュー動画をWebサイト内に埋め込んでください。
https://youtu.be/fZdz47UGSuY

## サポーター募集
青木 新樹君の挑戦を応援してくださる個人サポーター、企業・店舗スポンサー、応援メッセージを募集しています。

## 画像素材
`images` フォルダ以下には、青木 新樹選手のホームページで利用する画像・動画素材を配置します。

サイト内で必要に応じて適宜利用してください。

サイトで配信する動画は `images/optimized` の軽量版 MP4 を使います。Cloudflare の静的アセット制限に収めるため、ビルド時は `images/optimized` だけを `public/media` に同期します。

## 技術要件

- フロントエンド: Next.js（App Router）
- ホスティング: Cloudflare Pages
- ドメイン: bamba-ai.com（Cloudflareで取得済み）
- ホームページURL: https://shinju.bamba-ai.com
- コード管理: https://github.com/bamba-ai/shinju
- CI/CD: GitHubのソースコードを更新すると、自動的にCloudflare Pagesも更新される構成にする

## Cloudflare Pages の設定

このサイトは Next.js の静的エクスポートで配信します。Cloudflare Pages では以下の設定にしてください。

| 項目 | 値 |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Deploy command | `npm run deploy` |

Custom domain には以下を追加してください。

- `shinju.bamba-ai.com`

Git連携の Pages プロジェクトで Deploy command の入力欄がない場合は、ビルド後に `out` ディレクトリが自動的にアップロードされます。

Cloudflare のログに `Executing user deploy command: npx wrangler deploy` が出ている場合は、Workers 用のデプロイコマンドが残っています。`npx wrangler deploy` は使わず、Cloudflare 側の Deploy command を `npm run deploy` に変更してください。

Cloudflare の画面で直接コマンドを指定する場合は、以下でも構いません。

- `npx wrangler pages deploy out --project-name shinju`
- `npm run deploy:pages`

古い設定で `npx wrangler deploy` が実行されても落ちないよう、`wrangler.jsonc` では `assets.directory` に `./out` を指定しています。
