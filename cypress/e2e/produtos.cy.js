/// <reference types="cypress" />

describe('Funcionalidade página de produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve adicionar produtos ao carrinho', () => {
        cy.addProdutos('Hawkeye Yoga Short', 33, 'Black', 2)
    });
});