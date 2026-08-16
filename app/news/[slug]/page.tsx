import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatNewsDate, getNewsBySlug } from "../../../lib/news";

export function generateStaticParams() {
  return [{ slug: "20260818" }, { slug: "20260816" }];
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  return {
    title: article ? `${article.title} | 青木 新樹選手 応援サイト` : "ニュース | 青木 新樹選手 応援サイト",
    description: article?.excerpt
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) notFound();

  return (
    <main className="newsArticlePage">
      <header className="articleHeader">
        <a href="/" className="articleBrand">Shinju Aoki</a>
        <a href="/#news" className="articleBack">← ニュース一覧へ</a>
      </header>
      <article className="articleContent">
        <p className="sectionKicker">News</p>
        <time dateTime={`${article.date.slice(0, 4)}-${article.date.slice(4, 6)}-${article.date.slice(6, 8)}`}>
          {formatNewsDate(article.date)}
        </time>
        <h1>{article.title}</h1>
        <p className="articleLead">{article.excerpt}</p>
        <div className="articleBody">
          {article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        {article.link && (
          <a className="articleLink" href={article.link.href}>{article.link.label} ↗</a>
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
