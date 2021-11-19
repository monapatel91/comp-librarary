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
        'rgb(61, 108, 158)'
      );
      cy.get('h3.dot-typography').should(
        'have.css',
        'color',
        'rgb(255, 255, 255)'
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

describe('Agility theme style decisions', () => {
  before(() =>
    cy.visit('/iframe.html?id=components-avatar--default&theme=agility-dark')
  );

  it('should apply the correct theme colors', () => {
    cy.get('div.dot-avatar').should(
      'have.css',
      'background-color',
      'rgb(61, 108, 158)'
    );
    cy.get('h3.dot-typography').should(
      'have.css',
      'color',
      'rgb(255, 255, 255)'
    );
  });
});

describe('dot-component: Avatar as button component', () => {
  before(() => cy.visit('/iframe.html?id=components-avatar--avatar-button'));
  it('should have two box shadow on focus state', () => {
    cy.get('button.dot-avatar').focus();
    cy.get('button.dot-avatar:focus-visible').should(
      'have.css',
      'box-shadow',
      'rgb(255, 255, 255) 0px 0px 0px 3px, rgb(35, 46, 64) 0px 0px 0px 5px'
    );
  });
});
