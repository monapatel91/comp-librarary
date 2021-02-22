describe('dot-components: Confirmation Dialog component', () => {
  before(() =>
    cy.visit('/iframe.html?id=experimental-confirmation-dialog--default')
  );

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-confirmation-dialog');
  });

  it('should render the component', () => {
    cy.get('h2').should('contain', 'Please confirm');
  });

  describe('style decisions', () => {
    it('backdrop is correct color', () => {
      cy.get('div.MuiBackdrop-root').should(
        'have.css',
        'background-color',
        'rgba(0, 0, 0, 0.5)'
      );
    });

    it('dialog sizing', () => {
      cy.get('div.MuiDialog-paper')
        .should('have.css', 'max-width', '600px')
        .and('have.css', 'margin-left', '32px');
    });

    it('dialog header sizing', () => {
      cy.get('div.MuiDialogTitle-root')
        .should('have.css', 'padding-top', '8px')
        .and('have.css', 'padding-left', '16px')
        .and('have.css', 'padding-right', '16px')
        .and('have.css', 'padding-bottom', '8px');
    });

    it('dialog content sizing', () => {
      cy.get('div.dot-dialog-content')
        .should('have.css', 'padding-top', '8px')
        .and('have.css', 'padding-left', '16px')
        .and('have.css', 'padding-right', '16px')
        .and('have.css', 'padding-bottom', '8px');
    });

    it('dialog footer sizing', () => {
      cy.get('div.dot-dialog-actions')
        .should('have.css', 'padding-top', '8px')
        .and('have.css', 'padding-left', '8px')
        .and('have.css', 'padding-right', '8px')
        .and('have.css', 'padding-bottom', '8px');
    });
  });
});
