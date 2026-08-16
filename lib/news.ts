import fs from "node:fs";
import path from "node:path";

export type NewsArticle = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  paragraphs: string[];
  details?: Array<[string, string]>;
  images?: Array<{ src: string; alt: string }>;
  link?: { href: string; label: string };
};

const newsDirectory = path.join(process.cwd(), "news");

function makeArticle(filename: string, source: string): NewsArticle | null {
  const matched = filename.match(/^(\d{8})_(.+)\.md$/);
  if (!matched) return null;

  const [, date, fileTitle] = matched;
  const sourceId = filename.replace(/\.md$/, "");
  const slug = date;

  if (sourceId === "20260816_最終プロテスト") {
    return {
      slug,
      date,
      title: "最終プロテストのお知らせ",
      excerpt: "2026年9月、烏山城カントリークラブで開催される最終プロテストに挑戦します。",
      paragraphs: [
        "青木 新樹選手は、2026年9月1日（火）から9月4日（金）まで開催される最終プロテストに挑戦します。",
        "日頃から応援してくださる皆さまの力を胸に、プロゴルファーへの大きな一歩を踏み出します。温かいご声援をよろしくお願いいたします。"
      ],
      details: [
        ["日程", "2026年9月1日（火）〜9月4日（金）"],
        ["指定練習日", "2026年8月31日（月）"],
        ["会場", "烏山城カントリークラブ（本丸・二の丸）／栃木県"],
        ["競技方法", "72ホール・ストロークプレー"],
        ["最終ラウンド進出", "第3ラウンド終了時点で、50位タイのスコアから10ストローク以内の選手"],
        ["合格基準", "50位タイまで" ]
      ],
      images: [
        { src: "/images/烏山城CC.jpg", alt: "最終プロテスト会場の烏山城カントリークラブ" }
      ]
    };
  }

  if (sourceId === "20260818_青木新樹選手応援サイトが正式リリース") {
    return {
      slug,
      date,
      title: "青木 新樹選手応援サイトを正式リリースしました",
      excerpt: "青木 新樹選手の挑戦や活動をお届けする公式応援サイトを公開しました。",
      paragraphs: [
        "このたび、青木 新樹選手応援サイトを正式にリリースしました。",
        "本サイトでは、試合や活動の最新情報、インタビュー、プロフィールを通じて、プロゴルファーを目指す青木 新樹選手の挑戦をお届けします。皆さまとともに応援の輪を広げてまいります。"
      ],
      images: [
        { src: "/images/応援サイト_モバイル版.png", alt: "青木 新樹選手応援サイトのモバイル表示" }
      ],
      link: { href: "https://shinju.bamba-ai.com/", label: "応援サイトを見る" }
    };
  }

  const body = source
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.includes("下記の内容を"))
    .join(" ");

  return {
    slug,
    date,
    title: fileTitle,
    excerpt: body || fileTitle,
    paragraphs: body ? [body] : []
  };
}

export function getAllNews(): NewsArticle[] {
  if (!fs.existsSync(newsDirectory)) return [];

  return fs
    .readdirSync(newsDirectory)
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => makeArticle(filename, fs.readFileSync(path.join(newsDirectory, filename), "utf8")))
    .filter((article): article is NewsArticle => article !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return getAllNews().find((article) => article.slug === slug);
}

export function formatNewsDate(date: string): string {
  return `${date.slice(0, 4)}.${date.slice(4, 6)}.${date.slice(6, 8)}`;
}
