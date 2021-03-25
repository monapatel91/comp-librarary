describe('dot-components: Breadcrumbs component', () => {
  before(() => cy.visit('/iframe.html?id=components-breadcrumbs--default'));

  it('should have a dot- prefix', () => {
    cy.get('nav').should('have.class', 'dot-breadcrumbs');
  });

  it('should have ol with a dot- prefix', () => {
    cy.get('ol').should('have.class', 'dot-ol');
  });

  it('should have li with a dot- prefix', () => {
    cy.get('li').should('have.class', 'dot-li');
  });

  it('should render the component', () => {
    cy.get('div').should('contain', 'Link 1');
    cy.get('div').should('contain', 'Link 5');
  });

  describe('style decisions', () => {
    it('breadcrumb size & spacing is accurate', () => {
      cy.get('nav.dot-breadcrumbs')
        .should('have.css', 'font-size', '14px')
        .and('have.css', 'margin-bottom', '4px')
        .and('have.css', 'line-height', '20px');
    });

    it('breadcrumbs correct color', () => {
      cy.get('nav.dot-breadcrumbs .MuiBreadcrumbs-li').should(
        'have.css',
        'color',
        'rgb(164, 172, 182)'
      );
    });

    it('current page is correct color', () => {
      cy.get('nav.dot-breadcrumbs .MuiBreadcrumbs-li .current-page').should(
        'have.css',
        'color',
        'rgb(59, 72, 92)'
      );
    });
  });
});
