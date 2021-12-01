describe('dot-components: FileUpload component', () => {
  before(() => cy.visit('/iframe.html?id=experimental-file-upload--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-file-upload');
    cy.get('div').should('have.class', 'dot-file-upload-container');
  });

  it('should have dropzone styled', () => {
    cy.get('.dot-file-upload')
      .should('have.css', 'background-color', 'rgb(243, 245, 246)')
      .and('have.css', 'border', '2px dashed rgb(164, 172, 182)')
      .and('have.css', 'border-radius', '4px')
      .and('have.css', 'padding', '24px 0px');
  });

  it('should have custom size dropzone icon', () => {
    cy.get('.dot-file-upload .dot-icon').should('have.css', 'height', '100px');
  });
});
