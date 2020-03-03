module.exports = {
    verbose: true,
    moduleFileExtensions: [
        "ts",
        "js",
        "json"
    ],
    transform: {
        "^.+\\.ts$": "<rootDir>/preprocessor.js"
    },
    testMatch: [
        '**/*.test.ts'
    ]
}
