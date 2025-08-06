describe('Contact Page renders and form submission', () => {
  beforeEach(() => {
    cy.visit('/contact');
  });

  it('renders form elements correctly', () => {
    cy.assertLayout();
    cy.getByTestId('contact-form').should('exist');
    cy.getByTestId('contact-input-name').should('exist');
    cy.getByTestId('contact-input-email').should('exist');
    cy.getByTestId('contact-input-message').should('exist');
    cy.getByTestId('contact-submit-button').should('exist');
  });

  it('displays validation errors on empty submit', () => {
    cy.getByTestId('contact-submit-button').click();

    cy.getByTestId('contact-error-name')
      .should('exist')
      .and('contain.text', 'Name is required.');

    cy.getByTestId('contact-error-email')
      .should('exist')
      .and('contain.text', 'Valid email is required.');

    cy.getByTestId('contact-error-message')
      .should('exist')
      .and('contain.text', 'Message is required.');
  });

  it('displays email-specific error if only email is invalid', () => {
    cy.getByTestId('contact-input-name').type('Test User');
    cy.getByTestId('contact-input-email').type('bademail');
    cy.getByTestId('contact-input-message').type('This is a test message.');
    cy.getByTestId('contact-submit-button').click();

    cy.getByTestId('contact-error-email')
      .should('exist')
      .and('contain.text', 'Valid email is required.');
  });

  it('submits form successfully when inputs are valid', () => {
    // Stub console.log to monitor submission
    cy.window().then((win) => {
      cy.spy(win.console, 'log').as('formSubmitLog');
    });

    cy.getByTestId('contact-input-name').type('Jane Doe');
    cy.getByTestId('contact-input-email').type('jane@example.com');
    cy.getByTestId('contact-input-message').type('Testing form submission.');
    cy.getByTestId('contact-submit-button').click();

    cy.get('@formSubmitLog').should(
      'have.been.calledWithMatch',
      'Form submitted:',
      {
        name: 'Jane Doe',
        email: 'jane@example.com',
        message: 'Testing form submission.',
      }
    );
  });
});
