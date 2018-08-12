'use strict';

const stylelint = require('stylelint');
const rules = require('../src').rules;

Object.keys(rules).forEach(rule=>{
  stylelint.utils.validateOptions(rule);
});
