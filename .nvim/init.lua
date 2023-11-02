require("task")

local rust_analyzer_config = require("lsp/rust_analyzer")
rust_analyzer_config.root_dir = function()
	return require("core").file.root_path() .. "/packages/cli"
end
require("lspconfig")["rust_analyzer"].setup(rust_analyzer_config)

require("coverage").setup({
	lang = {
		javascript = {
			coverage_file = require("core").file.root_path() .. "/packages/test/coverage/lcov.info",
		},
	},
})
