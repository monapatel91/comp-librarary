describe('dot-components: Dialog component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dotdialog--dialog'));

  it('should render the component', () => {
    cy.get('h2').should('contain', 'The title');
  });
});
