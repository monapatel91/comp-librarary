describe('dot-components: Progression Board component', () => {
  before(() =>
    cy.visit('/iframe.html?id=experimental-progressionboard--default')
  );

  describe('style decisions', () => {
    it('maintain workitems should render as red', () => {
      cy.get('li').should('have.class', 'maintain');
      cy.get('li.maintain').should('have.css', 'color', 'rgb(214, 31, 33)');
    });

    it('should have correct text color in tooltip', () => {
      cy.get('.wi-tooltip').should('have.css', 'color', 'rgb(255, 255, 255)');
    });

    it('should have red icon in tooltip', () => {
      cy.get('li.maintain').first().trigger('mouseover');
      cy.get('.dot-icon.maintain i')
        .should('be.visible')
        .and('have.css', 'color', 'rgb(214, 31, 33)');
    });

    it('improve workitems should render as green', () => {
      cy.get('li').should('have.class', 'improve');
      cy.get('li.improve').should('have.css', 'color', 'rgb(73, 133, 0)');
    });

    it('should have green icon in tooltip', () => {
      cy.get('li.improve').first().trigger('mouseover');
      cy.get('.dot-icon.improve i')
        .should('be.visible')
        .and('have.css', 'color', 'rgb(73, 133, 0)');
    });

    it('rogue commit icon should render as yellow', () => {
      cy.get('i').should('have.class', 'icon-rogue-commits');
      cy.get('i.icon-rogue-commits').should(
        'have.css',
        'color',
        'rgb(255, 158, 73)'
      );
    });

    it('error icon should render as red', () => {
      cy.get('i').should('have.class', 'icon-error-outlines');
      cy.get('i.icon-error-outlines').should(
        'have.css',
        'color',
        'rgb(214, 31, 33)'
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

    it('check icon should render as blue', () => {
      cy.get('i').should('have.class', 'icon-check-solid');
      cy.get('i.icon-check-solid').should(
        'have.css',
        'color',
        'rgb(61, 108, 158)'
      );
    });
  });

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

  it('should use Lato', () => {
    cy.get('.board-column-header h3').should(
      'have.css',
      'font-family',
      'LatoBold, sans-serif'
    );
  });

  it('should open new tab when work-item is clicked', () => {
    cy.window()
      .then((win) => cy.stub(win, 'open'))
      .as('popup');
    cy.get('li.improve').first().click();
    cy.get('@popup').should('be.called');
  });
});
