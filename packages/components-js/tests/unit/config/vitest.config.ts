import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/tests/unit/specs/**/*.spec.ts', '!**/projects/**'],
    globals: true,
  },
});
