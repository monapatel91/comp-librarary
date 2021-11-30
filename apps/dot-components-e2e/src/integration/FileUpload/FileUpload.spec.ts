describe('dot-components: FileUpload component', () => {
  before(() => cy.visit('/iframe.html?id=experimental-file-upload--default'));

  it('should have a dot- prefix', () => {
    // `div` needs to be replaced with root element
    cy.get('div').should('have.class', 'dot-file-upload');
  });
});
