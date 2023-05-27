import type { Config } from 'jest'

export default {
  verbose: false,
  preset: 'ts-jest/presets/js-with-ts',
  roots: ['src'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!@planetscale/.*)'],
} as Config
