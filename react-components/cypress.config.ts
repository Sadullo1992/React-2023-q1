import { defineConfig } from 'cypress';
import cypressCodeCoverage from '@cypress/code-coverage/task';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      cypressCodeCoverage(on, config);
      return config;
    },
    video: false,
  },
});
