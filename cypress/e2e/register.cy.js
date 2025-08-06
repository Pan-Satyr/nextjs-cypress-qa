describe('User Registration Flow (Mocked)', () => {
  // Use timpestamp to avoid duplicates
  const timestamp = Date.now();
  const testUser = {
    name: `user${timestamp}`,
    email: `user${timestamp}@example.com`,
    password: 'Test123!',
  };

  it('registers a new user successfully (mocked response)', () => {
    cy.visit('/dashboard/register');

    // Intercept the registration request and mock a success response
    cy.intercept('POST', '/api/auth/register', {
      statusCode: 201,
      body: { message: 'User has been created' },
    }).as('mockRegister');

    // Fill out the form
    cy.getByTestId('register-username').type(testUser.name);
    cy.getByTestId('register-email').type(testUser.email);
    cy.getByTestId('register-password').type(testUser.password);

    // Submit
    cy.getByTestId('register-submit').click();

    // Wait for the fake response
    cy.wait('@mockRegister');

    // Assert redirect to login with success message in URL
    cy.url().should('include', '/dashboard/login');
    cy.url().should('include', 'success=Account%20has%20been%20created');

    // Confirm success message appears on login page
    cy.getByTestId('login-heading').should(
      'contain.text',
      'Account has been created'
    );
  });
});
