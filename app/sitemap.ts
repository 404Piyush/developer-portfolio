import type { MetadataRoute } from "next"
import { projects } from "@/data/projects"

const SITE_URL = "https://404piyush.me"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const root: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/work`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/web3`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/writing`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/resume`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ]
  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.6,
  }))
  return [...root, ...projectEntries]
}