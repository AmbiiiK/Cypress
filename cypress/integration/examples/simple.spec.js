describe('Browser Actions', () => {
    it('should load books website', () => {
        cy.visit('http://books.toscrape.com/index.html', {timeout: 1500})
        cy.url().should('include', 'index.html')
        cy.log('Website Loaded!')
    })

    it('should click on Travel category', () => {
        cy.get('a')
            .contains('Travel')
            .click()
        cy.get('h1').contains('Travel')
    })

    it('should displaz correct number of books', () => {
        cy.get('.product_pod').its('length').should('eq', 11 )
    })
})