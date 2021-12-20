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
        .and('have.css', 'margin-bottom', '0px')
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

describe('responsive tests', () => {
  before(() =>
    cy.visit(
      '/iframe.html?id=components-breadcrumbs--default&args=minWidth:1200'
    )
  );
  it('limits the maxItems shown when container smaller than breadcrumbs', () => {
    cy.get('div').should('contain', 'Link 1');
    cy.get('div').should('contain', 'Link 5');
    cy.get('Link 4').should('not.exist');
  });
});

describe('automatic items adjustment', () => {
  const expectItemToBeVisible = (itemText: string) =>
    cy.contains(itemText).should('be.visible');
  const expectItemNotToBeInTheList = (itemText: string) =>
    cy.get('ul').should('not.contain', itemText);

  before(() => cy.visit('/iframe.html?id=components-breadcrumbs--default'));

  it('should NOT contain tooltip element when last item is fully visible', () => {
    cy.viewport(1000, 700);
    cy.get('.dot-tooltip').should('not.exist');
  });

  it('should display hover when last item is not fully visible', () => {
    // Simulate scenario in which last item is not fully visible thus can be hovered
    cy.viewport(460, 700);
    expectItemToBeVisible('Link 1');
    expectItemToBeVisible('Link 2');
    expectItemToBeVisible('Link 3');
    expectItemToBeVisible('Link 4');
    expectItemToBeVisible('Link 5');
    cy.get('.dot-tooltip').trigger('mouseover');
    cy.get('.MuiTooltip-popper').contains('Link 5').should('be.visible');
  });

  it('should display only first and last item', () => {
    cy.viewport(250, 700);
    expectItemToBeVisible('Link 1');
    expectItemNotToBeInTheList('Link 2');
    expectItemNotToBeInTheList('Link 3');
    expectItemNotToBeInTheList('Link 4');
    expectItemToBeVisible('Link 5');
  });
});
