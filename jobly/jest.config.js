module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
        transformIgnorePatterns: ["node_modules/(?!axios)/"]

    },
    
};
