/* istanbul ignore file */

const Schema = {
  dtc_b: {
    isIn: {
      errorMessage: 'errors.multipleChoiceGeneric',
      options: [['yes', 'no']],
    },
  },
}

module.exports = {
  Schema,
}

