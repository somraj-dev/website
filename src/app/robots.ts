import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/login",
          "/register",
          "/dashboard/",
          "/admin/",
          "/api/",
          "/private/",
          "/account/",
        ],
      },
    ],
    sitemap: "https://axiovital.quantaforze.com/sitemap.xml",
  };
}
