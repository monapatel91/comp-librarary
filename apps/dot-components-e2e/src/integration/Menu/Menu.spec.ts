const menuBaseUrl = '/iframe.html?id=components-menu--default';

describe('dot-components: Menu component', () => {
  before(() => cy.visit(menuBaseUrl));

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
        .and('have.css', 'overflow', 'auto')
        .and('have.css', 'box-sizing', 'content-box')
        .and('have.css', 'height', '217px');
    });
  });
});

describe('Agility theme style decisions', () => {
  before(() => cy.visit(`${menuBaseUrl}&theme=agility-dark`));

  it('should apply the correct theme colors', () => {
    cy.get('.dot-menu ul.dot-ul').should(
      'have.css',
      'background-color',
      'rgb(36, 68, 81)'
    );
  });
});

describe('correct height based on props', () => {
  it('ul has correct height', () => {
    cy.visit(`${menuBaseUrl}&args=dense:false`);
    cy.get('.dot-menu ul.dot-ul').should('have.css', 'height', '252px');
  });

  it('should apply custom menu item height', () => {
    cy.visit(`${menuBaseUrl}&args=menuItemHeight:50`);
    cy.get('.dot-menu ul.dot-ul').should('have.css', 'height', '371px');
  });
});
