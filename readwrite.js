
describe('verify the readwrite operation',()=>{
    it('verify the write function',()=>{
        cy.writeFile('text.txt',"I am learning javascript \n")
        cy.writeFile('text.txt',"Hello",{flag:'a+'})                    
    })
    
    it('verify the read function',()=>{
        cy.readFile('text.txt').should('exist').and('contain',"Hello")
        cy.readFile('text.txt').should('contain',"Hello")
    })
    it('verify the write json function',()=>{
        cy.writeFile('cypress/fixtures/abc.json',{
            "fullname":"shubham sanjay keche",
            "age":25,
            "rollNo":35
        })
    })
    it('verify the read json function',()=>{
        cy.fixture("abc").then((response)=>{
            cy.log(response)
        })
    })

})