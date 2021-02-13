run:
	npm run debug

test:
	npm run test

lint:
	npm run format
	npm run lint

tests-ci:
	npm run format-ci
	npm run lint
	npm run test