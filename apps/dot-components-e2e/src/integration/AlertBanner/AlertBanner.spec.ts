describe('dot-components: Alert Banner component', () => {
  before(() => cy.visit('/iframe.html?id=experimental-alertbanner--default'));
  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-alert-banner');
  });
  describe('style decisions', () => {
    it('icon should have padding', () => {
      cy.get('.dot-alert-banner .MuiAlert-icon').should(
        'have.css',
        'padding',
        '14px 0px'
      );
    });
    it('alert text should have padding', () => {
      cy.get('.dot-alert-banner .MuiAlert-message').should(
        'have.css',
        'padding',
        '16px 0px'
      );
    });
    it('alert text should use subtitle2', () => {
      cy.get('.MuiAlert-message h6').should(
        'have.class',
        'MuiTypography-subtitle2'
      );
    });
  });
});
