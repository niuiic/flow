if [ "$1" = "run" ]; then
	pnpm start
elif [ "$1" = "build" ]; then
	pnpm build
elif [ "$1" = "test" ]; then
	pnpm test
elif [ "$1" = "doc" ]; then
	pnpm docs:build
elif [ "$1" = "export" ]; then
	pnpm esrun cli export src/functions/lazy src/functions/strict
fi
