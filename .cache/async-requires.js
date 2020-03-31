// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-clients-js": () => import("./../src/pages/clients.js" /* webpackChunkName: "component---src-pages-clients-js" */),
  "component---src-pages-contact-js": () => import("./../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-people-js": () => import("./../src/pages/people.js" /* webpackChunkName: "component---src-pages-people-js" */),
  "component---src-pages-stats-js": () => import("./../src/pages/stats.js" /* webpackChunkName: "component---src-pages-stats-js" */)
}

