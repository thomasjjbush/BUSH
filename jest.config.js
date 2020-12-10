module.exports = {
    preset: 'ts-jest',
    roots: ['./src'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)?$': 'ts-jest',
    },
    testRegex: '((\\.|/)(test|spec))\\.(js|ts|tsx)?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    collectCoverageFrom: ['./src/**/*.{ts,tsx}'],
    setupFiles: ['./jest.setup.env.js'],
    setupFilesAfterEnv: ['./jest.setup.js'],
};
