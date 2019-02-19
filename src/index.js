module.exports = {
  plugins: ['stylelint-order'],
  rules: {
    /**
     * Possible errors
     */
    'color-no-invalid-hex': true,
    'font-family-no-duplicate-names': true,
    // 'font-family-no-missing-generic-family-keyword': '',
    // 'function-calc-no-unspaced-operator': '',
    // 'function-linear-gradient-no-nonstandard-direction': '',
    // 'string-no-newline': '',
    'unit-no-unknown': true,
    // 'property-no-unknown': '',
    // 'keyframe-declaration-no-important': '',
    // 'declaration-block-no-duplicate-properties': '',
    // 'declaration-block-no-shorthand-property-overrides': '',
    'block-no-empty': true,
    // 'selector-pseudo-class-no-unknown': '',
    // 'selector-pseudo-element-no-unknown': '',
    // 'selector-type-no-unknown': '',
    // 'media-feature-name-no-unknown': '',
    // 'at-rule-no-unknown': '',
    // 'comment-no-empty': '',
    // 'no-descending-specificity': '',
    // 'no-duplicate-at-import-rules': '',
    'no-duplicate-selectors': true,
    // 'no-empty-source': '',
    // 'no-extra-semicolons': '',
    // 'no-invalid-double-slash-comments': '',
    /**
     * Limit language features
     */
    // 'color-named': '',
    // 'color-no-hex': '',
    // 'function-blacklist': '',
    // 'function-url-no-scheme-relative': '',
    // 'function-url-scheme-blacklist': '',
    // 'function-url-scheme-whitelist': '',
    // 'function-whitelist': '',
    // 'keyframes-name-pattern': '',
    // 'number-max-precision': '',
    // 'time-min-milliseconds': '',
    // 'unit-blacklist': '',
    // 'unit-whitelist': '',
    // 'shorthand-property-no-redundant-values': '',
    // 'value-no-vendor-prefix': '',
    // 'custom-property-pattern': '',
    // 'property-blacklist': '',
    // 'property-no-vendor-prefix': '',
    // 'property-whitelist': '',
    // 'declaration-block-no-redundant-longhand-properties': '',
    // 'declaration-no-important': '',
    // 'declaration-property-unit-blacklist': '',
    // 'declaration-property-unit-whitelist': '',
    // 'declaration-property-value-blacklist': '',
    // 'declaration-property-value-whitelist': '',
    // 'declaration-block-single-line-max-declarations': 1,
    // 'selector-attribute-operator-blacklist': '',
    // 'selector-attribute-operator-whitelist': '',
    // 'selector-class-pattern': '',
    // 'selector-combinator-blacklist': '',
    // 'selector-combinator-whitelist': '',
    // 'selector-id-pattern': '',
    // 'selector-max-attribute': '',
    // 'selector-max-class': '',
    // 'selector-max-combinators': '',
    // 'selector-max-compound-selectors': '',
    // 'selector-max-empty-lines': 0,
    // 'selector-max-id': '',
    // 'selector-max-pseudo-class': '',
    // 'selector-max-specificity': '',
    // 'selector-max-type': '',
    // 'selector-max-universal': '',
    // 'selector-nested-pattern': '',
    // 'selector-no-qualifying-type': '',
    // 'selector-no-vendor-prefix': '',
    // 'selector-pseudo-class-blacklist': '',
    // 'selector-pseudo-class-whitelist': '',
    // 'selector-pseudo-element-blacklist': '',
    // 'selector-pseudo-element-whitelist': '',
    // 'media-feature-name-blacklist': '',
    // 'media-feature-name-no-vendor-prefix': '',
    // 'media-feature-name-value-whitelist': '',
    // 'media-feature-name-whitelist': '',
    // 'custom-media-pattern': '',
    // 'at-rule-blacklist': '',
    // 'at-rule-no-vendor-prefix': '',
    // 'at-rule-whitelist': '',
    // 'comment-word-blacklist': '',
    // 'max-nesting-depth': '',
    // 'no-unknown-animations': '',
    /**
     * Stylistic issues
     */
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    'font-family-name-quotes': 'always-where-recommended',
    // 'font-weight-notation': '',
    'function-comma-newline-after': 'always-multi-line',
    // 'function-comma-newline-before': '',
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'string-quotes': 'single',
    'length-zero-no-unit': true,
    'unit-case': 'lower',
    // 'value-keyword-case': '',
    'value-list-comma-newline-after': 'always-multi-line',
    // 'value-list-comma-newline-before': '',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,
    'custom-property-empty-line-before': ["always", {
      except: [
        "after-custom-property",
        "first-nested",
      ],
      ignore: [
        "after-comment",
        "inside-single-line-block",
      ],
    }],
    'property-case': 'lower',
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': ["always", {
      except: [
        "after-declaration",
        "first-nested",
      ],
      ignore: [
        "after-comment",
        "inside-single-line-block",
      ],
    }],
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    // 'declaration-block-semicolon-newline-before': '',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always-multi-line',
    // 'block-closing-brace-space-after': '',
    'block-closing-brace-space-before': 'always-single-line',
    'block-opening-brace-newline-after': 'always-multi-line',
    // 'block-opening-brace-newline-before': '',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    // 'selector-attribute-quotes': '',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'selector-list-comma-newline-after': 'always',
    // 'selector-list-comma-newline-before': '',
    // 'selector-list-comma-space-after': '',
    'selector-list-comma-space-before': 'never',
    'rule-empty-line-before': ["always-multi-line", {
      except: ["first-nested"],
      ignore: ["after-comment"],
    }],
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': 'always-multi-line',
    // 'media-query-list-comma-newline-before': '',
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never',
    'at-rule-empty-line-before': ["always", {
      except: [
        "blockless-after-same-name-blockless",
        "first-nested",
      ],
      ignore: ["after-comment"],
    }],
    'at-rule-name-case': 'lower',
    // 'at-rule-name-newline-after': '',
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-semicolon-newline-after': 'always',
    // 'at-rule-semicolon-space-before': '',
    'comment-empty-line-before': ["always", {
      except: ["first-nested"],
      ignore: ["stylelint-commands"],
    }],
    'comment-whitespace-inside': 'always',
    'indentation': 2,
    // 'linebreaks': '',
    'max-empty-lines': 1,
    // 'max-line-length': '',
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true,
    /**
     * Stylelint-order plugin rules
     */
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'declarations',
      'at-rules',
      'rules'
    ],
    'order/properties-order': [
      'content',
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'flex',
      'flex-basis',
      'flex-direction',
      'flex-flow',
      'flex-grow',
      'flex-shrink',
      'flex-wrap',
      'justify-content',
      'order',
      'box-align',
      'box-flex',
      'box-orient',
      'box-pack',
      'align-content',
      'align-items',
      'align-self',
      'columns',
      'column-gap',
      'column-fill',
      'column-rule',
      'column-span',
      'column-count',
      'column-width',
      'vertical-align',
      'float',
      'clear',
      'box-sizing',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'margin-collapse',
      'margin-top-collapse',
      'margin-right-collapse',
      'margin-bottom-collapse',
      'margin-left-collapse',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'appearance',
      'opacity',
      'filter',
      'visibility',
      'size',
      'resize',
      'zoom',
      'transform',
      'transform-box',
      'transform-origin',
      'transform-style',
      'outline',
      'outline-color',
      'outline-offset',
      'outline-style',
      'outline-width',
      'border',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'border-width',
      'border-top-width',
      'border-right-width',
      'border-bottom-width',
      'border-left-width',
      'border-style',
      'border-top-style',
      'border-right-style',
      'border-bottom-style',
      'border-left-style',
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'border-radius-topleft',
      'border-radius-topright',
      'border-radius-bottomright',
      'border-radius-bottomleft',
      'border-color',
      'border-top-color',
      'border-right-color',
      'border-bottom-color',
      'border-left-color',
      'border-collapse',
      'border-spacing',
      'background',
      'background-image',
      'background-color',
      'background-attachment',
      'background-clip',
      'background-origin',
      'background-position',
      'background-repeat',
      'background-size',
      'box-shadow',
      'animation',
      'animation-delay',
      'animation-duration',
      'animation-iteration-count',
      'animation-name',
      'animation-play-state',
      'animation-timing-function',
      'animation-fill-mode',
      'transition',
      'transition-delay',
      'transition-duration',
      'transition-property',
      'transition-timing-function',
      'list-style',
      'list-style-image',
      'list-style-position',
      'list-style-type',
      'overflow',
      'overflow-x',
      'overflow-y',
      'clip',
      'font',
      'font-family',
      'font-size',
      'font-smoothing',
      'osx-font-smoothing',
      'font-style',
      'font-variant',
      'font-weight',
      'src',
      'word-spacing',
      'letter-spacing',
      'line-height',
      'color',
      'direction',
      'text-align',
      'text-decoration',
      'text-indent',
      'text-overflow',
      'text-rendering',
      'text-size-adjust',
      'text-shadow',
      'text-transform',
      'white-space',
      'word-break',
      'word-wrap',
      'hyphens',
      'quotes',
      'pointer-events',
      'cursor',
      'backface-visibility',
      'caption-side',
      'empty-cells',
      'table-layout',
      'user-select',
      'interpolation-mode',
      'marks',
      'page',
      'set-link-source',
      'unicode-bidi',
      'speak'
    ]
  }
};
