import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatNewsDate, getAllNews, getNewsBySlug } from "../../../lib/news";

export function generateStaticParams() {
  return getAllNews().map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  const url = `/news/${slug}/`;

  return {
    title: article ? `${article.title} | 青木 新樹選手 応援サイト` : "ニュース | 青木 新樹選手 応援サイト",
    description: article?.excerpt,
    alternates: {
      canonical: url,
      languages: { ja: url, en: `/en/news/${slug}/`, "x-default": url }
    },
    openGraph: article ? {
      title: `${article.title} | 青木 新樹選手 応援サイト`,
      description: article.excerpt,
      url,
      locale: "ja_JP",
      alternateLocale: "en_US",
      type: "article",
      images: article.images?.map((image) => ({ url: image.src, alt: image.alt }))
        ?? (article.featuredImage ? [{ url: article.featuredImage.src, alt: article.featuredImage.alt }] : undefined)
        ?? (article.video ? [{ url: article.video.thumbnailUrl, alt: article.video.name }] : undefined)
    } : undefined,
    twitter: article ? {
      card: "summary_large_image",
      title: `${article.title} | 青木 新樹選手 応援サイト`,
      description: article.excerpt,
      images: article.images?.map((image) => image.src)
        ?? (article.featuredImage ? [article.featuredImage.src] : undefined)
        ?? (article.video ? [article.video.thumbnailUrl] : undefined)
    } : undefined
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) notFound();
  const articleStructuredData = article.articleSchema && JSON.stringify({
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.articleSchema.headline,
    description: article.articleSchema.description,
    datePublished: `${article.date.slice(0, 4)}-${article.date.slice(4, 6)}-${article.date.slice(6, 8)}`,
    dateModified: `${article.date.slice(0, 4)}-${article.date.slice(4, 6)}-${article.date.slice(6, 8)}`,
    mainEntityOfPage: `https://shinju.bamba-ai.com/news/${article.slug}/`,
    image: `https://shinju.bamba-ai.com${article.articleSchema.image}`,
    publisher: { "@type": "Organization", name: article.articleSchema.publisher }
  });
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
      name: "青木 新樹",
      alternateName: "Shinju Aoki",
      url: "https://shinju.bamba-ai.com/"
    }
  });

  return (
    <main className="newsArticlePage">
      {articleStructuredData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleStructuredData }} />}
      {videoStructuredData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: videoStructuredData }} />}
      <header className="articleHeader">
        <a href="/" className="articleBrand">Shinju Aoki</a>
        <div className="articleHeaderLinks">
          <a className="languageLink languageLinkDark" href={`/en/news/${slug}/`} hrefLang="en" lang="en">English</a>
          <a href="/#news" className="articleBack">← ニュース一覧へ</a>
        </div>
      </header>
      <article className="articleContent">
        {article.featuredImage && <img className="articleFeaturedImage" src={article.featuredImage.src} alt={article.featuredImage.alt} />}
        <p className="sectionKicker">News</p>
        <time dateTime={`${article.date.slice(0, 4)}-${article.date.slice(4, 6)}-${article.date.slice(6, 8)}`}>
          {formatNewsDate(article.date)}
        </time>
        <h1>{article.titleLines ? article.titleLines.map((line) => <span className="articleTitleLine" key={line}>{line}</span>) : article.title}</h1>
        <p className="articleLead">{article.excerpt}</p>
        <div className="articleBody">
          {article.bodyHeading && <h2>{article.bodyHeading}</h2>}
          {article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {article.signatureLines && (
            <div className="articleSignature">
              {article.signatureLines.map((line) => <p key={line}>{line}</p>)}
            </div>
          )}
        </div>
        {article.video && (
          <div className="youtubeFrame">
            <iframe
              src={article.video.embedUrl}
              title={article.video.name}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        )}
        {article.link && (
          <a className="articleLink" href={article.link.href}>{article.link.label} ↗</a>
        )}
        {article.relatedLinks && (
          <nav className="articleRelatedLinks" aria-label="関連リンク">
            {article.relatedLinks.map((link) => <a href={link.href} key={link.href}>{link.label} →</a>)}
          </nav>
        )}
        {article.details && (
          <dl className="articleDetails">
            {article.details.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        )}
        {article.images && (
          <div className="articleImages">
            {article.images.map((image) => <img key={image.src} src={image.src} alt={image.alt} />)}
          </div>
        )}
      </article>
    </main>
  );
}
