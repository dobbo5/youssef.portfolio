export default async function sitemap() {
  const routes = ["", "/about", "/contact", "/projects"].map((route) => ({
    url: `https://youssefdouieb.fr${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes]
}
