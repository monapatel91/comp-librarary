describe('dot-components: Chip component', () => {
  before(() => cy.visit('/iframe.html?id=components-chip--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-chip');
  });

  it('should render the component', () => {
    cy.get('div').should('have.class', 'MuiAvatar-root');
    cy.get('div').should('contain', 'Hello World');
  });

  describe('style decisions', () => {
    it('avatar size and spacing is correct', () => {
      cy.get('div.dot-chip div.dot-avatar')
        .should('have.css', 'height', '24px')
        .and('have.css', 'width', '24px')
        .and('have.css', 'margin-left', '4px');
    });

    it('label size and spacing is correct', () => {
      cy.get('div.dot-chip span.MuiChip-label')
        .should('have.css', 'padding-left', '12px')
        .and('have.css', 'padding-right', '12px');
    });

    it('delete icon size and spacing is correct', () => {
      cy.get('div.dot-chip svg.MuiChip-deleteIcon')
        .should('have.css', 'height', '22px')
        .and('have.css', 'width', '22px')
        .and('have.css', 'margin-right', '5px');
    });
  });
});
