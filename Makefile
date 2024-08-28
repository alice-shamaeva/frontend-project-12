build:
    npm run build
start-frontend:
	npx start-server -s ./frontend/build
develop:
    make start-backend & make start-frontend
start-backend:
    npx start-server
