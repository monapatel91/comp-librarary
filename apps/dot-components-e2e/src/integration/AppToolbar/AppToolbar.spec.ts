const baseUrl = '/iframe.html?id=components-apptoolbar--default';
describe('dot-components: AppToolbar component', () => {
  before(() => {
    cy.visit(baseUrl);
    cy.get('.dot-main-menu-btn button.dot-icon-btn').click();
  });

  it('should have a dot- prefix', () => {
    cy.get('header').should('have.class', 'dot-app-toolbar');
  });

  it('should display small app logo when screensize below 1024px', () => {
    cy.viewport(1024, 768);
    cy.get('.dot-app-logo').should('have.class', 'small');
  });

  it('should display regular app logo when screensize above 1024px', () => {
    cy.viewport(1200, 768);
    cy.get('.dot-app-logo').should('not.have.class', 'small');
  });

  it('should display dense version appropriately', () => {
    cy.visit(`${baseUrl}&args=dense:true`);
    cy.get('header.dot-app-toolbar').should('have.class', 'dense');
    cy.get('header.dot-app-toolbar').should('have.css', 'height', '48px');
  });

  describe('style decisions', () => {
    before(() => {
      cy.visit(`${baseUrl}&args=dense:false`);
    });

    it('header background is correct', () => {
      cy.get('header.dot-app-toolbar').should(
        'have.css',
        'background-color',
        'rgb(59, 72, 92)'
      );
    });

    it('header sizing is correct', () => {
      cy.get('header.dot-app-toolbar').should('have.css', 'height', '64px');
    });

    it('border thickness is correct', () => {
      cy.get('header.dot-app-toolbar').should(
        'have.css',
        'border-bottom-width',
        '4px'
      );
    });

    it('hamburger menu icon is correct color', () => {
      cy.get('.dot-main-menu-btn button.dot-icon-btn').should(
        'have.css',
        'color',
        'rgb(227, 229, 232)'
      );
    });

    it('hamburger menu has correct width', () => {
      cy.get('div.MuiPaper-root').should('have.css', 'width', '240px');
    });
    it('Avatar button has two different color box shadow on focus state', () => {
      cy.get('.avatar-wrapper').within(() => {
        cy.get('.dot-button').focus();
        cy.get('.dot-button.Mui-focusVisible').within(() => {
          cy.get('.MuiButton-label').should(
            'have.css',
            'box-shadow',
            'rgb(255, 255, 255) 0px 0px 0px 5px'
          );
          cy.get('.dot-avatar').should(
            'have.css',
            'box-shadow',
            'rgb(35, 46, 64) 0px 0px 0px 3px'
          );
        });
      });
    });
  });
});
