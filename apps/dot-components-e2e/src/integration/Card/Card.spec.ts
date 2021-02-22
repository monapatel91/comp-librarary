describe('dot-components: Card component', () => {
  before(() => cy.visit('/iframe.html?id=components-card--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-card');
  });

  it('should have h2 title', () => {
    cy.get('span').should('contain', 'Hello World');
    cy.get('span').should('have.class', 'MuiTypography-h2');
  });

  it('should have body1 subheader', () => {
    cy.get('span').eq(1).should('contain', 'Well hello there');
    cy.get('span').eq(1).should('have.class', 'MuiTypography-body1');
  });

  it('should have content', () => {
    cy.get('div').should('contain', 'Do you come to this card often?');
  });

  it('should have footer', () => {
    cy.get('div').should('contain', 'This is a footer');
  });

  describe('style decisions', () => {
    it('size and spacing is correct', () => {
      cy.get('div.dot-card')
        .should('have.css', 'color', 'rgb(59, 72, 92)')
        .and('have.css', 'font-size', '12px');
    });
  });
});
