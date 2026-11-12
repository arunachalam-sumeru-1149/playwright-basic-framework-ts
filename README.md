# Playwright TypeScript Basic Automation Framework

## 1. Project Overview

This project demonstrates web application automation using **Playwright with TypeScript**.

The automation is implemented on the [SauceDemo](https://www.saucedemo.com/) application using the **Page Object Model (POM)** design pattern.

The objective is to practise Playwright TypeScript automation, create reusable page-level methods, implement different web application test scenarios, and perform data-driven testing using multiple test data formats.

## 2. Technologies Used

- Playwright
- TypeScript
- Node.js
- Visual Studio Code
- Page Object Model (POM)
- CSV, Excel (XLSX), and JSON
- GitHub
- GitHub Actions

## 3. Project Structure

```text
playwright-basic-framework-ts/
│
├── .github/
│   └── workflows/
│
├── pages/
│   ├── LoginPage.ts
│   ├── ProductPage.ts
│   └── AboutPage.ts
│
├── test-data/
│   ├── loginData.json
│   ├── loginData.csv
│   └── loginData.xlsx
|   └── loginDataNew.xlsx
│
├── tests/
│   ├── websiteTest/
│   │   ├── login-test.spec.ts
│   │   └── product-test.spec.ts
│   │
│   └── dataTest/
│       └── Data-driven test files
│
├── utils/
│   └── Test data reader utilities
│
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
└── README.md
```

## 4. Automation Scenarios

### Login Page
- Validate login with valid credentials.
- Validate login with invalid credentials.
- Verify login error messages.

### Product Page
- Validate product page navigation.
- Verify logout functionality.
- Validate adding products to the cart.

### About Page
- Verify navigation to the About page.
- Validate the expected page content.
- Verify navigation back to the product page.

### Data-Driven Testing

Login scenarios are implemented using different test data formats:

- CSV
- Excel (XLSX)
- JSON

Reusable utility functions are used to read test data and pass it to the automation tests.

## 5. Framework Design – Page Object Model

The project follows the Page Object Model approach.

- **Pages:** Contains page classes, locators, and reusable methods.
- **Tests:** Contains test scenarios and validation assertions.
- **Test Data:** Stores test data in different formats.
- **Utils:** Contains reusable test data reading functions.
- **Playwright Config:** Defines test execution settings, browsers, and reporting.

## 6. Prerequisites

- Node.js and npm
- Visual Studio Code
- Git

## 7. Test Reporting

- Playwright HTML reporting is configured to view test execution results.
- Trace collection is configured for retry scenarios.
- GitHub Actions workflow is configured to execute automation tests on pushes and pull requests.
- The workflow uploads the Playwright HTML report as a build artifact.

## 8. Future Enhancements

The framework can be further enhanced by implementing:

- Playwright fixtures and reusable test setup.
- Environment-based configuration.
- Improved test data management.
- Screenshots and trace-based debugging.
- Enhanced reporting.
- Further CI/CD integration and execution improvements.

## 9. Repository

GitHub: https://github.com/arunachalam-sumeru-1149/playwright-basic-framework-ts