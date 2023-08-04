/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  $schema: 'https://typedoc.org/schema.json',
  entryPoints: [
    './src/pipe/lazy/index.ts',
    './src/pipe/strict/index.ts',
    './src/flow/index.ts',
    './src/utils.ts',
    './src/types/index.ts'
  ],
  plugin: [
    'typedoc-plugin-markdown',
    'typedoc-vitepress-theme',
    'typedoc-plugin-missing-exports',
    'typedoc-plugin-replace-text'
  ],
  replaceText: {
    replacements: [
      {
        pattern: '<(.*)>',
        replace: '&lt;$1&gt;'
      },
      {
        pattern: '&lt;a(.*)&gt;(.*)&lt;\\/a&gt;',
        replace: '<a$1>$2</a>'
      }
    ]
  },
  includeVersion: true
}
