import fs from "node:fs";
import path from "node:path";

export type NewsArticle = {
  slug: string;
  date: string;
  title: string;
  titleLines?: string[];
  excerpt: string;
  paragraphs: string[];
  signatureLines?: string[];
  bodyHeading?: string;
  details?: Array<[string, string]>;
  images?: Array<{ src: string; alt: string }>;
  featuredImage?: { src: string; alt: string };
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
  articleSchema?: {
    headline: string;
    description: string;
    image: string;
    publisher: string;
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

  if (sourceId === "20260818_青木新樹選手後援会の設立") {
    return {
      slug,
      date,
      title: "青木新樹選手後援会 設立のご挨拶",
      titleLines: ["青木新樹選手 後援会", "設立のご挨拶"],
      excerpt: "2026年8月18日、プロゴルファーを目指す青木 新樹選手を支援する「青木新樹選手後援会」を設立しました。後援会会長・役員一同からの設立のご挨拶を掲載します。",
      featuredImage: { src: "/images/青木新樹選手_後援会_ロゴ.jpg", alt: "青木新樹選手後援会 ロゴ" },
      bodyHeading: "後援会設立のご挨拶",
      paragraphs: [
        "2026年8月18日、プロゴルファーを目指して挑戦を続ける青木 新樹選手を支援する「青木新樹選手後援会」を設立いたしました。後援会設立にあたり、会長・役員一同より皆さまへのご挨拶を掲載いたします。",
        "このたび、夢と目標に向かって挑戦を続ける青木新樹選手を支援するため、後援会を設立する運びとなりました。",
        "これまでの歩みを支えてこられたご家族をはじめ、関係者の皆さま、そして温かいご理解とご支援を寄せてくださった皆さまに、心より敬意と感謝を申し上げます。",
        "夢を実現するためには、本人の努力と強い意志だけでなく、それを支える多くの方々の力が必要です。",
        "私たちは、この後援会を通じて、青木新樹選手が安心して挑戦を続け、持てる力を存分に発揮できる環境を整えるとともに、皆さまと力を合わせ、青木新樹選手の夢の実現に向けて、責任を持って支えてまいります。",
        "新馬場から世界へ。",
        "この街から生まれた夢が、やがて世界の舞台へと羽ばたいていく。その挑戦を、皆さまとともに支え、応援していきたい。",
        "SUPPORTING AMBITIONS, CREATING THE FUTURE",
        "大きな志を支え、未来を創る。一人ひとりの想いを力に変えながら、ここ新馬場から世界へ――。",
        "皆さまの温かいご支援とご協力を賜りますよう、心よりお願い申し上げます。"
      ],
      signatureLines: ["令和8年8月18日", "青木新樹選手後援会", "会長　川原和子", "副会長　池田修一", "副会長兼会計　齋藤亮輔"],
      relatedLinks: [
        { href: "/", label: "青木新樹選手 応援サイト トップ" },
        { href: "/#profile", label: "青木 新樹選手プロフィール" },
        { href: "/#support", label: "後援会・サポートのご案内" },
        { href: "/#contact", label: "公式LINEでお問い合わせ" }
      ],
      articleSchema: {
        headline: "青木新樹選手後援会 設立のご挨拶",
        description: "2026年8月18日、プロゴルファーを目指す青木 新樹選手を支援する青木新樹選手後援会を設立しました。",
        image: "/images/青木新樹選手_後援会_ロゴ.jpg",
        publisher: "青木新樹選手後援会"
      }
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
      title: "Establishment of the Shinju Aoki Supporters Association",
      titleLines: undefined,
      excerpt: "On August 18, 2026, the Shinju Aoki Supporters Association was established to support Shinju Aoki as he pursues a professional golf career.",
      bodyHeading: "Greeting on the establishment of the Supporters Association",
      paragraphs: [
        "On August 18, 2026, we established the Shinju Aoki Supporters Association to support Shinju Aoki as he continues his pursuit of a professional golf career. We would like to share a greeting from the chair and officers on the establishment of the association.",
        "We have decided to establish this supporters association to support Shinju Aoki as he continues to pursue his dreams and goals.",
        "We extend our heartfelt respect and gratitude to his family, everyone involved, and all those who have offered their warm understanding and support throughout his journey so far.",
        "Achieving a dream requires not only the individual's effort and strong will, but also the support of many people.",
        "Through this supporters association, we will help create an environment in which Shinju Aoki can continue to take on challenges with confidence and fully demonstrate his abilities. Together with everyone, we will responsibly support him as he works to realize his dream.",
        "From Shinbaba to the world.",
        "A dream born in this town will one day take flight on the world stage. We hope to support and cheer on that challenge together with all of you.",
        "SUPPORTING AMBITIONS, CREATING THE FUTURE",
        "Supporting great ambitions and creating the future. As we turn each person's thoughts into strength, from Shinbaba to the world.",
        "We sincerely ask for your warm support and cooperation."
      ],
      signatureLines: ["August 18, 2026", "Shinju Aoki Supporters Association", "Chair　川原和子", "Vice Chair　池田修一", "Vice Chair and Treasurer　齋藤亮輔"],
      featuredImage: { src: "/images/青木新樹選手_後援会_ロゴ.jpg", alt: "Shinju Aoki Supporters Association logo" },
      relatedLinks: [
        { href: "/en/", label: "Shinju Aoki Support Site" },
        { href: "/en/#profile", label: "Shinju Aoki profile" },
        { href: "/en/#support", label: "Supporters information" },
        { href: "/en/#contact", label: "Contact the official LINE account" }
      ],
      articleSchema: {
        headline: "Establishment of the Shinju Aoki Supporters Association",
        description: "On August 18, 2026, the Shinju Aoki Supporters Association was established to support Shinju Aoki as he pursues a professional golf career.",
        image: "/images/青木新樹選手_後援会_ロゴ.jpg",
        publisher: "青木新樹選手後援会"
      }
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
