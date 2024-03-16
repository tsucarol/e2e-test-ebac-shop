class cartPage {
    
    checkout() {
        cy.get('.checkout-button').click()  
    }
}

export default new cartPage()