build:
    npm run build
start-frontend:
	npx start-server -s ./frontend/build
start-backend:
    npx start-server
develop:
    make start-backend & make start-frontend
