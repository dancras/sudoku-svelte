import { defaults } from 'jest-config';

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
    "^.+\\.svelte$": ["svelte-jester", { preprocess: true }]
  },
  "moduleFileExtensions": ["svelte", ...defaults.moduleFileExtensions],
  "setupFilesAfterEnv": ["./src/setupTests.ts"]
};

export default config;
