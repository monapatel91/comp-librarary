describe('dot-components: List component', () => {
  before(() => cy.visit('/iframe.html?id=components-list--default'));

  it('should have a dot- prefix', () => {
    cy.get('ul').should('have.class', 'dot-list');
    cy.get('p').should('have.class', 'dot-typography');
  });

  it('should render the component', () => {
    cy.get('span').should('contain', 'Progressions');
  });

  it('divider item should not be interactable', () => {
    cy.get('.MuiListSubheader-root:first-of-type').trigger('mouseover');
    cy.get('.MuiListSubheader-root').should(
      'have.css',
      'background-color',
      'rgba(0, 0, 0, 0)'
    );
  });

  describe('style decisions', () => {
    it('toggle icon is pushed to the right', () => {
      cy.get('span.dot-list-item-link').should('have.css', 'flex-grow', '2');
    });

    it('end icon should be right aligned', () => {
      // need to target a different way
      cy.get('.dot-list-item-end-icon').should('have.css', 'min-width', 'auto');
    });

    it('font format', () => {
      cy.get('span.dot-list-item-link p').should(
        'have.css',
        'color',
        'rgb(59, 72, 92)'
      );
    });
  });
});

describe('dot-components: List component with menu', () => {
  before(() =>
    cy.visit(
      '/iframe.html?id=components-list--default&args=nestedListType:menu'
    )
  );

  it('should display the nested list as a menu with icons shown', () => {
    cy.contains('Progressions').click();
    cy.get('.dot-menu').should('be.visible').contains('Package Progression');
    cy.get('.dot-menu').get('.icon-block').should('be.visible');
    cy.contains('Package Progression').should('be.visible');
    cy.contains('Insights').click();
    cy.contains('Package Progression').should('not.exist');
    cy.contains('Nested Link One').should('be.visible');
  });
});

describe('dot-components: List component with expand/collapse', () => {
  before(() =>
    cy.visit(
      '/iframe.html?id=components-list--default&args=nestedListType:expandable'
    )
  );

  it('should display the nested list as a expand/collapse', () => {
    cy.contains('Progressions').click();
    cy.get('.dot-list').should('be.visible').contains('Package Progression');
  });
});
