describe('About Page renders', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('renders content and structure', () => {
    cy.assertLayout();
    cy.getByTestId('about-container').should('exist');
    cy.getByTestId('about-image').should('be.visible');
    cy.getByTestId('about-image-title').should(
      'contain.text',
      'Digital Storytellers'
    );
    cy.getByTestId('about-image-desc').should('contain.text', 'award winning');
    cy.getByTestId('about-who-title').should('contain.text', 'Who Are We?');
    cy.getByTestId('about-what-title').should('contain.text', 'What We Do?');
  });

  it('navigates to the Contact page from the Contact button', () => {
    cy.getByTestId('about-contact-button').click();
    cy.url().should('include', '/contact');
  });
});
