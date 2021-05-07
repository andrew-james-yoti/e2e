describe('Content page', () => {
    it('should load the content page', () => {
        cy.visit('http://localhost:9000')
        cy.get('[data-qa="content-page-link"]').click();
        cy.get('[data-qa="content"]').should('be.visible')
    });
});