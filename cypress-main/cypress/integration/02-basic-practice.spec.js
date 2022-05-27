/// <reference types="cypress" />

describe('Basic Practice', () => {
  beforeEach(() => {
    cy.visit('/jetsetter');
  });

  describe('Adding a new item', () => {
    it('should put a new item on the page after clicking on "Add Item"', () => {
      let item = 'iPod'
      cy.get('[data-test="new-item-input"]').type(item)
      cy.get('[data-test="add-item"]').click()
      cy.contains(item)
    });

    it('should put a new item in the "Unpacked Items" list', () => {
      let item = 'iPod'
      cy.get('[data-test="new-item-input"]').type(item)
      cy.get('form').submit()
      cy.get('[data-test="items-unpacked"] li').contains(item)
    });

    it('should put a new item as the last item in the "Unpacked Items" list', () => {
      let item = 'iPod'
      cy.get('[data-test="new-item-input"]').type(item)
      cy.get('form').submit()
      cy.get('[data-test="items-unpacked"] li').last().contains(item)

    });
  });

  describe('Filtering items', () => {
    it('should show items that match whatever is in the filter field', () => {
      cy.get('[data-test="filter-items"]').type("Tooth")

      cy.get('[data-test="items-unpacked"] li').contains("Tooth Brush")
      cy.get('[data-test="items-unpacked"] li').contains("Tooth Paste")

      cy.get('[data-test="items-unpacked"] li').each(($item) => {
        expect($item).to.include.text('Tooth')
      })
    });

    it('should hide items that do not match whatever is in the filter field', () => {
      cy.get('[data-test="filter-items"]').type("Tooth")

      cy.contains('Hoodie').should('not.exist')
    });
  });

  describe('Removing items', () => {
    describe('Remove all', () => {
      it('should remove all of the items', () => {
        cy.get('[data-test="remove-all"]').click()

        cy.get('[data-test="items-unpacked"] li').should('not.exist')
      });
    });

    describe('Remove individual items', () => {
      it('should have a remove button on an item', () => {
        cy.get('[data-test="items-unpacked"] li').each(($item) => {
          // expect($item).to.include.text('Remove')
          cy.wrap($item).find('[data-test="remove"]').should('exist')
        })

      });

      it('should remove an item from the page', () => {
        cy.get('[data-test="items-unpacked"] li').each(($item) => {
          // expect($item).to.include.text('Remove')
          cy.wrap($item).find('[data-test="remove"]').click()
          cy.wrap($item).should('not.exist')
        })
      });
    });
  });

  describe('Mark all as unpacked', () => {
    it('should empty out the "Packed" list', () => {});

    it('should empty have all of the items in the "Unpacked" list', () => {});
  });

  describe('Mark individual item as packed', () => {
    it('should move an individual item from "Unpacked" to "Packed"', () => {});
  });
});
