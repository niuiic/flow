set -eE

if [ "$1" = "build" ]; then
	pnpm build
elif [ "$1" = "test" ]; then
	pnpm test
elif [ "$1" = "test-coverage" ]; then
	cd packages/test
	pnpm test:coverage
elif [ "$1" = "doc" ]; then
	pnpm build --filter doc
elif [ "$1" = "lint" ]; then
	pnpm lint
elif [ "$1" = "release" ]; then
	pnpm release
fi
