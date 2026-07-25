import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bamba-ai.com"),
  title: "青木 新樹選手 応援サイト",
  description: "プロゴルファーを目指す青木 新樹選手の公式応援サイトです。",
  openGraph: {
    title: "青木 新樹選手 応援サイト",
    description: "プロゴルファーを目指す青木 新樹選手の挑戦を応援するサイトです。",
    url: "https://bamba-ai.com/shinju",
    siteName: "青木 新樹選手 応援サイト",
    locale: "ja_JP",
    type: "website"
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
