# Playwright Capstone Project

This project is an enterprise-grade Playwright automation framework developed as part of the Wipro SDET Playwright Capstone Project.

The framework automates multiple business workflows of an ecommerce application using Playwright and JavaScript with modern automation practices.

---

# Technology Stack

- Playwright
- JavaScript
- Node.js
- Git & GitHub
- HTML Report

---


# Project Structure

# Project Structure

```text
Playwright-Capstone-Project/
│
├── tests/
├── pages/
├── utils/
├── docs/
├── screenshots/
├── playwright-report/
├── test-results/
├── playwright.config.js
├── package.json
└── README.md
```

---

# Implemented Modules

1. Authentication Module
2. Product Module
3. Cart Module
4. Checkout Module
5. Contact Us Module
6. Product Validation Module
7. UI Validation Module
8. Data-Driven Testing Module
9. Assertion Handling Module

---

# Features

- Cross-browser testing
- Parameterized testing
- Data-driven testing
- Soft assertions
- Polling assertions
- Authentication management
- Screenshot capture on failure
- HTML reporting
- Parallel execution
- Reusable Page Objects (POM)
- Robust locator strategies
- Video recording on failure
- Trace capture
- GitHub version control

---

# Test Scenarios Covered

## Authentication
- Valid Login
- Invalid Login
- Signup Validation
- Logout Validation
- Data-Driven Login Testing

## Product
- Product Search
- Product Details Validation
- Product Metadata Validation
- Product Quantity Validation
- Multiple Product Validation
- Search Input Validation

## Cart & Checkout
- Add To Cart
- Remove From Cart
- Empty Cart Validation
- Checkout Validation
- Multiple Product Cart Validation

## UI Validation
- Heading Validation
- Button Visibility Validation
- Navigation Validation
- Modal Validation
- Input Field Validation

## Contact Us
- Form Submission
- Alert Handling
- File Upload Validation

---

# Commands

## Install Dependencies

```bash
npm install

Run All Tests
npx playwright test
Run Specific Test
npx playwright test tests/authentication/login.spec.js
Run In Chromium
npx playwright test --project=chromium
Run In Headed Mode
npx playwright test --headed
Run In UI Mode
npx playwright test --ui
Open HTML Report
npx playwright show-report
Reporting

The framework supports:

HTML Reports
Screenshots on Failure
Video Recording
Error Trace Capture
Project Documentation

Project Planner PDF available inside:

/docs
Author

Sahil Alam
