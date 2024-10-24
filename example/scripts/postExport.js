/**
 * Post install script
 */

// Import
const fs = require('fs-extra')
const Canonical = require('../config/canonical')
const getPages = require('../config/pages')

function formatDateStandard(date) {
  const d = new Date(date)
  let month = '' + (d.getMonth() + 1)
  let day = '' + d.getDate()
  const year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-')
}

const directory = 'out'

// NoJekyll
fs.writeFileSync(`${directory}/.nojekyll`, '')
console.info('- No Jekyll created')

// CNAME
fs.writeFileSync(`${directory}/CNAME`, Canonical.replace(/(^\w+:|^)\/\//, ''))
console.info('- CNAME created')

// Robots
const robotsText = `User-agent: *
Sitemap: ${Canonical}/sitemap.xml
Disallow: `

fs.writeFileSync(`${directory}/robots.txt`, robotsText)
console.info('- Robots.txt created')

// Sitemap
const pages = getPages()
const today = formatDateStandard(new Date())

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${Object.keys(pages)
    .map((path) => {
      return `<url>
    <loc>${Canonical}${path}</loc>
    <lastmod>${
      pages[path].lastModified ? formatDateStandard(new Date(pages[path].lastModified)) : today
    }</lastmod>
  </url>\n  `
    })
    .join('')}
</urlset>`

fs.writeFileSync(`${directory}/sitemap.xml`, sitemapXml)
console.info('- Sitemap.xml saved!\n')
