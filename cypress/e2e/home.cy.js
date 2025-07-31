describe('Home Page renders', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays homepage content', () => {
    cy.getByTestId('home-title').should('contain.text', 'Better design');
    cy.getByTestId('home-description').should('exist');
    cy.getByTestId('home-hero-image').should('be.visible');
  });

  it('navigates to portfolio page when CTA is clicked', () => {
    cy.getByTestId('home-cta-button').click();
    cy.url().should('include', '/portfolio');
  });
});
