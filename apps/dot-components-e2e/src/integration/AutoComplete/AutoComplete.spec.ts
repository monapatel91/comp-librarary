const basePath = '/iframe.html?id=components-auto-complete--default';
const withActionItemPath =
  '/iframe.html?id=components-auto-complete--with-action-item';

describe('dot-components: Auto Complete component', () => {
  before(() => cy.visit(basePath));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-autocomplete');
  });

  it('should render the component', () => {
    cy.get('input').should('have.class', 'MuiAutocomplete-input');
  });

  describe('style decisions', () => {
    it('sizing is correct', () => {
      cy.get('div.dot-autocomplete div.MuiAutocomplete-inputRoot')
        .should('have.css', 'padding-right', '12px')
        .and('have.css', 'margin-bottom', '4px');
    });

    it('border is correct', () => {
      cy.get('div.dot-autocomplete div.MuiAutocomplete-inputRoot').should(
        'have.css',
        'padding-right',
        '12px'
      );
    });

    it('end adornment is styled correctly', () => {
      cy.get('div.dot-autocomplete div.MuiAutocomplete-endAdornment').should(
        'have.css',
        'right',
        '9px'
      );
    });
  });

  describe('with action item', () => {
    before(() => {
      cy.visit(withActionItemPath);
      cy.get('.dot-autocomplete .MuiAutocomplete-input').click();
    });

    it('should render action item with correct styles', () => {
      cy.get('.dot-action-item .dot-button')
        .should('have.css', 'height', '56px')
        .and('have.css', 'padding', '6px 16px')
        .and('have.css', 'margin', '0px');
    });

    it('should render non-focused action item with correct styles', () => {
      cy.get('.dot-action-item .dot-button').should(
        'have.css',
        'background-color',
        'rgba(0, 0, 0, 0)'
      );
    });

    xit('should render focused action item with correct styles', () => {
      cy.get('.dot-action-item .dot-button').focus();
      cy.get('.dot-action-item button:focus').should(
        'have.css',
        'background-color',
        'rgb(227, 229, 232)'
      );
    });
  });
});

describe('Agility theme(s) decisions', () => {
  describe('agility-light theme style decisions', () => {
    before(() => {
      cy.visit(`${withActionItemPath}&theme=agility-light`);
      cy.get('.dot-autocomplete .MuiAutocomplete-input').click();
    });

    it('should render non-focused action item with correct styles', () => {
      cy.get('.dot-action-item .dot-button').should(
        'have.css',
        'background-color',
        'rgba(0, 0, 0, 0)'
      );
    });

    xit('should render focused action item with correct styles', () => {
      cy.get('.dot-action-item .dot-button').focus();
      cy.get('.dot-action-item button:focus-visible').should(
        'have.css',
        'background-color',
        'rgb(195, 219, 228)'
      );
    });
  });

  describe('agility-dark theme style decisions', () => {
    before(() => {
      cy.visit(`${withActionItemPath}&theme=agility-dark`);
      cy.get('.dot-autocomplete .MuiAutocomplete-input').click();
    });

    it('should apply the correct theme colors', () => {
      cy.get('.dot-text-field').should(
        'have.css',
        'background-color',
        'rgba(0, 0, 0, 0)'
      );
    });

    it('should render non-focused action item with correct styles', () => {
      cy.get('.dot-action-item .dot-button').should(
        'have.css',
        'background-color',
        'rgba(0, 0, 0, 0)'
      );
    });

    xit('should render focused action item with correct styles', () => {
      cy.get('.dot-action-item .dot-button').focus();
      cy.get('.dot-action-item button:focus-visible').should(
        'have.css',
        'background-color',
        'rgb(51, 98, 117)'
      );
    });
  });
});
