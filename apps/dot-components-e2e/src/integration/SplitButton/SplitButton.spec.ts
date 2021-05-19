describe('dot-components: Button component', () => {
  before(() => cy.visit('/iframe.html?id=experimental-splitbutton--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-split-button-group');
  });

  it('should render the component', () => {
    cy.get('button').should('contain', 'option 1');
  });

  xit('should toggle menu when right button clicked', () => {
    cy.contains('option 3').should('not.be.visible');
    cy.get('button.dot-button').eq(1).click();
    cy.contains('option 3').should('be.visible');
    cy.get('button.dot-button').eq(1).click();
    cy.contains('option 3').should('not.be.visible');
  });

  xit('should change selection when menu item clicked', () => {
    cy.contains('option 1').should('be.visible');
    cy.contains('option 3').should('not.be.visible');
    cy.get('button.dot-button').eq(1).click();
    cy.contains('option 3').click();
    cy.contains('option 3').should('be.visible');
    cy.contains('option 1').should('not.be.visible');
  });

  describe('style decisions', () => {
    it('button has margin 0px', () => {
      cy.get('button.dot-button').eq(0).should('have.css', 'margin', '0px');
      cy.get('button.dot-button').eq(1).should('have.css', 'margin', '0px');
    });
  });
});
