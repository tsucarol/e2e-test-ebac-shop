/// <reference types="cypress" />

describe('Funcionalidade página de produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve adicionar produtos ao carrinho', () => {
        cy.addProdutos('Frankie Sweatshirt', 'M', 'White', 2)
        cy.get('.woocommerce-message')
            .should('contain', 'adicionados no seu carrinho')

        cy.addProdutos('Hawkeye Yoga Short', 33, 'Black', 10)
        cy.get('.woocommerce-message')
            .should('contain', 'adicionados no seu carrinho')
        
    });

    it('Deve apresentar erro ao adicionar mais de 10 itens', () => {
        cy.addProdutos('Eos V-Neck Hoodie', 'XL', 'Green', 11)
        cy.get('.woocommerce-message')
            .should('contain', 'Não é permitido adicionar mais de 10 itens no carrinho')
    });

});