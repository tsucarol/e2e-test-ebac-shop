class catalogPage {

    accessCatalog() {
        cy.visit('produtos/')
        cy.get('[class="page-numbers"]')
        .contains('4')
        .click()
    }
}

export default new catalogPage()