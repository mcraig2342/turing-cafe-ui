Cypress.Commands.add('imputData', () => {
  cy.get('input[name="name"]')
    .type('Matt')
    .should('have.value', 'Matt')
    .get('input[name="date"]')
    .type('3/24')
    .should('have.value', '3/24')
    .get('input[name="time"]')
    .type('3:30')
    .should('have.value', '3:30')
    .get('input[name="number"]')
    .type('{backspace}')
    .type('7')
    .should('have.value', 7)
})
