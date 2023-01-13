local utils = require("utils")

local overseer = require("overseer")

local scriptPath = utils.fn.root_pattern() .. "/.nvim/task/task.sh"

overseer.register_template({
	name = "run",
	builder = function()
		return {
			cmd = { scriptPath },
			args = { "run" },
			components = { "on_exit_set_status" },
		}
	end,
})
