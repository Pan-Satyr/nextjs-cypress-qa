# Next.js QA Automation Project with Cypress

### Why This Project Exists

The purpose of this repository is to demonstrate my QA automation skills in a modern web application stack.  
While the application’s original backend functionality (database, authentication) was not fully implemented, I integrated Cypress to:

- Validate UI components and static content
- Test form validation logic
- Mock API calls to test dynamic flows like login, registration, and dashboard data

---

### Credits

The original Next.js app comes from [Next.js Tutorial Repository by Safak](https://github.com/safak/nextjs-tutorial), which accompanies a YouTube series:

> **YouTube Tutorial**: [Next.js Full Tutorial for Beginners | Next.js 13 Full Stack App Using App Router](https://www.youtube.com/watch?v=VE8BkImUciY&list=PLj-4DlPRT48mYFZcTiaC4GEHbi98Y5z0a)  
> **Author**: Lama Dev — [YouTube Channel](https://www.youtube.com/@LamaDev)

I just extended the project by integrating **Cypress** and building out **end-to-end QA automation** to showcase my testing capabilities and workflow (I did not complete the tutorial of the app, since my intention was just to use it as a base).

## Test Coverage

> **Note on Login and Registration Tests**  
> The backend for authentication and database persistence is not active in this project.  
> Login and registration flows are tested using Cypress `cy.intercept()` to mock API calls and simulate expected responses.  
> This allows validation of UI behavior, form interactions, and redirects without requiring a live backend.

| Test Suite        | Description                                                         |
| ----------------- | ------------------------------------------------------------------- |
| `about.cy.js`     | Tests About page rendering, static text, and image description      |
| `contact.cy.js`   | Tests Contact page form validation (required fields, basic UI flow) |
| `home.cy.js`      | Tests Home page main sections, layout, and static content           |
| `login.cy.js`     | Tests Login form flow using mocked backend (NextAuth + post fetch)  |
| `portfolio.cy.js` | Tests Portfolio page navigation and section rendering               |
| `register.cy.js`  | Tests Registration form flow using mocked backend API               |

---

## Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/Pan-Satyr/nextjs-cypress-qa.git
cd nextjs-cypress-qa
npm install
```

### 2. Run the Dev Server

```bash
npm run dev
```

Then visit: http://localhost:3000

### 3. Run Cypress Tests

```bash
npx cypress open
```

### 4. Project Structure

```plaintext
 ├── app/ # Next.js pages
 ├── cypress/ # Cypress E2E testing folder │
 ├── e2e/ # Test specs │
 ├── fixtures/ # Static test data │
 ├── support/ # Custom commands
 ├── public/ # Static assets
 ├── .gitignore
 ├── README.md
```

### Author

Alonso Ramirez - Test Analyst
