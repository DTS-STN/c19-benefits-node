const { routeUtils } = require('./../../utils')
const { Schema } = require('./schema.js')
const { pruneSessionData } = require('../../utils/session.helpers')

module.exports = (app, route) => {
  const name = route.name

  route
    .draw(app)
    .get((req, res) => {
      res.render(
        name,
        routeUtils.getViewData(req, {
          title: res.__('no_income.title'),
        }),
      )
    })
    .post(route.applySchema(Schema), postNoIncome)
}

const postNoIncome = (req, res) => {

  const prunePaths = [
    'some_income',
    'unchanged_income',
    'reduced-income',
    'rrif',
    'gross_income',
    'mortgage_payments',
  ]

  let path = res.locals.routePath('question-gross-income')

  if (req.body.no_income === 'self-isolating-travel'){
    path = res.locals.routePath('question-mortgage-payments')
  }

  // prune the paths you can't go down on this route
  pruneSessionData(req, prunePaths)
  return res.redirect(path)
}
