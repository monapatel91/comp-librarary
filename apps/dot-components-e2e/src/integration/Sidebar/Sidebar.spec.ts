describe('dot-components: Sidebar component', () => {
  before(() => cy.visit('/iframe.html?id=components-sidebar--default'));

  it('should have a dot- prefix', () => {
    cy.get('aside').should('have.class', 'dot-sidebar');
    cy.get('h4').should('have.class', 'dot-typography');
  });

  describe('style decisions', () => {
    it('aside styling', () => {
      cy.get('aside.dot-sidebar')
        .should('have.css', 'background-color', 'rgb(243, 245, 246)')
        .and('have.css', 'color', 'rgb(59, 72, 92)')
        .and('have.css', 'padding-top', '4px')
        .and('have.css', 'width', '240px');
    });

    it('nav items', () => {
      cy.get('.side-nav')
        .should('have.css', 'overflow-x', 'hidden')
        .and('have.css', 'overflow-y', 'auto');
    });

    it('nav item', () => {
      cy.get('.dot-list-item').should('have.css', 'height', '44px');
    });

    it('nav divider', () => {
      cy.get('hr.MuiDivider-root')
        .should('have.css', 'margin-top', '8px')
        .and('have.css', 'background-color', 'rgb(227, 229, 232)');
    });

    it('toggle nav', () => {
      cy.get('div.toggle-nav')
        .should('have.css', 'padding-top', '8px')
        .and('have.css', 'padding-right', '6px')
        .and('have.css', 'padding-bottom', '0px');

      cy.get('div.toggle-nav button.dot-icon-btn')
        .should('have.css', 'padding-top', '10px')
        .and('have.css', 'padding-left', '10px');
    });

    it('powered by', () => {
      cy.get('div.powered-by')
        .should('have.css', 'color', 'rgb(102, 115, 133)')
        .and('have.css', 'font-size', '12px')
        .and('have.css', 'padding-top', '8px')
        .and('have.css', 'padding-left', '8px')
        .and('have.css', 'margin-top', '8px')
        .and('have.css', 'margin-left', '8px');

      cy.get('div.powered-by svg.company-name').should(
        'have.css',
        'margin-top',
        '8px'
      );
    });
  });
});
