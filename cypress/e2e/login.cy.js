// Mocked Login Flow
// -----------------------------------
// This test simulates a login + dashboard access scenario
// using intercepts for all backend interactions.
//
// Because the app comes from a tutorial and in its current state
// the backend is not completely set up (since my goal wasn't to complete the tutorial).
// This test does NOT validate real credential logic, security, or DB persistence.
//
// Instead, it verifies:
// - Login form UI behavior
// - Session-dependent redirect to dashboard
// - Dashboard loading of posts via mocked API
//
// This test is intended for front-end UI validation only.

describe('User Login Flow (Mocked)', () => {
  const testUser = {
    email: 'test@example.com',
    password: 'Test123!',
    name: 'Test User',
  };

  let sessionActive = false; // Controlled toggle to simulate login state

  it('logs in a user via mocked credentials response and loads dashboard', () => {
    cy.visit('/dashboard/login');

    // Intercept the login POST to simulate successful authentication
    cy.intercept('POST', '/api/auth/callback/credentials', {
      statusCode: 200,
      body: {},
    }).as('mockLogin');

    // Intercept NextAuth session API, toggled via `sessionActive`
    cy.intercept('GET', '/api/auth/session', (req) => {
      req.reply({
        statusCode: 200,
        body: sessionActive
          ? {
              user: {
                name: testUser.name,
                email: testUser.email,
              },
              expires: '2099-12-31T23:59:59.999Z',
            }
          : null, // Initially unauthenticated
      });
    }).as('mockSession');

    // Intercept the dashboard post fetch
    cy.intercept('GET', /\/api\/posts\?username=.*/, {
      statusCode: 200,
      body: [
        {
          _id: 'post-1',
          title: 'Mock Post 1',
          img: '/mock.png',
        },
        {
          _id: 'post-2',
          title: 'Mock Post 2',
          img: '/mock2.png',
        },
      ],
    }).as('mockPosts');

    // Interact with the login form
    cy.getByTestId('login-email').type(testUser.email);
    cy.getByTestId('login-password').type(testUser.password);

    // Activate mock session before clicking login
    sessionActive = true;

    // Submit the form
    cy.getByTestId('login-submit').click();

    // Wait for backend mocks
    cy.wait('@mockLogin');
    cy.wait('@mockSession');
    cy.wait('@mockPosts');

    // Assert dashboard is shown with mock posts
    cy.url().should('include', '/dashboard');
    cy.contains('Mock Post 1').should('exist');
    cy.contains('Mock Post 2').should('exist');
  });
});
