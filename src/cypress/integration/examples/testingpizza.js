describe('Name Test', function () {

    it('Explain what it does', function() {
        cy.visit('http://localhost:3000/')

        cy.contains('Build your Pizza').click()

        cy.url()
        .should('include', '/pizza')

        cy.get('.name-input')
        .type('testingname')
        .should('have.value', 'testingname')

        cy.get('[type="checkbox"]').check()

        cy.get('button[type=submit]').click()

    })
})