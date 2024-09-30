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

Run these code snippets to get the app up and running:

1. Install dependencies:
```
npm install
```

2. Launch server and watch for changes:
```
npm run dev
```

Now you can start coding!

## Production mode

You can either use `docker compose` to launch the app in production mode:
```
docker compose up
```

Or build and launch it with npm scripts:

```
npm run build
```

```
npm start
```
