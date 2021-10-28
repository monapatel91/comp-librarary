describe('dot-components: <%=normalizedName%> component', () => {
  before(() => cy.visit('/iframe.html?id=experimental-<%=fileName%>--default'));

  it('should have a dot- prefix', () => {
    // `div` needs to be replaced with root element
    cy.get('div').should('have.class', '<%=className%>');
  });
});
