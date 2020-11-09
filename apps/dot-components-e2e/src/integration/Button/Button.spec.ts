describe('dot-components: Button component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dotbutton--button'));

  it('should render the component', () => {
    cy.get('button').should('contain', 'Button');
  });
});
