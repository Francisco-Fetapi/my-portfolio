import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  const siteUrl = process.env.APP_URL;

  // Instructing the Vercel edge to cache the file
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

  // generate sitemap here
  const txt = `
  User-agent: *
  Sitemap: ${siteUrl}/sitemap.xml
  `;

  res.end(txt);
}
