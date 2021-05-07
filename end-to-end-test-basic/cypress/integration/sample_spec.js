describe('My First Test', () => {
  it('Does not do much!', () => {
    // expect(true).to.equal(true)
    cy.visit('http://localhost:9000')
    cy.get('[data-qa="header"]').contains('End To End Tests');
  })
})