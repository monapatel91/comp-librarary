describe('dot-components: Progression Board Legend component', () => {
  before(() =>
    cy.visit('/iframe.html?id=experimental-progressionboardlegend--default')
  );

  it('should have a dot- prefix', () => {
    cy.get('ul').should('have.class', 'dot-progression-board-legend');
  });

  it('should render the legend items with icons', () => {
    cy.get('li')
      .should('contain', 'Defect')
      .and('contain', 'Trailing Commits (Defect)')
      .and('contain', 'Story')
      .and('contain', 'Trailing Commits (Story)')
      .and('contain', 'Other Workitem')
      .and('contain', 'Test Coverage')
      .and('contain', 'Quality Information')
      .and('contain', 'Rogue Commits')
      .and('contain', 'Pending Activity')
      .and('contain', 'Delivery Forecast')
      .and('contain', 'Activity or Control failed')
      .and('contain', 'Completed Activities')
      .and('contain', 'Failing Tests')
      .and('contain', 'Security Violations');
  });

  describe('style decisions', () => {
    it('maintain workitems should render as red', () => {
      cy.get('li').should('have.class', 'maintain');
      cy.get('li.maintain i.icon-circle').should(
        'have.css',
        'color',
        'rgb(153, 1, 0)'
      );
    });

    it('improve workitems should render as green', () => {
      cy.get('li').should('have.class', 'improve');
      cy.get('li.improve i.icon-circle').should(
        'have.css',
        'color',
        'rgb(89, 161, 33)'
      );
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
      cy.get('i.icon-file-dotted').should(
        'have.css',
        'color',
        'rgb(0, 82, 147)'
      );
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
});
