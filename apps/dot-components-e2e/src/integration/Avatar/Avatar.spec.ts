describe('dot-components: Avatar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-avatar--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-avatar');
  });

  it('should render the component', () => {
    cy.get('div').should('have.class', 'MuiAvatar-root');
  });
});
