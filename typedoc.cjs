/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  $schema: 'https://typedoc.org/schema.json',
  entryPoints: ['./src/functions/lazy/index.ts', './src/functions/strict/index.ts'],
  plugin: [
    'typedoc-plugin-markdown',
    'typedoc-vitepress-theme',
    'typedoc-plugin-missing-exports',
    'typedoc-plugin-replace-text'
  ],
  replaceText: {
    replacements: [
      {
        pattern: '#Repo',
        replace: 'https://github.com/niuiic/flow/blob/main'
      },
      {
        pattern: '<',
        replace: '&lt;'
      },
      {
        pattern: '>',
        replace: '&gt;'
      },
      {
        pattern: '&lt;a(.*)&gt;(.*)&lt;\\/a&gt;',
        replace: '<a$1>$2</a>'
      }
    ]
  },
  includeVersion: true
}
