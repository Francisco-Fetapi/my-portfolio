import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");
  const siteUrl = process.env.APP_URL;

  // Instructing the Vercel edge to cache the file
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

  const pagesToIndex = ["about", "contact", "index", "journey", "projects"];

  // generate sitemap here
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
      
      ${pagesToIndex
        .map((page) => {
          return `
        <url>
            <loc>${siteUrl}/${page === "index" ? "" : page}</loc>
        </url>
        `;
        })
        .join("")}
      </urlset>`;

  res.end(xml);
}
