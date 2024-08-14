module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
      '^utils/(.*)$': '<rootDir>/utils/$1', // Adjust the path to map to utils outside of src
      '^.+\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
      '^firebase/(.*)$': '<rootDir>/__mocks__/firebase.js', // Mock Firebase imports
    },
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Transform JavaScript files using babel-jest
    },
    transformIgnorePatterns: [
      '/node_modules/(?!@firebase)', // Transform @firebase modules
    ]
  };
  