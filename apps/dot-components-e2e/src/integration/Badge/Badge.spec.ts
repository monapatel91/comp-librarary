describe('dot-components: Badge component', () => {
  before(() =>
    cy.visit(
      '/iframe.html?id=components-badge--default&args=badgeColor:!hex(33d389)'
    )
  );

  it('should have a dot- prefix', () => {
    cy.get('span').should('have.class', 'dot-badge');
  });

  it('should render the component', () => {
    cy.get('span').should('have.class', 'MuiBadge-root');
  });

  describe('style decisions', () => {
    it('should display custom color if provided', () => {
      cy.get('.MuiBadge-badge').should(
        'have.css',
        'background-color',
        'rgb(51, 211, 137)'
      );
    });
  });
});
