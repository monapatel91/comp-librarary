describe('dot-components: Menu component', () => {
  before(() => cy.visit('/iframe.html?id=components-menu--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-menu');
    cy.get('ul').should('have.class', 'dot-ul');
    cy.get('li').should('have.class', 'dot-li');
  });

  it('should not have children within parent DOM hierarchy', () => {
    cy.get('div.dot-menu').parent().should('not.have.id', 'root');
  });

  describe('style decisions', () => {
    it('ul has correct size constraints and overflow handling', () => {
      cy.get('ul.MuiList-root')
        .should('have.css', 'min-width', '112px')
        .and('have.css', 'overflow', 'auto');
    });
  });
});

describe('Agility theme style decisions', () => {
  before(() =>
    cy.visit('/iframe.html?id=components-menu--default&theme=agility-dark')
  );

  it('should apply the correct theme colors', () => {
    cy.get('.dot-menu ul.dot-ul').should(
      'have.css',
      'background-color',
      'rgb(36, 68, 81)'
    );
  });
});
