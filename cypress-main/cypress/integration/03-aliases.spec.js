/// <reference types="cypress" />

describe('Aliases', () => {
  beforeEach(() => {
    cy.visit('/jetsetter');

    cy.get('[data-test="filter-items"]').as('filter-items')
    cy.get('[data-test="items-unpacked"] li').as('items-unpacked')
  });

  describe('Filtering items', () => {
    it('should show items that match whatever is in the filter field', () => {
      cy.get('@filter-items').type("Tooth")
      cy.get('@items-unpacked').contains("Tooth Brush")
      cy.get('@items-unpacked').contains("Tooth Paste")
  
      cy.get('@items-unpacked').each(($item) => {
        expect($item).to.include.text('Tooth')
      })
    });
  
    it('should hide items that do not match whatever is in the filter field', () => {
      cy.get('@filter-items').type("Tooth")
  
      cy.contains('Hoodie').should('not.exist')
    });
  });
});

