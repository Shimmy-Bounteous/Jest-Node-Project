module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['./src/test'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
}