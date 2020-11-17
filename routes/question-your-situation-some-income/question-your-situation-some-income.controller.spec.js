const request = require('supertest')
const app = require('../../app.js')

test('Can send get request some-income route ', async () => {
  const route = app.routes.get('question-your-situation-some-income')
  const response = await request(app).get(route.path.en)
  expect(response.statusCode).toBe(200)
})

test('Can send post request some-income route ', async () => {
  const route = app.routes.get('question-your-situation-some-income')
  const response = await request(app).post(route.path.en)
  expect(response.statusCode).toBe(302)
})

describe('Test redirects for some-income ', () => {
  const route = app.routes.get('question-your-situation-some-income')

  const redirects = [
    {
      dest: 'question-gross-income',
      values: [
        'hours-reduced',
        'selfemployed-some-income',
        'employed-lost-a-job',
        'child-or-dependent-school-closed',
        'quarantine',
      ],
    },
    {
      dest: 'question-rrif',
      values: [
        'retired',
      ],
    },
    {
      dest: 'question-cerb-exhausted',
      values: ['none-of-the-above'],
    },
  ]

  redirects.map((redirect) => {
    redirect.values.map((value) => {
      test(`Redirects to ${redirect.dest} with a post value of ${value} `, async () => {
        const dest = app.routes.get(redirect.dest)

        await request(app)
          .post(route.path.en)
          .send({
            some_income: value,
          })
          .expect(302)
          .then((response) => {
            expect(response.headers.location).toBe(dest.path.en)
          })
      })
    })
  })
})
