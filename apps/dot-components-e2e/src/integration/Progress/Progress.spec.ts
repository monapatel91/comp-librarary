describe('dot-components: Progress component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=progress--progress'));

  it('should render the component', () => {
    cy.get('table').should('contain', 'Sample Label');
  });
});
