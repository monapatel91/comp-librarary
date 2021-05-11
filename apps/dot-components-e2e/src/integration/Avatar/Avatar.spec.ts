describe('dot-components: Avatar component', () => {
  before(() => cy.visit('/iframe.html?id=components-avatar--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-avatar');
  });

  it('should render the component', () => {
    cy.get('div').should('have.class', 'MuiAvatar-root');
  });

  describe('style decisions', () => {
    it('bottom border is correct', () => {
      cy.get('div.dot-avatar')
        .should('have.css', 'height', '40px')
        .and('have.css', 'width', '40px');
    });

    it('has correct colors', () => {
      cy.get('div.dot-avatar').should(
        'have.css',
        'background-color',
        'rgb(227, 229, 232)'
      );
      cy.get('h3.dot-typography').should(
        'have.css',
        'color',
        'rgb(59, 72, 92)'
      );
    });
  });

  describe('dot-components: Avatar component - custom colors', () => {
    before(() =>
      cy.visit('/iframe.html?id=components-avatar--default&args=color:yellow')
    );
    describe('custom color styles', () => {
      it('should use custom colors', () => {
        cy.get('div.dot-avatar').should(
          'have.css',
          'background-color',
          'rgb(238, 197, 17)'
        );
        cy.get('h3.dot-typography').should(
          'have.css',
          'color',
          'rgb(59, 72, 92)'
        );
      });
    });
  });
});
