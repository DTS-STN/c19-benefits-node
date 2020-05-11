const { routes } = require('../config/routes.config')
const { getNextRouteURL } = require('../utils/router.helpers')
const i18n = require('i18n')

const routeHelpers = (req, res, next) => {
  res.locals.routePath = (name) => {
    const route = routes.find(r => r.name === name)

    return route.path[i18n.getLocale()]
  }

  res.locals.nextRoute = (route) => {
    return getNextRouteURL(route, req);
  }

  const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  const url = new URL(fullUrl);
  const querystring = url.search;

  res.locals.getTranslatedRoute = (route, lang) => {
    return `/${lang}${route.path[lang]}` + querystring;
  }

  next()
}

module.exports = {
  routeHelpers,
}