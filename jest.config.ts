import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  // 'testEnvironment': 'jsdom'
};

export default jestConfig;

// '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
// '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`