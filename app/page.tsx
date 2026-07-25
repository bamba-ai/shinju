const basePath = "/shinju";

const profileItems = [
  ["生年月日", "2005年5月26日"],
  ["年齢", "21歳"],
  ["出身地", "東京都"],
  ["身長", "180cm"],
  ["体重", "75〜80kg"],
  ["血液型", "AB型"],
  ["出身校", "ロスミニ・カレッジ"],
  ["所属", "フリー"],
  ["ゴルフ開始", "8〜9歳ごろ"],
  ["始めたきっかけ", "父親の影響"],
  ["得意クラブ", "パター"],
  ["ドライバー平均飛距離", "約300ヤード"],
  ["ベストスコア", "63"],
  ["現在の区分", "アマチュア"]
];

const statItems = [
  ["300yd", "平均飛距離"],
  ["63", "ベストスコア"],
  ["8-9歳", "ゴルフ開始"],
  ["180cm", "身長"]
];

const movieItems = [
  {
    title: "Practice Clip 01",
    src: `${basePath}/media/IMG_4869.MOV`
  },
  {
    title: "Practice Clip 02",
    src: `${basePath}/media/IMG_3595.MOV`
  },
  {
    title: "Practice Clip 03",
    src: `${basePath}/media/IMG_5630.MOV`
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-label="青木 新樹選手の紹介">
        <video
          className="heroVideo"
          src={`${basePath}/media/IMG_4869.MOV`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="青木 新樹選手のゴルフ動画"
        />
        <div className="heroShade" />
        <nav className="topNav" aria-label="サイト内メニュー">
          <a className="brand" href="/shinju/">
            Shinju Aoki
          </a>
          <div className="navLinks">
            <a href="#profile">Profile</a>
            <a href="#support">Support</a>
            <a href="#movie">Movie</a>
          </div>
        </nav>
        <div className="heroContent">
          <p className="eyebrow">プロゴルファーを目指す挑戦を、地域とともに。</p>
          <h1>青木 新樹</h1>
          <p className="lead">
            東京都出身、ロスミニ・カレッジ出身。平均飛距離約300ヤードのドライバーと、
            得意クラブのパターで一打ずつ未来を切り拓くアマチュアゴルファーです。
          </p>
          <div className="heroActions" aria-label="主要リンク">
            <a className="primaryLink" href="#support">
              応援する
            </a>
            <a className="secondaryLink" href="#profile">
              プロフィール
            </a>
          </div>
        </div>
        <div className="heroStats" aria-label="主なプロフィール">
          {statItems.map(([value, label]) => (
            <div className="stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="intro sectionBand">
        <div className="sectionInner twoColumn">
          <div>
            <p className="sectionKicker">About</p>
            <h2>一打の集中を、応援の力へ。</h2>
          </div>
          <p>
            このサイトは、プロゴルファーを目指す青木 新樹選手の挑戦を伝え、
            応援の輪を広げるためのホームページです。競技に向き合う姿勢と、
            地域のお店や事業者の魅力をわかりやすく届ける活動を紹介します。
          </p>
        </div>
      </section>

      <section className="profileSection" id="profile">
        <div className="sectionInner">
          <div className="sectionHeading">
            <p className="sectionKicker">Profile</p>
            <h2>青木 新樹選手について</h2>
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
            <h2>地域の魅力を伝えながら、挑戦を支える。</h2>
            <p>
              主な支援内容は、地域のお店や事業者の魅力をわかりやすく伝えるお手伝いです。
              青木選手の活動を通じて、応援する人・お店・地域が前向きにつながる場を育てます。
            </p>
          </div>
          <div className="supportPoints" aria-label="支援内容">
            <div>
              <span>01</span>
              <strong>お店の魅力を整理</strong>
              <p>伝えたい価値を見つけ、読み手に届く形へ整えます。</p>
            </div>
            <div>
              <span>02</span>
              <strong>事業者の発信を支援</strong>
              <p>地域の事業者が持つ強みや想いを、わかりやすく紹介します。</p>
            </div>
            <div>
              <span>03</span>
              <strong>応援の接点をつくる</strong>
              <p>競技への挑戦と地域の活動が自然に交わるきっかけを増やします。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="movieSection" id="movie">
        <div className="sectionInner">
          <div className="sectionHeading">
            <p className="sectionKicker">Movie</p>
            <h2>練習とプレーの記録</h2>
          </div>
          <div className="movieGrid">
            {movieItems.map((movie) => (
              <article className="movieCard" key={movie.title}>
                <video src={movie.src} controls playsInline preload="metadata" />
                <h3>{movie.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="siteFooter">
        <div className="sectionInner footerInner">
          <div>
            <strong>青木 新樹選手 応援サイト</strong>
            <span>Shinju Aoki Support Site</span>
          </div>
          <a href="https://bamba-ai.com/shinju">bamba-ai.com/shinju</a>
        </div>
      </footer>
    </main>
  );
}
