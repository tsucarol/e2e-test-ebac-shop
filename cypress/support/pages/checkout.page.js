class checkoutPage {

    finalizePurchase(name, lastname, company, country, address, number, city, state, zipcode, phone, email, observations) {
        cy.get('#billing_first_name').clear().type(name)
        cy.get('#billing_last_name').clear().type(lastname)
        cy.get('#billing_company').clear().type(company)
        cy.get('#select2-billing_country-container').click().type(country).get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type(address)
        cy.get('#billing_address_2').clear().type(number)
        cy.get('#billing_city').clear().type(city)
        cy.get('#select2-billing_state-container').click().type(state + '{enter}')
        cy.get('#billing_postcode').clear().type(zipcode)
        cy.get('#billing_phone').clear().type(phone)
        cy.get('#billing_email').clear().type(email)
        cy.get('#order_comments').clear().type(observations)
        cy.get('#terms').click()
        cy.get('#place_order').click()
    }
}

export default new checkoutPage()