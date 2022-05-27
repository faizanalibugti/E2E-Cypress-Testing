/// <reference types="cypress" />

describe('Create a New Item', () => {
    beforeEach(() => {
        cy.visit('./jetsetter')
    })

    it('should have a form', () => {
        cy.get('form').should('exist')
    })

    it('should contain the words "Add Item"', () => {
        cy.contains('Add Item')
    })

    it('should put stuff in the input field', () => {
        cy.get('[data-test="new-item-input"]').type("Hello World")
    })
});
