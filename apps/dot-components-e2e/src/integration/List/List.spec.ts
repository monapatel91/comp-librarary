import { grey } from '@material-ui/core/colors';

describe('dot-components: List component', () => {
  before(() => cy.visit('/iframe.html?id=experimental-list--default'));

  it('should have a dot- prefix', () => {
    cy.get('ul').should('have.class', 'dot-list');
    cy.get('p').should('have.class', 'dot-typography');
  });

  it('should render the component', () => {
    cy.get('span').should('contain', 'Progressions');
  });

  describe('style decisions', () => {
    it('toggle icon is pushed to the right', () => {
      cy.get('a.dot-link').should('have.css', 'flex-grow', '2');
    });

    it('font format', () => {
      cy.get('a.dot-link p').should('have.css', 'color', 'rgb(59, 72, 92)');
    });
  });
});
