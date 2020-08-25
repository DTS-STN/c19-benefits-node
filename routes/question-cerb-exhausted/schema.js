/* istanbul ignore file */

const Schema = {
  cerb_exhausted: {
    isIn: {
      errorMessage: 'errors.multipleChoiceGeneric',
      options: [['cerb-exhausted-yes', 'cerb-exhausted-almost', 'cerb-exhausted-no']],
    },
  },
}

module.exports = {
  Schema,
}