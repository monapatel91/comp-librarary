describe('dot-components: Phase Header component', () => {
  before(() => cy.visit('/iframe.html?id=experimental-phase-header--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-phase-header');
  });

  it('should render the component', () => {
    cy.get('button').should('have.class', 'phase-color');
    cy.get('button').should('have.class', 'delete-btn');
  });

  describe('style decisions', () => {
    it('container', () => {
      cy.get('div.dot-phase-header')
        .should('have.css', 'background-color', 'rgb(68, 82, 103)')
        .and('have.css', 'height', '44px')
        .and('have.css', 'width', '300px')
        .and('have.css', 'padding-right', '8px');
    });

    it('phase color', () => {
      cy.get('button.phase-color')
        .should('have.css', 'background-color', 'rgb(255, 158, 73)')
        .and('have.css', 'height', '44px')
        .and('have.css', 'width', '16px')
        .and('have.css', 'min-width', '16px');
    });

    it('phase content', () => {
      cy.get('div.phase-content')
        .should('have.css', 'display', 'flex')
        .and('have.css', 'flex-grow', '2')
        .and('have.css', 'color', 'rgb(255, 255, 255)');
    });

    it('phase inline edit', () => {
      cy.get('div.dot-inline-edit .MuiInputBase-root').should(
        'have.css',
        'color',
        'rgb(255, 255, 255)'
      );
    });
  });
});
