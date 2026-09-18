.PHONY: install test build run docker-build docker-up

install:
	@echo "No external dependencies required for Billbook"

test:
	node tests/app.test.js

build:
	@echo "Billbook is a static HTML/CSS/JavaScript application - build completed"

run:
	@echo "Open index.html in your web browser to run Billbook"

docker-build:
	@echo "Docker configuration will be added in M4" && exit 1

docker-up:
	@echo "Docker configuration will be added in M4" && exit 1