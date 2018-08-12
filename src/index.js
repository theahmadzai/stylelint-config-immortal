'use strict';

module.exports = {
  rules: {
    /*
    * Possible errors
    */
    // color-no-invalid-hex
    // font-family-no-duplicate-names
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
    // font-weight-notation
    // function-comma-newline-after
    // function-comma-newline-before
    // function-comma-space-after
    // function-comma-space-before
    // function-max-empty-lines
    // function-name-case
    // function-parentheses-newline-inside
    // function-parentheses-space-inside
    'function-url-quotes': 'always',
    // function-whitespace-after
    'number-leading-zero': 'always',
    // number-no-trailing-zeros
    'string-quotes': 'single',
    // length-zero-no-unit
    // unit-case
    // value-keyword-case
    // value-list-comma-newline-after
    // value-list-comma-newline-before
    // value-list-comma-space-after
    // value-list-comma-space-before
    // value-list-max-empty-lines
    // custom-property-empty-line-before
    // property-case
    // declaration-bang-space-after
    // declaration-bang-space-before
    // declaration-colon-newline-after
    'declaration-colon-space-after': 'always',
    // declaration-colon-space-before
    // declaration-empty-line-before
    // declaration-block-semicolon-newline-after
    // declaration-block-semicolon-newline-before
    // declaration-block-semicolon-space-after
    // declaration-block-semicolon-space-before
    'declaration-block-trailing-semicolon': 'always',
    // block-closing-brace-empty-line-before
    // block-closing-brace-newline-after
    // block-closing-brace-newline-before
    // block-closing-brace-space-after
    // block-closing-brace-space-before
    // block-opening-brace-newline-after
    // block-opening-brace-newline-before
    // block-opening-brace-space-after
    // block-opening-brace-space-before
    // selector-attribute-brackets-space-inside
    // selector-attribute-operator-space-after
    // selector-attribute-operator-space-before
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    // selector-combinator-space-before
    // selector-descendant-combinator-no-non-space
    // selector-pseudo-class-case
    // selector-pseudo-class-parentheses-space-inside
    // selector-pseudo-element-case
    // selector-pseudo-element-colon-notation
    // selector-type-case
    // selector-list-comma-newline-after
    // selector-list-comma-newline-before
    // selector-list-comma-space-after
    // selector-list-comma-space-before
    // rule-empty-line-before
    // media-feature-colon-space-after
    // media-feature-colon-space-before
    // media-feature-name-case
    // media-feature-parentheses-space-inside
    // media-feature-range-operator-space-after
    // media-feature-range-operator-space-before
    // media-query-list-comma-newline-after
    // media-query-list-comma-newline-before
    // media-query-list-comma-space-after
    // media-query-list-comma-space-before
    // at-rule-empty-line-before
    // at-rule-name-case
    // at-rule-name-newline-after
    // at-rule-name-space-after
    // at-rule-semicolon-newline-after
    // at-rule-semicolon-space-before
    // comment-empty-line-before
    // comment-whitespace-inside
    'indentation': 2
    // linebreaks
    // max-empty-lines
    // max-line-length
    // no-eol-whitespace
    // no-missing-end-of-source-newline
  }
};
