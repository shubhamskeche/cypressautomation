describe('verify the hooks in cypress',()=>{

    before(function(){
        cy.log('I am running from before')
    })

    beforeEach(function(){
        cy.log('I am running from beforeEach block')
    })

    afterEach(function(){
        cy.log('After each block')
    })

    after(function(){
        cy.log('After block')
    })


    it('Testcase case one ',()=>{
        cy.log('Testcase one running')
    })

    it('Testcase case two',()=>{
        cy.log('Testcase two running')

    })


})