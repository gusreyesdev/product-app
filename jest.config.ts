export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",

  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  setupFiles: ["./jest.setup.ts"],

  transformIgnorePatterns: [],

  // ModuleNameMapper sólo si ocupamos importar CSS en nuestros componentes para el testing
  //moduleNameMapper: {
  //    '\\.(css|less)$': '<rootDir>/tests/mocks/styleMock.js',
  //},
};
