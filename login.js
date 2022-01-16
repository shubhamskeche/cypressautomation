//describe block refers to  test scenario
//it block refers to test case
describe('verify the login functionality', () => {
    it('test login with valid credential', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[id=txtUsername]').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('.button').click()
       
    })
    it('test login with invalid credential', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[id=txtUsername]').type('Admin')
        cy.get('#txtPassword').type('admin1233')
        cy.get('.button').click()
        cy.get('#spanMessage').should('be.visible')
    })
})