import type { MetadataRoute } from "next";
import { getAllNews } from "../lib/news";

export const dynamic = "force-static";

const siteUrl = "https://shinju.bamba-ai.com";
const siteLastModified = new Date("2026-08-18T00:00:00+09:00");

function toDate(date: string): Date {
  return new Date(`${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}T00:00:00+09:00`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const newsEntries = getAllNews().flatMap((article) => {
    const lastModified = toDate(article.date);

    return [
      {
        url: `${siteUrl}/news/${article.slug}/`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.7
      },
      {
        url: `${siteUrl}/en/news/${article.slug}/`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.6
      }
    ];
  });

  return [
    {
      url: `${siteUrl}/`,
      lastModified: siteLastModified,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}/en/`,
      lastModified: siteLastModified,
      changeFrequency: "weekly",
      priority: 0.8
    },
    ...newsEntries
  ];
}
