import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatNewsDate, getAllNews, getArticleTranslation, getNewsBySlug } from "../../../../lib/news";

export function generateStaticParams() {
  return getAllNews().map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  const translated = article && getArticleTranslation(article);
  const url = `/en/news/${slug}/`;

  return {
    title: translated ? `${translated.title} | Shinju Aoki Support Site` : "News | Shinju Aoki Support Site",
    description: translated?.excerpt,
    alternates: {
      canonical: url,
      languages: { ja: `/news/${slug}/`, en: url, "x-default": `/news/${slug}/` }
    },
    openGraph: translated ? {
      title: `${translated.title} | Shinju Aoki Support Site`,
      description: translated.excerpt,
      url,
      locale: "en_US",
      alternateLocale: "ja_JP",
      type: "article",
      images: translated.images?.map((image) => ({ url: image.src, alt: image.alt }))
        ?? (translated.video ? [{ url: translated.video.thumbnailUrl, alt: translated.video.name }] : undefined)
    } : undefined,
    twitter: translated ? {
      card: "summary_large_image",
      title: `${translated.title} | Shinju Aoki Support Site`,
      description: translated.excerpt,
      images: translated.images?.map((image) => image.src)
        ?? (translated.video ? [translated.video.thumbnailUrl] : undefined)
    } : undefined
  };
}

export default async function EnglishNewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const source = getNewsBySlug(slug);
  if (!source) notFound();
  const article = getArticleTranslation(source);
  const videoStructuredData = article.video && JSON.stringify({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: article.video.name,
    description: article.video.description,
    thumbnailUrl: article.video.thumbnailUrl,
    dateCreated: article.video.dateCreated,
    embedUrl: article.video.embedUrl,
    contentUrl: article.video.videoUrl,
    creator: {
      "@type": "Person",
      name: "Shinju Aoki",
      url: "https://shinju.bamba-ai.com/"
    }
  });

  return <main className="newsArticlePage" lang="en">{videoStructuredData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: videoStructuredData }} />}<header className="articleHeader"><a href="/en/" className="articleBrand">Shinju Aoki</a><div className="articleHeaderLinks"><a className="languageLink languageLinkDark" href={`/news/${slug}/`} hrefLang="ja" lang="ja">日本語</a><a href="/en/#news" className="articleBack">← All news</a></div></header><article className="articleContent"><p className="sectionKicker">News</p><time dateTime={`${article.date.slice(0, 4)}-${article.date.slice(4, 6)}-${article.date.slice(6, 8)}`}>{formatNewsDate(article.date)}</time><h1>{article.title}</h1><p className="articleLead">{article.excerpt}</p><div className="articleBody">{article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>{article.video && <div className="youtubeFrame"><iframe src={article.video.embedUrl} title={article.video.name} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>}{article.link && <a className="articleLink" href={article.link.href}>{article.link.label} ↗</a>}{article.relatedLinks && <nav className="articleRelatedLinks" aria-label="Related links">{article.relatedLinks.map((link) => <a href={link.href} key={link.href}>{link.label} →</a>)}</nav>}{article.details && <dl className="articleDetails">{article.details.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>}{article.images && <div className="articleImages">{article.images.map((image) => <img key={image.src} src={image.src} alt={image.alt} />)}</div>}</article></main>;
}
