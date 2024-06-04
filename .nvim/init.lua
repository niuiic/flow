require("coverage").setup({
	lang = {
		javascript = {
			coverage_file = require("core").file.root_path() .. "/packages/test/coverage/lcov.info",
		},
	},
})
