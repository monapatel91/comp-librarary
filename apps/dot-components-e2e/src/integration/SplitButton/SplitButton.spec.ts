describe('dot-components: Button component', () => {
  before(() => cy.visit('/iframe.html?id=experimental-splitbutton--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-split-button-group');
  });

  it('should render the component', () => {
    cy.get('button').should('contain', 'Hello');
  });

  describe('style decisions', () => {
    it('button has margin 0px', () => {
      cy.get('button.dot-button').eq(0).should('have.css', 'margin', '0px');
      cy.get('button.dot-button').eq(1).should('have.css', 'margin', '0px');
    });

    it('menu has z-index 9999', () => {
      cy.get('button.dot-button').eq(1).click();
      cy.get('div.dot-menu').eq(0).should('have.css', 'z-index', '9999');
    });
  });
});
