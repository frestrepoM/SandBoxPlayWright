// Configuración básica de Playwright
/** @type {import('@playwright/test').PlaywrightTestConfig} */


require('dotenv').config({ 

    path: `.env.${process.env.NODE_ENV ?  process.env.NODE_ENV : 'produccion'}`

});


const config = {
  testDir: '.',
  timeout: 100000,
  retries: 0,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'off',
  },
  reporter: [['html', { open: 'never' }]],

  projects: [
    {
      name: 'chromium',
      use: { ...{}, browserName: 'chromium' }
    }
    //,
    //{
    //  name: 'firefox',
    //  use: { ...{}, browserName: 'firefox' }
    //},
    //{
    //  name: 'webkit',
    //  use: { ...{}, browserName: 'webkit' }
    //},
    //{
    //  name: 'edge',
    //  use: { ...{}, browserName: 'chromium', channel: 'msedge' }
    //}
  ]
};

module.exports = config;
