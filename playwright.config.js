// Configuración básica de Playwright
/** @type {import('@playwright/test').PlaywrightTestConfig} */
// playwright.config.js



require('dotenv').config({ 
  path: `.env.${process.env.NODE_ENV ? process.env.NODE_ENV : 'produccion'}`
});

const config = {
  testDir: '.',
  timeout: 200000,
  retries: 0,
  use: {
    headless: false,
    devtools: true,
    viewport: null, // Para que no limite el tamaño
    ignoreHTTPSErrors: true,
    video: 'off',
    slowMo: 1000, // 1000 ms entre acciones
    launchOptions: {
      args: ['--start-maximized']
    }
  },
  reporter: [['html', { open: 'never' }]],
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    }
    // Otros navegadores...
  ]
};

module.exports = config;