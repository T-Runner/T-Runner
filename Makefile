# Include ENV file
# https://makefiletutorial.com/#running-the-examples
include .env
export $(shell sed 's/=.*//' .env)
# https://stackoverflow.com/questions/2214575/passing-arguments-to-make-run
ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
$(eval $(ARGS):;@:)

UID := $(shell id -u)
GID := $(shell id -g)

export UID
export GID
export GIT_COMMIT := $(shell git rev-parse --short HEAD)
export PATH := /usr/sbin/:$(PATH)
export PYTHONIOENCODING := utf-8

install:
	yum install python3 -y
	pip3 install locust
.PHONY: install

init:
	docker network create --driver bridge reverse-proxy
.PHONY: init

up:	
	docker-compose --profile local up -d $(filter-out $@,$(MAKECMDGOALS))
.PHONY: up

clean:
	docker volume prune
.PHONY: clean

deploy-prod: setup-python
	docker-compose --compatibility --profile=prod up -d --no-deps --force-recreate --remove-orphans
.PHONY: deploy-prod

deploy-dev:
	docker-compose --compatibility --profile=dev up -d --no-deps --force-recreate --remove-orphans
.PHONY:

setup-python:
	if [ ! -d "$(CURDIR)/pyenv" ]; then \
		python3 -m venv pyenv; \
	fi
	source pyenv/bin/activate && pip install -r requirements.txt && python tool/kit.py update
	cp env.example .env
.PHONY: setup-python

# %: - rule which match any task name; @: - empty recipe = do nothing
%:
	@:
