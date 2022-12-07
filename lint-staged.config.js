module.exports = {
  // Type check TypeScript files
  // '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': filenames => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write --bracket-same-line --no-error-on-unmatched-pattern ${filenames.join(
      ' ',
    )}`,
  ],
};
