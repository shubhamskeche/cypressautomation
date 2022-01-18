


describe('verify the functionality radiobutton,checkbox and dropdown', () => {
    beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })
    it('verify the functionality of checkbox with one select', () => {
        cy.get('input[type="checkbox"]').first().check().should('be.checked')
        cy.wait(5000)
        cy.get('input[type="checkbox"]').first().uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').first().click().should('be.checked')
    })
    it('verify the functionality of checkbox with multiple select', () => {
        cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-3', 'option-4']).should('be.checked')
        cy.get('input[type="checkbox"]').uncheck(['option-1', 'option-2', 'option-3', 'option-4']).should('not.be.checked')
    })
    it('verify the functionality of checkbox with check', () => {
        cy.get('input[type="checkbox"]').eq(2).click().should('not.be.checked')
        cy.get('input[type="checkbox"]').eq(2).click().should('be.checked')

    })
    it('verify the functionality of radio button -clcik() function', () => {
        cy.get('input[value="green"]').click().should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')
    })

    it('verify the functionality of radio button -check function ', () => {
        cy.get('input[value="green"]').check().should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')
    })



})