module.exports = {
  "color": true,
  "diff": true,
  "extension": ["tsx"],
  "package": "./package.json",
  "reporter": "spec",
  "require": ["chai", "choma", "ignore-styles", "./test/testUtils/setupTests.js"],
  "slow": 75,
  "timeout": 2000,
  "ui": "bdd",
  "watch-files": ["./test/**/*.test.tsx"],
  "watch-ignore": ["node_modules", ".git"]
};