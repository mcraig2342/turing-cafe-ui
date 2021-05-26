describe('Reservations', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });
  it('Should show all Reservations', () => {
    cy.get('.App').contains('Turing Cafe Reservations')
    cy.get('.form').should('be.visible')
    cy.get('.area').children().should('have.length', 9)
  })

  it('Imputs should keep track of form data', () => {
    cy.imputData()
  })

  it('Should be to submit a reservation and see it displayed', () => {
    cy.imputData()
      .get('.submit')
      .click()
      .get('.area').children().should('have.length', 10)
      .get('.card').eq(9)
      .children()
      .should('contain', 'Matt')
      .and('contain', '3/24')
      .and('contain', '3:30')
      .and('contain', 3)
  })

});
