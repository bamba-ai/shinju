import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shinju.bamba-ai.com"),
  title: "青木 新樹選手 応援サイト",
  description: "プロゴルファーを目指す青木 新樹選手の公式応援サイトです。",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "青木 新樹選手 応援サイト",
    description: "プロゴルファーを目指す青木 新樹選手の挑戦を応援するサイトです。",
    url: "https://shinju.bamba-ai.com/",
    siteName: "青木 新樹選手 応援サイト",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/images/新樹選手_背景透過.png", alt: "プロゴルファーを目指す青木 新樹選手" }]
  },
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
