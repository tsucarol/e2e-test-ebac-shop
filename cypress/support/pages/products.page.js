class productsPage {

    setProduct(product, size, color, quantity){
        cy.get('[class="product-block grid"]').contains(product).click()
        cy.get('.button-variable-item-' + size).click()
        cy.get('.button-variable-item-' + color).click()
        cy.get('.input-text').clear().type(quantity)        
        cy.get('.single_add_to_cart_button').click()
    }

    navigateCart(){
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
    }
}

export default new productsPage()