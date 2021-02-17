describe('dot-components: Progression Board component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=experimental-progressionboard--default')
  );

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-progression-board');
  });

  it('should render the board headers', () => {
    cy.get('div').should('have.class', 'board-headers');
    cy.get('div.board-headers')
      .should('contain', 'Build')
      .and('contain', 'Acceptance Test')
      .and('contain', 'Performance Test')
      .and('contain', 'Ready for Delivery')
      .and('contain', 'Canary Release');
  });

  it('should render the swimlane headers', () => {
    cy.get('div').should('have.class', 'swimlane-header');
    cy.get('div.swimlane-column')
      .should('contain', 'api')
      .and('contain', 'database')
      .and('contain', 'webstore');
  });
});

describe('dot-components: Progression Board style decisions', () => {
  it('maintain workitems should render as red', () => {
    cy.get('li').should('have.class', 'maintain');
    cy.get('li.maintain').should('have.css', 'color', 'rgb(105, 1, 0)');
  });

  it('improve workitems should render as green', () => {
    cy.get('li').should('have.class', 'improve');
    cy.get('li.improve').should('have.css', 'color', 'rgb(70, 127, 27)');
  });

  it('rogue commit icon should render as yellow', () => {
    cy.get('i').should('have.class', 'icon-rogue-commits');
    cy.get('i.icon-rogue-commits').should(
      'have.css',
      'color',
      'rgb(234, 171, 0)'
    );
  });

  it('error icon should render as red', () => {
    cy.get('i').should('have.class', 'icon-error-outlines');
    cy.get('i.icon-error-outlines').should(
      'have.css',
      'color',
      'rgb(213, 33, 1)'
    );
  });

  it('file icon should render as blue', () => {
    cy.get('i').should('have.class', 'icon-file-dotted');
    cy.get('i.icon-file-dotted').should('have.css', 'color', 'rgb(0, 82, 147)');
  });

  it('check icon should render as blue', () => {
    cy.get('i').should('have.class', 'icon-check-solid');
    cy.get('i.icon-check-solid').should(
      'have.css',
      'color',
      'rgb(0, 169, 224)'
    );
  });
});
