# Typescript MVC Express Template

## About

This template provides a clean foundation to start building a TypeScript REST API out of the box. Key features of this build:

- Template follows MVC architectural pattern.
- Basic Docker configuration.
- Swagger UI with both HTML and JSON output endpoints.
- Health check endpoint at `GET /api/health`.
- Custom logger with `pino`.
- Both development and production mode with `dev` and `start` commands.
- ESLint for TypeScript.
- Pre-commit linting hook.

This template is public. If you like it and use it in your projects, consider giving this repo a star!

## Setup

Follow these steps to get the app up and running:

1. Copy the contents of `.env.example` file into a new `.env` file.

2. Install dependencies:
```
npm install
```

Now you can start coding!

## Development mode

Launch the server and watch for changes:
```
npm run dev
```

After this command you will be provided with local URLs to both root endpoint and documentation page. Use `GET /docs.json` endpoint to get the docs in JSON format, which is easily importable into Postman.


## Production mode

You can either use `docker compose` to launch the app in production mode:
```
docker compose up
```
> Note that in this case the port will use `HOST_PORT` env variable. This means that the path with `PORT` will be accessable only from inside of the container.

Or build and launch it with npm scripts:

```
npm run build
```

```
npm start
```

(Optional) You can define the `LIVE_SERVER_URL` env variable on your production server to be able to use it for the requests in Swagger docs.
