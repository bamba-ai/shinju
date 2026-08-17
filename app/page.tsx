import { formatNewsDate, getAllNews } from "../lib/news";

const profileItems = [
  ["生年月日", "2005年5月26日"],
  ["年齢", "21歳"],
  ["出身地", "東京都"],
  ["身長", "180cm"],
  ["体重", "80kg"],
  ["血液型", "AB型"],
  ["出身校", "ロスミニ・カレッジ"],
  ["所属", "フリー"],
  ["ゴルフ開始", "8歳"],
  ["始めたきっかけ", "父親の影響"],
  ["得意クラブ", "パター"],
  ["ドライバー平均飛距離", "約300ヤード"],
  ["ベストスコア", "63"],
  ["現在の区分", "アマチュア"]
];

export default function Home() {
  const newsItems = getAllNews();

  return (
    <main>
      <section className="hero" aria-label="青木 新樹選手の紹介">
        <div className="heroBackground" aria-hidden="true" />
        <div className="heroShade" />
        <img
          className="heroPortrait"
          src="/images/新樹選手_背景透過.png"
          alt=""
          aria-hidden="true"
        />
        <nav className="topNav" aria-label="サイト内メニュー">
          <a className="brand" href="/">
            Shinju Aoki
          </a>
          <div className="navLinks">
            <a href="#news">News</a>
            <a href="#profile">Profile</a>
            <a href="#interview">Interview</a>
            <a href="#support">Support</a>
            <a href="#contact">Contact</a>
            <a href="#documents">Info</a>
            <a className="languageLink" href="/en/" hrefLang="en" lang="en">English</a>
          </div>
        </nav>
        <div className="heroContent">
          <p className="eyebrow">プロゴルファーを目指す挑戦を、地域とともに。</p>
          <h1>青木 新樹</h1>
          <p className="lead">
            このサイトは、プロゴルファーを目指す青木 新樹選手の挑戦を伝え、応援の輪を広げるためのホームページです。日々の練習と試合への挑戦を通じて、プロへの道を一歩ずつ進んでいます。
          </p>
          <div className="heroActions" aria-label="主要リンク">
            <a className="primaryLink" href="#interview">
              インタビューを見る
            </a>
            <a className="secondaryLink" href="#support">
              応援する
            </a>
          </div>
        </div>
        <span className="heroScroll" aria-hidden="true">Scroll <i /></span>
      </section>

      <section className="newsSection" id="news" aria-labelledby="news-heading">
        <div className="sectionInner">
          <div className="sectionHeading newsHeading">
            <div>
              <p className="sectionKicker">News</p>
              <h2 id="news-heading">最新のお知らせ</h2>
            </div>
            <span>Latest updates</span>
          </div>
          <div className="newsList">
            {newsItems.map((item) => (
              <a className="newsItem" href={`/news/${item.slug}/`} key={item.slug}>
                <time dateTime={`${item.date.slice(0, 4)}-${item.date.slice(4, 6)}-${item.date.slice(6, 8)}`}>
                  {formatNewsDate(item.date)}
                </time>
                <strong>{item.title}</strong>
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="interviewSection" id="interview" aria-labelledby="interview-heading">
        <div className="sectionInner interviewLayout">
          <div className="interviewCopy">
            <p className="sectionKicker">Interview</p>
            <h2 id="interview-heading">プロへの想いを、言葉で。</h2>
            <p>
              ゴルフを始めたきっかけ、目標、そして応援してくださる皆さまへのメッセージ。
              青木 新樹選手の現在地を、インタビューでご覧ください。
            </p>
          </div>
          <div className="interviewFrame">
            <video
              src="/media/shinju-interview.mp4"
              controls
              playsInline
              preload="metadata"
              aria-label="青木 新樹選手 インタビュー"
            />
          </div>
        </div>
      </section>

      <section className="roundSection" id="round" aria-labelledby="round-heading">
        <div className="sectionInner roundLayout">
          <div className="roundCopy">
            <p className="sectionKicker">Round</p>
            <h2 id="round-heading">練習ラウンドの様子</h2>
            <p>
              コースでの実戦的なプレーを、YouTube動画でご覧いただけます。
            </p>
          </div>
          <div className="youtubeFrame">
            <iframe
              src="https://www.youtube.com/embed/vIXPBM9Rmlw"
              title="青木 新樹選手 練習ラウンド"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="profileSection" id="profile">
        <div className="sectionInner">
          <div className="sectionHeading">
            <p className="sectionKicker">Profile</p>
            <h2>青木 新樹について</h2>
          </div>
          <div className="profileGrid" aria-label="青木 新樹選手のプロフィール">
            {profileItems.map(([label, value]) => (
              <div className="profileItem" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="supportSection sectionBand" id="support">
        <div className="sectionInner supportLayout">
          <div className="supportCopy">
            <p className="sectionKicker">Support</p>
            <h2>青木 新樹君を応援するサポーターを募集しています。</h2>
            <p>
              プロゴルファーを目指す挑戦を継続していくために、個人・企業・地域の皆さまからの
              応援を募集しています。いただいたご支援は、練習環境の充実や試合への挑戦に大切に
              活用します。
            </p>
          </div>
          <div className="supportPoints" aria-label="サポーター募集内容">
            <div>
              <span>01</span>
              <strong>個人サポーター</strong>
              <p>一人ひとりの応援が、日々の練習と競技への挑戦を支えます。</p>
            </div>
            <div>
              <span>02</span>
              <strong>企業・店舗スポンサー</strong>
              <p>活動をともに広げるパートナーとして、継続的なご支援を募集しています。</p>
            </div>
            <div>
              <span>03</span>
              <strong>応援メッセージ</strong>
              <p>声援やご紹介など、できる形で青木 新樹君の挑戦を後押ししてください。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contactSection" id="contact" aria-labelledby="contact-heading">
        <div className="sectionInner contactLayout">
          <div className="contactCopy">
            <p className="sectionKicker">Contact</p>
            <h2 id="contact-heading">応援のお問い合わせ</h2>
            <p>
              公式LINEからお気軽にお問い合わせください。次のようなご相談をお待ちしています。
            </p>
            <ul>
              <li>個人サポーターになりたい</li>
              <li>企業・店舗スポンサーになりたい</li>
              <li>応援メッセージを送りたい</li>
            </ul>
          </div>
          <div className="lineCard">
            <a
              className="lineQrLink"
              href="https://lin.ee/sBQ74Ad"
              target="_blank"
              rel="noreferrer"
              aria-label="青木新樹選手の公式LINEアカウントを開く"
            >
              <img
                src="/images/青木新樹選手の公式LINEアカウント.png"
                alt="青木新樹選手の公式LINEアカウント QRコード"
              />
            </a>
            <div>
              <strong>公式LINE</strong>
              <span>QRコードを読み取るか、スマホでは画像をタップしてください。</span>
            </div>
          </div>
        </div>
      </section>

      <section className="documentsSection" id="documents">
        <div className="sectionInner documentsLayout">
          <div>
            <p className="sectionKicker">Documents</p>
            <h2>応援に関するご案内</h2>
          </div>
          <div className="documentLinks">
            <a href="/docs/青木新樹選手_後援会_規約_20260818.pdf" target="_blank" rel="noreferrer">
              <span>後援会規約</span>
              <strong>PDFを開く ↗</strong>
            </a>
            <a href="/docs/青木新樹選手_後援会_プライバシーポリシー_20260818.pdf" target="_blank" rel="noreferrer">
              <span>プライバシーポリシー</span>
              <strong>PDFを開く ↗</strong>
            </a>
          </div>
        </div>
      </section>

      <footer className="siteFooter">
        <div className="sectionInner footerInner">
          <div>
            <strong>青木 新樹選手 応援サイト</strong>
            <span>Shinju Aoki Support Site</span>
          </div>
          <a href="https://shinju.bamba-ai.com">shinju.bamba-ai.com</a>
        </div>
      </footer>
    </main>
  );
}
