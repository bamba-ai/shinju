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
  relatedLinks?: Array<{ href: string; label: string }>;
  video?: {
    name: string;
    description: string;
    embedUrl: string;
    videoUrl: string;
    thumbnailUrl: string;
    dateCreated: string;
  };
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

  if (sourceId === "20260814_青木新樹選手の練習ラウンド＠烏山カントリークラブ") {
    return {
      slug,
      date,
      title: "青木 新樹選手 練習ラウンド｜烏山城カントリークラブ 2026/8/14",
      excerpt: "プロゴルファーを目指す青木 新樹（Shinju Aoki）選手の練習ラウンド動画。2026年8月14日、烏山城カントリークラブでのプレーの様子を紹介します。",
      paragraphs: [
        "プロゴルファーを目指す青木 新樹（Shinju Aoki）選手が、2026年8月14日に烏山城カントリークラブで行った練習ラウンドの様子をYouTubeで公開しました。青木新樹選手がコースで磨く実戦的なプレーを、ぜひご覧ください。",
        "大会に向けた準備を重ねる青木 新樹選手への応援は、プロフィールや応援サイトのご案内からもご確認いただけます。"
      ],
      link: {
        href: "https://www.youtube.com/watch?v=vIXPBM9Rmlw",
        label: "青木 新樹選手の練習ラウンド動画をYouTubeで見る"
      },
      relatedLinks: [
        { href: "/#profile", label: "青木 新樹選手プロフィール" },
        { href: "/#support", label: "青木 新樹選手を応援する" }
      ],
      video: {
        name: "青木 新樹選手 練習ラウンド｜烏山城カントリークラブ 2026/8/14",
        description: "プロゴルファーを目指す青木 新樹（Shinju Aoki）選手が、2026年8月14日に烏山城カントリークラブで行った練習ラウンドの動画です。",
        embedUrl: "https://www.youtube.com/embed/vIXPBM9Rmlw",
        videoUrl: "https://www.youtube.com/watch?v=vIXPBM9Rmlw",
        thumbnailUrl: "https://i.ytimg.com/vi/vIXPBM9Rmlw/hqdefault.jpg",
        dateCreated: "2026-08-14"
      }
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

export function getArticleTranslation(article: NewsArticle): NewsArticle {
  if (article.slug === "20260816") {
    return {
      ...article,
      title: "Final Professional Test Announcement",
      excerpt: "Shinju Aoki will compete in the final professional test at Karasuyama Castle Country Club in September 2026.",
      paragraphs: [
        "Shinju Aoki will compete in the final professional test, held from Tuesday, September 1 to Friday, September 4, 2026.",
        "With the support of everyone who cheers him on, he is taking an important step toward becoming a professional golfer. Thank you for your continued encouragement."
      ],
      details: [
        ["Dates", "September 1 (Tue) – September 4 (Fri), 2026"],
        ["Official practice day", "August 31 (Mon), 2026"],
        ["Venue", "Karasuyama Castle Country Club (Honmaru and Ninomaru), Tochigi, Japan"],
        ["Format", "72-hole stroke play"],
        ["Final-round qualification", "Players within 10 strokes of the score tied for 50th after round three"],
        ["Passing standard", "Players tied for 50th or better"]
      ],
      images: [{ src: "/images/烏山城CC.jpg", alt: "Karasuyama Castle Country Club, venue for the final professional test" }]
    };
  }

  if (article.slug === "20260818") {
    return {
      ...article,
      title: "Shinju Aoki Support Site Officially Launches",
      excerpt: "The official support site for Shinju Aoki is now live, sharing his journey toward professional golf.",
      paragraphs: [
        "We are pleased to announce the official launch of the Shinju Aoki Support Site.",
        "The site shares news, interviews, and profile information about Shinju Aoki as he pursues a career in professional golf. We hope to grow a circle of support together with everyone following his journey."
      ],
      images: [{ src: "/images/応援サイト_モバイル版.png", alt: "Mobile view of the Shinju Aoki Support Site" }],
      link: { href: "https://shinju.bamba-ai.com/", label: "Visit the support site" }
    };
  }

  if (article.slug === "20260814") {
    return {
      ...article,
      title: "Shinju Aoki Practice Round at Karasuyamajo Country Club | Aug 14, 2026",
      excerpt: "A practice-round video featuring Shinju Aoki, a golfer pursuing a professional career, at Karasuyamajo Country Club on August 14, 2026.",
      paragraphs: [
        "Shinju Aoki, a golfer pursuing a professional career, shared a YouTube video from his practice round at Karasuyamajo Country Club on August 14, 2026.",
        "Watch Shinju's on-course preparation as he continues to build experience for upcoming competition."
      ],
      link: {
        href: "https://www.youtube.com/watch?v=vIXPBM9Rmlw",
        label: "Watch Shinju Aoki's practice-round video on YouTube"
      },
      relatedLinks: [
        { href: "/en/#profile", label: "Shinju Aoki profile" },
        { href: "/en/#support", label: "Support Shinju Aoki" }
      ],
      video: {
        name: "Shinju Aoki Practice Round at Karasuyamajo Country Club | Aug 14, 2026",
        description: "A video of Shinju Aoki's practice round at Karasuyamajo Country Club on August 14, 2026.",
        embedUrl: "https://www.youtube.com/embed/vIXPBM9Rmlw",
        videoUrl: "https://www.youtube.com/watch?v=vIXPBM9Rmlw",
        thumbnailUrl: "https://i.ytimg.com/vi/vIXPBM9Rmlw/hqdefault.jpg",
        dateCreated: "2026-08-14"
      }
    };
  }

  return article;
}

export function formatNewsDate(date: string): string {
  return `${date.slice(0, 4)}.${date.slice(4, 6)}.${date.slice(6, 8)}`;
}
