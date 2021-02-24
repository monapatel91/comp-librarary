describe('dot-components: Progress component', () => {
  before(() => cy.visit('/iframe.html?id=components-progress--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-progress');
  });

  it('should render a circular progress component', () => {
    cy.get('svg').should('have.class', 'MuiCircularProgress-svg');
  });

  it('should be rotating', () => {
    cy.get('div').should('have.class', 'MuiCircularProgress-indeterminate');
  });

  describe('style decisions', () => {
    it('color', () => {
      cy.get('div.dot-progress').should(
        'have.css',
        'color',
        'rgb(100, 154, 61)'
      );
    });
  });
});
