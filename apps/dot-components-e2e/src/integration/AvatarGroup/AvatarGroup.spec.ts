describe('dot-components: Avatar Group component', () => {
  before(() => cy.visit('/iframe.html?id=components-avatargroup--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-avatar-group');
  });

  describe('style decisions', () => {
    it('should default to medium spacing', () => {
      cy.get('div.dot-avatar:nth-of-type(2)').should(
        'have.css',
        'margin-left',
        '-8px'
      );
    });
  });
});
