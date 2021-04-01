describe('dot-components: Button component', () => {
  before(() => cy.visit('/iframe.html?id=components-button--default'));

  it('should have a dot- prefix', () => {
    cy.get('button').should('have.class', 'dot-button');
  });

  it('should render the component', () => {
    cy.get('button').should('contain', 'Button');
  });

  describe('style decisions', () => {
    it('icon should be vertically centered', () => {
      cy.get('.dot-icon i').should('have.css', 'height', '35px');
    });

    it('button is correct size', () => {
      cy.get('button.dot-button')
        .should('have.css', 'padding-top', '6px')
        .and('have.css', 'padding-left', '16px')
        .and('have.css', 'padding-bottom', '6px')
        .and('have.css', 'padding-right', '16px')
        .and('have.css', 'min-width', '64px')
        .and('have.css', 'font-size', '14px');
    });

    it('primary button has correct color', () => {
      cy.get('button.dot-button')
        .should('have.css', 'background-color', 'rgb(61, 108, 158)')
        .and('have.css', 'color', 'rgb(255, 255, 255)');
    });
  });
});
