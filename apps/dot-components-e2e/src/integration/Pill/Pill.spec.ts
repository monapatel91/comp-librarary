describe('dot-components: Pill component', () => {
  before(() => cy.visit('/iframe.html?id=components-pill--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-pill');
  });

  it('should render the component', () => {
    cy.get('div').should('contain', 'Pill Component');
  });

  describe('style decisions', () => {
    it('should use default colors', () => {
      cy.get('div.dot-pill')
        .should('have.css', 'background-color', 'rgb(193, 198, 205)')
        .and('have.css', 'color', 'rgb(59, 72, 92)');
    });
  });

  describe('dot-components: Pill component - success colors', () => {
    before(() =>
      cy.visit('/iframe.html?id=components-pill--default&args=status:success')
    );
    describe('success color styles', () => {
      it('should use success colors', () => {
        cy.get('div.dot-pill')
          .should('have.css', 'background-color', 'rgb(73, 133, 0)')
          .and('have.css', 'color', 'rgb(255, 255, 255)');
      });
    });
  });

  describe('dot-components: Pill component - error colors', () => {
    before(() =>
      cy.visit('/iframe.html?id=components-pill--default&args=status:error')
    );
    describe('error color styles', () => {
      it('should use error colors', () => {
        cy.get('div.dot-pill')
          .should('have.css', 'background-color', 'rgb(214, 31, 33)')
          .and('have.css', 'color', 'rgb(255, 255, 255)');
      });
    });
  });

  describe('dot-components: Pill component - warning colors', () => {
    before(() =>
      cy.visit('/iframe.html?id=components-pill--default&args=status:warning')
    );
    describe('warning color styles', () => {
      it('should use warning colors', () => {
        cy.get('div.dot-pill')
          .should('have.css', 'background-color', 'rgb(255, 158, 73)')
          .and('have.css', 'color', 'rgb(59, 72, 92)');
      });
    });
  });

  describe('dot-components: Pill component - in-progress colors', () => {
    before(() =>
      cy.visit(
        '/iframe.html?id=components-pill--default&args=status:in-progress'
      )
    );
    describe('in-progress color styles', () => {
      it('should use in-progress colors', () => {
        cy.get('div.dot-pill')
          .should('have.css', 'background-color', 'rgb(61, 108, 158)')
          .and('have.css', 'color', 'rgb(255, 255, 255)');
      });
    });
  });

  describe('dot-components: Pill component - custom colors', () => {
    before(() =>
      cy.visit(
        '/iframe.html?id=components-pill--default&args=backgroundColor:red;labelColor:green'
      )
    );
    describe('custom color styles', () => {
      it('should use custom colors', () => {
        cy.get('div.dot-pill')
          .should('have.css', 'background-color', 'rgb(255, 0, 0)')
          .and('have.css', 'color', 'rgb(0, 128, 0)');
      });
    });
  });
});
