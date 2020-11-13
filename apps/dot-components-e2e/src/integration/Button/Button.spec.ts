describe('dot-components: Button component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=button--button'));

  it('should render the component', () => {
    cy.get('button').should('contain', 'Button');
  });
});
