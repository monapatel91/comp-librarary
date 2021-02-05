describe('dot-components: Card component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=experimental-card--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-card');
  });

  it('should have h4 title', () => {
    cy.get('span').should('contain', 'Hello World');
    cy.get('span').should('have.class', 'MuiTypography-h4');
  });

  it('should have body2 subheader', () => {
    cy.get('span').eq(1).should('contain', 'Well hello there');
    cy.get('span').eq(1).should('have.class', 'MuiTypography-body2');
  });

  it('should have content', () => {
    cy.get('div').should('contain', 'Do you come to this card often?');
  });

  it('should have footer', () => {
    cy.get('div').should('contain', 'This is a footer');
  });
});
