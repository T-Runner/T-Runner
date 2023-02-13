deploy-dev:
	docker-compose --compatibility --profile=dev up -d --no-deps --force-recreate --remove-orphans
.PHONY: deploy-dev

clean:
	docker system prune -f
.PHONY: clean

# %: - rule which match any task name; @: - empty recipe = do nothing
%:
	@:
