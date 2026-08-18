import type { Metadata } from "next";
import { formatNewsDate, getAllNews } from "../../lib/news";

export const metadata: Metadata = {
  title: "Shinju Aoki Official Support Site | Golfer",
  description: "The official support site for Shinju Aoki, a golfer pursuing a professional career. Explore his profile, competition updates, interviews, practice rounds, news, and supporter information.",
  alternates: { canonical: "/en/", languages: { ja: "/", en: "/en/", "x-default": "/" } },
  openGraph: {
    title: "Shinju Aoki Official Support Site | Golfer",
    description: "Follow Shinju Aoki's journey toward a professional golf career.",
    url: "/en/",
    siteName: "Shinju Aoki Support Site",
    locale: "en_US",
    alternateLocale: "ja_JP",
    type: "website",
    images: [{ url: "/images/新樹選手_背景透過.png", alt: "Shinju Aoki, an aspiring professional golfer" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Shinju Aoki Official Support Site | Golfer",
    description: "Follow Shinju Aoki's journey toward a professional golf career.",
    images: ["/images/新樹選手_背景透過.png"]
  }
};

const profileItems = [
  ["Date of birth", "May 26, 2005"], ["Age", "21"], ["Hometown", "Tokyo, Japan"],
  ["Height", "180 cm"], ["Weight", "80 kg"], ["Blood type", "AB"],
  ["Education", "Rosmini College"], ["Affiliation", "Independent"], ["Started golf", "Age 8"],
  ["How it began", "Inspired by his father"], ["Favorite club", "Putter"],
  ["Average drive", "About 300 yards"], ["Best score", "63"], ["Current status", "Amateur"]
];

export default function EnglishHome() {
  const newsItems = getAllNews();

  return (
    <main lang="en">
      <section className="hero" aria-label="Introduction to Shinju Aoki">
        <div className="heroBackground" aria-hidden="true" />
        <div className="heroShade" />
        <img className="heroPortrait" src="/images/新樹選手_背景透過.png" alt="" aria-hidden="true" />
        <nav className="topNav" aria-label="Site navigation">
          <a className="brand" href="/en/">Shinju Aoki</a>
          <div className="navLinks">
            <a href="#news">News</a><a href="#profile">Profile</a><a href="#interview">Interview</a>
            <a href="#support">Support</a><a href="#contact">Contact</a><a href="#documents">Info</a>
            <a className="languageLink" href="/" hrefLang="ja" lang="ja">日本語</a>
          </div>
        </nav>
        <div className="heroContent">
          <p className="eyebrow">A journey toward professional golf, supported by the community.</p>
          <h1>Shinju Aoki</h1>
          <p className="lead">This is the official support site for Shinju Aoki. Follow his daily work and competitive journey as he takes step after step toward becoming a professional golfer.</p>
          <div className="heroActions"><a className="primaryLink" href="#interview">Watch the interview</a><a className="secondaryLink" href="#support">Support Shinju</a></div>
        </div>
        <span className="heroScroll" aria-hidden="true">Scroll <i /></span>
      </section>

      <section className="newsSection" id="news" aria-labelledby="news-heading"><div className="sectionInner">
        <div className="sectionHeading newsHeading"><div><p className="sectionKicker">News</p><h2 id="news-heading">Latest updates</h2></div><span>News &amp; updates</span></div>
        <div className="newsList">{newsItems.map((item) => <a className="newsItem" href={`/en/news/${item.slug}/`} key={item.slug}><time dateTime={`${item.date.slice(0, 4)}-${item.date.slice(4, 6)}-${item.date.slice(6, 8)}`}>{formatNewsDate(item.date)}</time><strong>{item.slug === "20260816" ? "Final Professional Test Announcement" : item.slug === "20260818" ? "Shinju Aoki Support Site Officially Launches" : item.title}</strong><span aria-hidden="true">→</span></a>)}</div>
      </div></section>

      <section className="interviewSection" id="interview"><div className="sectionInner interviewLayout"><div className="interviewCopy"><p className="sectionKicker">Interview</p><h2>Hear the ambition behind the game.</h2><p>Discover how Shinju started golf, what he is aiming for, and his message to everyone supporting him.</p></div><div className="interviewFrame"><video src="/media/shinju-interview.mp4" controls playsInline preload="metadata" aria-label="Shinju Aoki interview" /></div></div></section>

      <section className="roundSection"><div className="sectionInner roundLayout"><div className="roundCopy"><p className="sectionKicker">Round</p><h2>Practice round</h2><p>Watch Shinju&apos;s course play in this YouTube video.</p></div><div className="youtubeFrame"><iframe src="https://www.youtube.com/embed/vIXPBM9Rmlw" title="Shinju Aoki practice round" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div></div></section>

      <section className="profileSection" id="profile"><div className="sectionInner"><div className="sectionHeading"><p className="sectionKicker">Profile</p><h2>About Shinju Aoki</h2></div><div className="profileGrid" aria-label="Shinju Aoki profile">{profileItems.map(([label, value]) => <div className="profileItem" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></div></section>

      <section className="supportSection sectionBand" id="support"><div className="sectionInner supportLayout"><div className="supportCopy"><p className="sectionKicker">Support</p><h2>Join the team supporting Shinju Aoki.</h2><p>We welcome individual supporters, businesses, and local partners who want to help Shinju continue his challenge toward professional golf. Your support helps build his training environment and enables him to compete.</p></div><div className="supportPoints"><div><span>01</span><strong>Individual supporters</strong><p>Every message and contribution supports daily practice and competition.</p></div><div><span>02</span><strong>Business sponsors</strong><p>Become a partner in sharing Shinju&apos;s journey and supporting his activities.</p></div><div><span>03</span><strong>Messages of support</strong><p>Cheer Shinju on in whatever way you can.</p></div><div><span>04</span><strong>Membership fees</strong><p>Individual members: JPY 5,000 per year. Corporate members: JPY 10,000 per year. Fees are not prorated and are non-refundable after payment.</p></div></div></div></section>

      <section className="contactSection" id="contact"><div className="sectionInner contactLayout"><div className="contactCopy"><p className="sectionKicker">Contact</p><h2>Get in touch</h2><p>Please feel free to contact us through the official LINE account. We welcome inquiries such as:</p><ul><li>I&apos;d like to become an individual supporter</li><li>I&apos;d like to become a business sponsor</li><li>I&apos;d like to send a message of support</li></ul></div><div className="lineCard"><a className="lineQrLink" href="https://lin.ee/sBQ74Ad" target="_blank" rel="noreferrer" aria-label="Open Shinju Aoki's official LINE account"><img src="/images/青木新樹選手の公式LINEアカウント.png" alt="QR code for Shinju Aoki's official LINE account" /></a><div><strong>Official LINE</strong><span>Scan the QR code, or tap the image on your phone to open the official account.</span></div></div></div></section>

      <section className="documentsSection" id="documents"><div className="sectionInner documentsLayout"><div><p className="sectionKicker">Documents</p><h2>Supporter information</h2></div><div className="documentLinks"><a href="/docs/shinju-aoki-supporters-association-terms-20260818.pdf" target="_blank" rel="noreferrer"><span>Supporters&apos; association terms</span><strong>Open PDF ↗</strong></a><a href="/docs/shinju-aoki-supporters-association-privacy-policy-20260818.pdf" target="_blank" rel="noreferrer"><span>Privacy policy</span><strong>Open PDF ↗</strong></a></div></div></section>
      <footer className="siteFooter"><div className="sectionInner footerInner"><div><strong>Shinju Aoki Support Site</strong><span>Official support site</span></div><a href="https://shinju.bamba-ai.com">shinju.bamba-ai.com</a></div></footer>
    </main>
  );
}
