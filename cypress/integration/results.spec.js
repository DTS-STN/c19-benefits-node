const route = (name, lang) => require('../../utils/route.helpers').simpleRoute(name, lang, true);

/* eslint-disable no-undef */
describe('Result Page Only tests', () => {
  ['en', 'fr'].forEach((lang) => {
    describe('Language: ' + lang, () => {

      beforeEach(() => {
        process.env.COOKIE_SECRET = 'result'
      })

      it('should display an error when navigating directly to results page', () => {
        cy.visit(route('results', lang))
        cy.get('[data-cy=missed-questions]')
        cy.reportA11y()
      })
    })
  })
})

function provinceLookup(key, locale){
  return {
    'on': {'en': 'on', 'fr': 'on'},
  }[key][locale];
}
describe('Paths and Benefits', () => {
  ['en', 'fr'].forEach((lang) => {
    describe('Language: ' + lang, () => {

      beforeEach(() => {
        process.env.COOKIE_SECRET = 'paths'
        cy.visit('/' + lang)
        cy.reportA11y()
        cy.get('[data-cy=start]').click()
      })


      it("CRB", () => {
        cy.answerSelect('#province-select', provinceLookup('on', lang))
        cy.answerRB('#lost_joblost-all-income')
        cy.answerRB('#no_incomeself-employed-closed')
        cy.answerRB('#gross_incomeover_5k')
        cy.answerRB('#mortgage_paymentsno')
        cy.answerRB('#student_debtno')
        cy.answerRB('#plans_for_schoolno')
        cy.get('[data-cy=eligible-benefit-list]').children().should('have.length', '2')
        cy.get('#crb')
        cy.get('#transition_to_ei')
      })

      it("CRB not available during quarantine from international travel", () => {
        cy.answerSelect('#province-select', provinceLookup('on', lang))
        cy.answerRB('#lost_joblost-all-income')
        cy.answerRB('#no_incomeself-isolating-travel')
        cy.answerRB('#mortgage_paymentsno')
        cy.answerRB('#student_debtno')
        cy.answerRB('#plans_for_schoolno')
        cy.get('[data-cy=eligible-benefit-list]').should('not.exist')
      })

      it("CRCB", () => {
        cy.answerSelect('#province-select', provinceLookup('on', lang))
        cy.answerRB('#lost_joblost-all-income')
        cy.answerRB('#no_incomeunpaid-leave-to-care')
        cy.answerRB('#gross_incomeover_5k')
        cy.answerRB('#mortgage_paymentsno')
        cy.answerRB('#student_debtno')
        cy.answerRB('#plans_for_schoolno')
        cy.get('[data-cy=eligible-benefit-list]').children().should('have.length', '2')
        cy.get('#crcb')
        cy.get('#transition_to_ei')
      })

      it("CRSB", () => {
        cy.answerSelect('#province-select', provinceLookup('on', lang))
        cy.answerRB('#lost_joblost-all-income')
        cy.answerRB('#no_incomesick-or-quarantined')
        cy.answerRB('#gross_incomeover_5k')
        cy.answerRB('#mortgage_paymentsno')
        cy.answerRB('#student_debtno')
        cy.answerRB('#plans_for_schoolno')
        cy.get('[data-cy=eligible-benefit-list]').children().should('have.length', '2')
        cy.get('#crsb')
        cy.get('#transition_to_ei')
      })

      it('EI Regular', () => {
        cy.answerSelect('#province-select', provinceLookup('on', lang))
        cy.answerRB('#lost_joblost-some-income')
        cy.answerRB('#some_incomehours-reduced')
        cy.answerRB('#gross_income4999_or_less')
        cy.answerRB('#mortgage_paymentsno')
        cy.answerRB('#student_debtno')
        cy.answerRB('#plans_for_schoolno')
        cy.reportA11y()
        cy.get('[data-cy=eligible-benefit-list]').children().should('have.length', '2')
        cy.get('#ei_workshare')
        cy.get('#transition_to_ei')
      })

      it('EI Regular not available during quarantine after international travel', () => {
        cy.answerSelect('#province-select', provinceLookup('on', lang))
        cy.answerRB('#lost_joblost-some-income')
        cy.answerRB('#some_incomeself-isolating-travel')
        cy.answerRB('#mortgage_paymentsno')
        cy.answerRB('#student_debtno')
        cy.answerRB('#plans_for_schoolno')
        cy.reportA11y()
        cy.get('[data-cy=eligible-benefit-list]').should('not.exist')
      })

      it('RRIF', () => {
        cy.answerSelect('#province-select', provinceLookup('on', lang))
        cy.answerRB('#lost_joblost-some-income')
        cy.answerRB('#some_incomeretired')
        cy.answerRB('#rrifyes')
        cy.answerRB('#gross_income4999_or_less')
        cy.answerRB('#mortgage_paymentsno')
        cy.answerRB('#student_debtno')
        cy.answerRB('#plans_for_schoolno')
        cy.reportA11y()
        cy.get('[data-cy=eligible-benefit-list]').children().should('have.length', '2')
        cy.get('#transition_to_ei')
        cy.get('#rrif')
      })

      it('Rent Help, Student Financial Aid', () => {
        cy.answerSelect('#province-select', provinceLookup('on', lang))
        cy.answerRB('#lost_joblost-no-income')
        cy.answerRB('#unchanged_incomenone-of-the-above')
        cy.answerRB('#mortgage_paymentsyes-rent')
        cy.answerRB('#student_debtno')
        cy.answerRB('#plans_for_schoolyes')
        cy.reportA11y()
        cy.get('[data-cy=eligible-benefit-list]').children().should('have.length', '2')
        cy.get('#rent_help')
        cy.get('#student_financial_aid')
      })
    })
  })
})