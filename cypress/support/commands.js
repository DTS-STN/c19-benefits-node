/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//

// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("answerRB", (val) => {
  cy.reportA11y()
  cy.get(val).click()
  cy.get('[data-cy=next]').click()
})

Cypress.Commands.add("answerInput", (id, val) => {
  cy.reportA11y()
  cy.get(id).type(val)
  cy.get('[data-cy=next]').click()
})

Cypress.Commands.add("answerSelect", (id, val) =>{
  cy.reportA11y()
  cy.get(id).select(val)
  cy.get('[data-cy=next]').click()
})
