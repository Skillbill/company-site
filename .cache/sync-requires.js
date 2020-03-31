const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/home/ugopalatucci/company-site/src/pages/404.js"))),
  "component---src-pages-clients-js": hot(preferDefault(require("/home/ugopalatucci/company-site/src/pages/clients.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/ugopalatucci/company-site/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/ugopalatucci/company-site/src/pages/index.js"))),
  "component---src-pages-people-js": hot(preferDefault(require("/home/ugopalatucci/company-site/src/pages/people.js"))),
  "component---src-pages-stats-js": hot(preferDefault(require("/home/ugopalatucci/company-site/src/pages/stats.js")))
}

