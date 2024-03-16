/// <reference types="cypress" />
import cartPage from "../support/pages/cart.page";
import catalogPage from "../support/pages/catalog.page";
import productsPage from "../support/pages/products.page";
import checkoutPage from "../support/pages/checkout.page";
const productData = require("../fixtures/products.json")
const addressData = require("../fixtures/address.json")

describe('E2E - EBAC Shop order flow', () => {
    
    beforeEach(() => {
        catalogPage.accessCatalog()
    });

    it.only('Should add itens to the cart', () => {
        for (const product of productData) {
            catalogPage.accessCatalog()
            productsPage.setProduct(product.product, product.size, product.color, product.quantity)
        }
        productsPage.navigateCart()
        cartPage.checkout()
        checkoutPage.finalizePurchase(
            addressData[0].name,
            addressData[0].lastname,
            addressData[0].company,
            addressData[0].country,
            addressData[0].address,
            addressData[0].number,
            addressData[0].city,
            addressData[0].state,
            addressData[0].zipcode,
            addressData[0].phone,
            addressData[0].email,
            addressData[0].observations
        )
        cy.get(".woocommerce-notice").should(
            "contain",
            "Obrigado. Seu pedido foi recebido."
        )
    });

});