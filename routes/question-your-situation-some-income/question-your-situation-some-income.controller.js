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
  pruneSessionData(req, ['no_income', 'unchanged_income'])
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
    return res.redirect(res.locals.routePath('question-rrif'))
  }

  return res.redirect(res.locals.routePath('question-gross-income'))

}
