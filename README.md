# Next.js QA Automation Project with Cypress

This project is a fork of a minimal [Next.js](https://nextjs.org/) app, extended to include **end-to-end automated testing** with [Cypress](https://www.cypress.io/). It is intended as a showcase of my **Quality Assurance** capabilities in modern web applications using automation tooling.

---

## 🔧 Tech Stack

- **Frontend Framework:** Next.js (v15)
- **Test Framework:** Cypress (v13+)
- **Language:** JavaScript (ES6+)
- **Package Manager:** npm

---

## 🧪 Test Coverage (WIP)

| Test Suite   | Status         | Description                          |
| ------------ | -------------- | ------------------------------------ |
| `home.cy.js` | ✅ Implemented | Tests homepage rendering and content |

You can find Cypress specs under:  
`/cypress/e2e/*.cy.js`

---

## 🚀 Getting Started

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

├── app/ # Next.js pages
├── cypress/ # Cypress E2E testing folder
│ ├── e2e/ # Your test specs
│ ├── fixtures/ # Static test data
│ ├── support/ # Custom commands
├── public/ # Static assets
├── .gitignore
├── README.md

### Credits

This project is based on the original [Next.js Tutorial Repository by Safak](https://github.com/safak/nextjs-tutorial), which accompanies a YouTube series:

> **YouTube Tutorial**: [Next.js Full Tutorial for Beginners | Next.js 13 Full Stack App Using App Router](https://www.youtube.com/watch?v=VE8BkImUciY&list=PLj-4DlPRT48mYFZcTiaC4GEHbi98Y5z0a)  
> **Author**: Lama Dev — [YouTube Channel](https://www.youtube.com/@LamaDev)

I have extended the project by integrating **Cypress** and building out **end-to-end QA automation** to showcase my testing capabilities and workflow.

### Author

Alonso Ramirez
Test Analyst | QA Engineer | Automation Learner
GitHub Profile
