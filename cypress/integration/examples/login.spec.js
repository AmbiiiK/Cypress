describe('Working with inputs', () => {
    it ('should load login page', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
    })

    it('should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('Some Invalid Name')
    })

    it('should fill password', () => {
        cy.get('#user_password').clear()
        cy.get('#user_password').type('Some Invalid password')
    })

    it('should mark checkbox', () => {
        cy.get('input[type="checkbox"]').click()
        cy.wait(5000)
    })

    it('should submit login form', () => {
        cy.contains('Sign in').click()
    })

    it('should display error message', () => {
        cy.get('.alert-error').should('be.visible')
    })
})