import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    viewport: { width: 100, height: 100 },
    actionTimeout: 10 * 1000,
    navigationTimeout: 15 * 1000
},
timeout: 30 * 1000,
expect: {
    timeout: 10 * 1000,
},
projects: [
    {
        name: 'chrome',
        use: {
          ...devices['Desktop Chrome'],
          viewport: { width: 1920, height: 1080},

        }
    },
    // {
    //     name: 'firefox',
    //     use: { ...devices['Desktop Firefox'] }
    // },
//     {
//       name: 'mobile',
//       use: { ...devices['Galaxy S8'] }
//   }
],
workers:2,
fullyParallel:true,
// reporter: "allure"
testMatch:['GlobalSearch.spec.ts']
}

export default config;