describe('dot-components: Alert Banner component', () => {
  before(() => cy.visit('/iframe.html?id=experimental-alertbanner--default'));
  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-alert-banner');
  });
  describe('style decisions', () => {
    it('icon should not have padding', () => {
      cy.get('.dot-alert-banner .MuiAlert-icon').should(
        'have.css',
        'padding',
        '0px'
      );
    });
    it('alert text should not have padding', () => {
      cy.get('.dot-alert-banner .MuiAlert-message').should(
        'have.css',
        'padding',
        '0px'
      );
    });
    it('alert text should default to body1', () => {
      cy.get('.MuiAlert-message p').should('have.class', 'MuiTypography-body1');
    });
    it('dot-alert-banner should have proper style', () => {
      cy.get('.dot-alert-banner')
        .should('have.css', 'padding', '16px')
        .should('have.css', 'display', 'flex')
        .should('have.css', 'align-items', 'center')
    })
  });
});
