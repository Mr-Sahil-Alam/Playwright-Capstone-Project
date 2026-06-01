// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: false,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 1,

  workers: 1,

  // Global timeout for each test
  timeout: 90000,

  // Assertion timeout
  expect: {
    timeout: 10000,
  },

  reporter: [
    ['html'],
    ['allure-playwright'],
  ],

  use: {
    // Timeouts
    actionTimeout: 30000,
    navigationTimeout: 60000,

    // Evidence
     video: 'retain-on-failure',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
});