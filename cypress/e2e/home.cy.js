describe('Home Page renders', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays homepage content', () => {
    cy.getByTestId('home-title').should('contain.text', 'Better design');
    cy.getByTestId('home-description').should('exist');
    cy.getByTestId('home-hero-image').should('be.visible');
    cy.getByTestId('theme-wrapper').should('have.class', 'dark');
    cy.getByTestId('theme-toggle-button').click();
    cy.getByTestId('theme-wrapper').should('have.class', 'light');
  });

  it('navigates to portfolio page when CTA is clicked', () => {
    cy.getByTestId('home-cta-button').click();
    cy.url().should('include', '/portfolio');
  });
});
