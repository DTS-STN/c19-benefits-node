/* istanbul ignore file */

const Schema = {
  dtc_a: {
    isIn: {
      errorMessage: 'errors.multipleChoiceGeneric',
      options: [['yes', 'no']],
    },
  },
}

module.exports = {
  Schema,
}

