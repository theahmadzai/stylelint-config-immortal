'use strict';

module.exports = {
  rules: {
    /*
    * Possible errors
    */
    // "color-no-invalid-hex": true,
    // "font-family-no-duplicate-names": true,
    // font-family-no-missing-generic-family-keyword
    // function-calc-no-unspaced-operator
    // function-linear-gradient-no-nonstandard-direction
    // string-no-newline
    // unit-no-unknown
    // property-no-unknown
    // keyframe-declaration-no-important
    // declaration-block-no-duplicate-properties
    // declaration-block-no-shorthand-property-overrides
    // block-no-empty
    // selector-pseudo-class-no-unknown
    // selector-pseudo-element-no-unknown
    // selector-type-no-unknown
    // media-feature-name-no-unknown
    // at-rule-no-unknown
    // comment-no-empty
    // no-descending-specificity
    // no-duplicate-at-import-rules
    'no-duplicate-selectors': true,
    // no-empty-source
    // no-extra-semicolons
    // no-invalid-double-slash-comments
    /*
    * Limit language features
    */
    // color-named
    // color-no-hex
    // function-blacklist
    // function-url-no-scheme-relative
    // function-url-scheme-blacklist
    // function-url-scheme-whitelist
    // function-whitelist
    // keyframes-name-pattern
    // number-max-precision
    // time-min-milliseconds
    // unit-blacklist
    // unit-whitelist
    // shorthand-property-no-redundant-values
    // value-no-vendor-prefix
    // custom-property-pattern
    // property-blacklist
    // property-no-vendor-prefix
    // property-whitelist
    // declaration-block-no-redundant-longhand-properties
    // declaration-no-important
    // declaration-property-unit-blacklist
    // declaration-property-unit-whitelist
    // declaration-property-value-blacklist
    // declaration-property-value-whitelist
    // declaration-block-single-line-max-declarations
    // selector-attribute-operator-blacklist
    // selector-attribute-operator-whitelist
    // selector-class-pattern
    // selector-combinator-blacklist
    // selector-combinator-whitelist
    // selector-id-pattern
    // selector-max-attribute
    // selector-max-class
    // selector-max-combinators
    // selector-max-compound-selectors
    // selector-max-empty-lines
    // selector-max-id
    // selector-max-pseudo-class
    // selector-max-specificity
    // selector-max-type
    // selector-max-universal
    // selector-nested-pattern
    // selector-no-qualifying-type
    // selector-no-vendor-prefix
    // selector-pseudo-class-blacklist
    // selector-pseudo-class-whitelist
    // selector-pseudo-element-blacklist
    // selector-pseudo-element-whitelist
    // media-feature-name-blacklist
    // media-feature-name-no-vendor-prefix
    // media-feature-name-value-whitelist
    // media-feature-name-whitelist
    // custom-media-pattern
    // at-rule-blacklist
    // at-rule-no-vendor-prefix
    // at-rule-whitelist
    // comment-word-blacklist
    // max-nesting-depth
    // no-unknown-animations
    /*
    * Stylistic issues
    */
    'color-hex-case': 'upper',
    'color-hex-length': 'long',
    'font-family-name-quotes': 'always-where-recommended',
    'font-weight-notation': 'numeric',
    'function-comma-newline-after': 'never-multi-line',
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-space-after': 'always',
    'function-comma-space-before': 'never',
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'never-multi-line',
    'function-parentheses-space-inside': 'always',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'string-quotes': 'single',
    'length-zero-no-unit': true,
    'unit-case': 'lower',
    'value-keyword-case': 'lower',
    'value-list-comma-newline-after': 'never-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,
    'custom-property-empty-line-before': 'never',
    'property-case': 'lower',
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    // declaration-colon-newline-after
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': 'never',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    // declaration-block-semicolon-space-after
    // declaration-block-semicolon-space-before
    'declaration-block-trailing-semicolon': 'always',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always-multi-line',
    // block-closing-brace-space-after
    'block-closing-brace-space-before': 'always-single-line',
    'block-opening-brace-newline-after': 'always-multi-line',
    // block-opening-brace-newline-before
    // block-opening-brace-space-after
    'block-opening-brace-space-before': 'always',
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-pseudo-class-case': 'lower',
    // selector-pseudo-class-parentheses-space-inside
    // selector-pseudo-element-case
    // selector-pseudo-element-colon-notation
    // selector-type-case
    // selector-list-comma-newline-after
    // selector-list-comma-newline-before
    // selector-list-comma-space-after
    // selector-list-comma-space-before
    // rule-empty-line-before
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    // media-query-list-comma-newline-after
    // media-query-list-comma-newline-before
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never',
    'at-rule-empty-line-before': [
      'always',
      {
        except: [ 'blockless-after-same-name-blockless', 'first-nested' ],
        ignore: [ 'after-comment' ]
      }
    ],
    'at-rule-name-case': 'lower',
    // at-rule-name-newline-after
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-semicolon-newline-after': 'always',
    // at-rule-semicolon-space-before
    'comment-empty-line-before': [ 'always', {
      except: [ 'first-nested' ],
      ignore: [ 'stylelint-commands' ],
    }],
    'comment-whitespace-inside': 'always',
    indentation: 2,
    // linebreaks
    'max-empty-lines': 1,
    // max-line-length
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true
  }
};
