describe('dot-components: Button component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-button--default'));

  it('should have a dot- prefix', () => {
    cy.get('button').should('have.class', 'dot-button');
  });

  it('should render the component', () => {
    cy.get('button').should('contain', 'Button');
  });
});
