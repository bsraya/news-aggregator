build:
	@docker build -t news-api ./api
	@docker build -t news-app ./app

up:
	@docker compose up -d

down:
	@docker-compose down