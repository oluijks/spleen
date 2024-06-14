import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'pnpm build && pnpm preview',
    port: 4173,
  },
  testDir: 'e2e',
  testMatch: /(.+\.)?(test|spec)\.[jt]s/,
  outputDir: 'e2e/test-results',
};

export default config;
