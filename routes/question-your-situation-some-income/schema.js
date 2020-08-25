/* istanbul ignore file */

const Schema = {
  some_income: {
    isIn: {
      errorMessage: 'errors.multipleChoiceGeneric',
      options: [
        [
          'hours-reduced',
          'selfemployed-some-income',
          'employed-lost-a-job',
          'retired',
          'quarantine',
          'none-of-the-above',
          'child-or-dependent-school-closed',
        ],
      ],
    },
  },
}

module.exports = {
  Schema,
}
