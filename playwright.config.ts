import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  testMatch: ["clickEvents.spec.ts"],
  timeout: 30 * 1000,
  expect: {
    
    timeout: 5000
  },
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    actionTimeout: 0,
    trace: 'on',
    headless:false,
    screenshot:"on",
    video:"on",
    baseURL:"https://ecommerce-playground.lambdatest.io/index.php?"
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

   
  ],
});
