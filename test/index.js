'use strict';

const stylelint = require('stylelint');
const rules = require('../src').rules;

stylelint.lint({
  code: 'a { color: pink; }',
  config: {
    rules: rules
  }
}).then(output => {
  const { deprecations, invalidOptionWarnings, parseErrors, warnings } = output.results[0];
  console.log(`Output:
    Deprications: ${deprecations.length}
    InvalidOptionWarnings: ${invalidOptionWarnings.length}
    parseErrors: ${parseErrors.length}
    Warnings: ${warnings.length}
  `);
}).catch(error => {
  console.log(error);
});
