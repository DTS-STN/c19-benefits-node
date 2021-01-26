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
          title: res.__('some_income.title'),
        }),
      )
    })
    .post(route.applySchema(Schema), postSomeIncome)
}

const postSomeIncome = (req, res) => {

  const prunePaths = [
    'no_income',
    'unchanged_income',
    'gross_income',
    'mortgage_payments',
  ]

  let path = res.locals.routePath('question-gross-income')

  pruneSessionData(req, prunePaths)

  if (
    [
      'hours-reduced',
      'selfemployed-some-income',
      'employed-lost-a-job',
      'child-or-dependent-school-closed',
      'quarantine',
    ].includes(req.body.some_income)
  ) {
    pruneSessionData(req, [ 'rrif'])

  }
  else if (req.body.some_income === 'retired') {
    path = res.locals.routePath('question-rrif')
  }
  else if (req.body.some_income === 'self-isolating-travel') {
    path = res.locals.routePath('question-mortgage-payments')
  }

  return res.redirect(path)

}
