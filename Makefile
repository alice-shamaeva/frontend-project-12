lint:
	make -C my-frontend-app lint

install:
	npm ci

start-frontend:
	make -C my-frontend-app start

start-backend:
	npm start

start:
	make start-backend

develop:
	make start-backend & make start-frontend

build:
	rm -rf my-frontend-app/build
	npm run build
