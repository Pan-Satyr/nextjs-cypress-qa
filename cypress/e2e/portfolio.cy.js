describe('Portfolio Page renders', () => {
  beforeEach(() => {
    cy.visit('/portfolio');
  });

  it('renders heading and links', () => {
    cy.getByTestId('portfolio-container').should('exist');
    cy.getByTestId('portfolio-heading').should(
      'contain.text',
      'Choose a gallery'
    );

    cy.getByTestId('portfolio-link-illustrations').should(
      'contain.text',
      'Illustrations'
    );
    cy.getByTestId('portfolio-link-websites').should(
      'contain.text',
      'Websites'
    );
    cy.getByTestId('portfolio-link-application').should(
      'contain.text',
      'Application'
    );
  });

  it('navigates to illustrations gallery', () => {
    cy.getByTestId('portfolio-link-illustrations').click();
    cy.url().should('include', '/portfolio/illustrations');
  });

  it('navigates to websites gallery', () => {
    cy.getByTestId('portfolio-link-websites').click();
    cy.url().should('include', '/portfolio/websites');
  });

  it('navigates to application gallery', () => {
    cy.getByTestId('portfolio-link-application').click();
    cy.url().should('include', '/portfolio/application');
  });
});
