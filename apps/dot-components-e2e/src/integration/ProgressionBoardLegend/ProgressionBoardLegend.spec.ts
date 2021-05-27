describe('dot-components: Progression Board Legend component', () => {
  before(() =>
    cy.visit('/iframe.html?id=product-progressionboardlegend--default')
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
      .and('contain', 'Rogue Commits')
      .and('contain', 'Delivery Forecast');
  });

  describe('style decisions', () => {
    it('maintain workitems should render as red', () => {
      cy.get('li').should('have.class', 'maintain');
      cy.get('li.maintain i.icon-circle').should(
        'have.css',
        'color',
        'rgb(214, 31, 33)'
      );
    });

    it('improve workitems should render as green', () => {
      cy.get('li').should('have.class', 'improve');
      cy.get('li.improve i.icon-circle').should(
        'have.css',
        'color',
        'rgb(73, 133, 0)'
      );
    });

    it('rogue commit icon should render as yellow', () => {
      cy.get('i').should('have.class', 'icon-rogue-commits');
      cy.get('i.icon-rogue-commits').should(
        'have.css',
        'color',
        'rgb(255, 158, 73)'
      );
    });

    it('file icon should render as blue', () => {
      cy.get('i').should('have.class', 'icon-file-dotted');
      cy.get('i.icon-file-dotted').should(
        'have.css',
        'color',
        'rgb(61, 108, 158)'
      );
    });

    it('should use Lato', () => {
      cy.get('li p').should('have.css', 'font-family', 'Lato, sans-serif');
    });
  });
});
