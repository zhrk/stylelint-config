module.exports = {
  customSyntax: 'postcss-scss',
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-order': [
      {
        groupName: 'block-position',
        properties: [
          'content',
          'z-index',
          'position',
          'inset',
          'top',
          'right',
          'bottom',
          'left',
          'transform',
          'order',
        ],
      },
      {
        groupName: 'block-margin',
        properties: ['margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
      },
      {
        groupName: 'block-padding',
        properties: ['padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left'],
      },
      {
        groupName: 'block-size',
        properties: ['max-width', 'min-width', 'width', 'max-height', 'min-height', 'height'],
      },
      {
        groupName: 'block-display',
        properties: [
          'display',
          'align-self',
          'flex-direction',
          'justify-content',
          'align-items',
          'flex-grow',
          'flex-shrink',
          'flex-wrap',
          'grid-auto-flow',
          'grid-auto-rows',
          'grid-auto-columns',
          'grid-template-rows',
          'grid-template-columns',
          'gap',
          'row-gap',
          'column-gap',
        ],
      },
      {
        groupName: 'block-appearance',
        properties: [
          'box-shadow',
          'outline',
          'border',
          'border-width',
          'border-style',
          'border-color',
          'border-top',
          'border-right',
          'border-bottom',
          'border-left',
          'border-top-color',
          'border-right-color',
          'border-bottom-color',
          'border-left-color',
          'box-sizing',
          'border-radius',
          'border-top-left-radius',
          'border-top-right-radius',
          'border-bottom-right-radius',
          'border-bottom-left-radius',
          'background',
          'background-image',
          'background-size',
          'background-repeat',
          'background-color',
        ],
      },
      {
        groupName: 'block-text',
        properties: [
          'color',
          'font-family',
          'font-size',
          'font-weight',
          'line-height',
          'text-decoration',
          'text-transform',
          'text-overflow',
          'text-align',
          'vertical-align',
          'white-space',
          'word-break',
        ],
      },
      {
        groupName: 'block-meta-appearance',
        properties: ['visibility', 'opacity', 'filter', 'object-fit', 'scrollbar-width'],
      },
      {
        groupName: 'block-animation',
        properties: ['animation', 'transition'],
      },
      {
        groupName: 'block-outside',
        properties: ['overflow'],
      },
      {
        groupName: 'block-interaction',
        properties: ['pointer-events', 'user-select', 'cursor', 'resize'],
      },
    ],
  },
};
