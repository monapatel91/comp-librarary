describe('dot-components: Input Text Field component', () => {
  before(() => cy.visit('/iframe.html?id=components-input-text--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-text-field');
  });

  it('should render the component', () => {
    cy.get('input').should('have.class', 'MuiInputBase-input');
    cy.get('input').should('have.class', 'dot-input');
  });

  describe('style decisions', () => {
    it('label', () => {
      cy.get('label.MuiFormLabel-root')
        .should('have.css', 'color', 'rgb(59, 72, 92)')
        .and('have.css', 'font-size', '14px')
        .and('have.css', 'margin-bottom', '4px');
    });

    it('field wrapper', () => {
      cy.get('div.MuiInputBase-root')
        .should('have.css', 'color', 'rgb(59, 72, 92)')
        .and('have.css', 'font-size', '14px')
        .and('have.css', 'margin-bottom', '4px');
    });

    it("should have 'box-sizing' explicitly set to 'content-box'", () => {
      cy.get('input.MuiInputBase-input').should(
        'have.css',
        'box-sizing',
        'content-box'
      );
    });
  });
});

describe('Agility theme style decisions', () => {
  before(() =>
    cy.visit(
      '/iframe.html?id=components-input-text--default&theme=agility-dark'
    )
  );

  it('should apply the correct theme colors', () => {
    cy.get('div.MuiInputBase-root').should(
      'have.css',
      'color',
      'rgb(255, 255, 255)'
    );
    cy.get('label.MuiFormLabel-root').should(
      'have.css',
      'color',
      'rgb(255, 255, 255)'
    );
  });
});
