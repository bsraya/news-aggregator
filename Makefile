build:
	@docker build -t news-aggregator-api ./api
	@docker build -t news-aggregator-app ./app

up:
	@docker compose up -d

down:
	@docker-compose down
