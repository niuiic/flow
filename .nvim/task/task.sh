set -eE

if [ "$1" = "run" ]; then
	pnpm start
elif [ "$1" = "build" ]; then
	pnpm build
elif [ "$1" = "test" ]; then
	pnpm test
elif [ "$1" = "test-coverage" ]; then
	pnpm test:coverage
elif [ "$1" = "doc" ]; then
	pnpm docs:build
elif [ "$1" = "export" ]; then
	pnpm call export src/pipe/lazy src/pipe/strict src/types src/flow
elif [ "$1" = "lint" ]; then
	pnpm lint
elif [ "$1" = "package" ]; then
	rm -rf ./dist
	pnpm package
elif [ "$1" = "clean" ]; then
	rm -rf ./dist ./coverage ./docs/.vitepress/dist
fi
