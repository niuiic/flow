/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  $schema: 'https://typedoc.org/schema.json',
  entryPoints: ['./src/index.ts'],
  out: 'docs',
  plugin: ['typedoc-plugin-missing-exports', 'typedoc-plugin-replace-text', '@mxssfd/typedoc-theme'],
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
      }
    ]
  },
  theme: 'my-theme',
  includeVersion: true
}
