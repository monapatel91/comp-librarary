xdescribe('dot-components: Progression Board component', () => {
  const drawerPaperClass = '.dot-drawer-paper';
  const drawerContentDescription = '.drawer-content-description';
  const drawerContentOwner = '.drawer-content-owner';
  const drawerContentSource = '.drawer-content-source';

  before(() => {
    cy.visit(
      '/iframe.html?id=experimental-progressionboardwithdrawer--default'
    );
    cy.get('li.improve').first().click();
  });

  describe('style decisions', () => {
    it('should use Typography for text', () => {
      cy.get('.drawer-content h3.MuiTypography-root').should(
        'have.css',
        'font-family',
        'LatoBold, sans-serif'
      );
      cy.get('.drawer-content h4.MuiTypography-root').should(
        'have.css',
        'font-family',
        'LatoBold, sans-serif'
      );
      cy.get('.drawer-content p.MuiTypography-root').should(
        'have.css',
        'font-family',
        'Lato, sans-serif'
      );
    });
  });

  it('should display drawer', () => {
    cy.get('.dot-drawer-paper').should('be.visible');
  });

  it('should correctly display description skeletons when workitem details are loading', () => {
    cy.get(`${drawerPaperClass} ${drawerContentDescription}`).should(
      'be.visible'
    );
    cy.get(`${drawerPaperClass} ${drawerContentDescription} .dot-skeleton`)
      .its('length')
      .should('eq', 15);
  });

  it('should display correct workitem description text', () => {
    cy.get(`${drawerPaperClass} ${drawerContentDescription}`).contains(
      'Jira task git minor changes'
    );
  });

  it('should display correct workitem owner', () => {
    cy.get(`${drawerPaperClass} ${drawerContentOwner} .owner-name span`)
      .scrollIntoView()
      .contains('Elissa Brandt');
  });

  it('should display correct workitem source name', () => {
    cy.get(`${drawerPaperClass} ${drawerContentSource} .source-body span`)
      .scrollIntoView()
      .contains('Jira');
  });

  it('should display source open button icon', () => {
    cy.get(`${drawerPaperClass} ${drawerContentSource} .source-open-btn`)
      .scrollIntoView()
      .should('be.visible');
  });
});
