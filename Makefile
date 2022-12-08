DOCKER = docker
COMPOSE = docker-compose
COMPOSE_FILE = $(CURDIR)/docker-compose.yml


.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: run
run: # Run the application in a container

	$(COMPOSE) -f $(COMPOSE_FILE) build client
	$(COMPOSE) -f $(COMPOSE_FILE) up -d client

.PHONY: clint
clint: #Check linter of project
	npm run lint

.PHONY: lint
lint: #Fixles linter of project
	npm run lint -- --fix