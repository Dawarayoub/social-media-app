# Sosh Me — Social Media App

Sosh Me is a small, full-stack social media application built with a plain HTML/CSS/JavaScript frontend and a Node.js/Express backend. Users can register and log in, create and browse posts, search posts by author, edit or delete posts, and like posts. MongoDB stores user and post data.

> **Status:** This is an early-stage learning project, not a production-ready social network. Review and harden authentication, authorization, input validation, and error handling before deploying it or using real user data.

## Features

- User registration and login, with passwords hashed using `bcrypt`.
- JSON Web Token (JWT) session validation.
- Create, view, edit, and delete posts, with categories, authors, and dates.
- Search posts by author and add likes.
- MongoDB persistence through Mongoose.

## Project layout

- [`fed/`](fed/) — static frontend pages, scripts, and stylesheets.
- [`bed/`](bed/) — Express server, MongoDB models, and API routes.

## Getting started

### Prerequisites

- Node.js and npm.
- A MongoDB database you can connect to (for example, a MongoDB Atlas cluster).
- Python 3 or another static-file server to serve the frontend.

### 1. Configure the backend

The server connects to MongoDB from `bed/server.js`. Replace the existing connection URI there with your own MongoDB connection URI before running the app. Do not commit database credentials.

The backend also reads JWT signing keys from `bed/.env`. Use fresh, private values for your local setup:

```dotenv
ACCESS_SECURITY_KEY=replace-with-a-long-random-secret
REFRESH_SECURITY_KEY=replace-with-another-long-random-secret
```

The current repository includes environment secrets and a database URI in tracked source/configuration. Treat any previously committed credentials as exposed: rotate/revoke them, use your own values, and avoid committing `.env` or secrets in source code.

Install dependencies and start the API:

```bash
cd bed
npm install
npm start
```

The API listens on `http://localhost:5000`. The frontend currently calls that address directly, so keep the backend on port `5000` for local use.

### 2. Serve the frontend

In a second terminal from the repository root, run:

```bash
python3 -m http.server 5500 --directory fed
```

Open [http://localhost:5500](http://localhost:5500) in your browser. From the landing page, register an account, log in, and use the post pages. Serve the files over HTTP rather than opening them directly from disk.

## Development notes

- Backend dependencies and scripts are defined in [`bed/package.json`](bed/package.json).
- The current `npm test` script is a placeholder and exits with an error; automated tests are not configured yet.
- Frontend API URLs are currently hard-coded to `http://localhost:5000` in the JavaScript files under `fed/`.
- The API has no detailed standalone API reference at this time; see the route handlers in [`bed/routes/`](bed/routes/) for implementation details.

## Help and support

For bugs or feature requests, [open an issue](https://github.com/Dawarayoub/social-media-app/issues). Include the steps to reproduce the problem and relevant environment details, but never include passwords, tokens, or database credentials.

## Maintainers and contributing

The repository is maintained by [@Dawarayoub](https://github.com/Dawarayoub). Contributions are welcome: open an issue to discuss a substantial change, then submit a pull request with a focused description and any relevant testing notes. Please do not commit secrets or personal data.

## License

The repository does not currently declare a license. Check with the maintainer before redistributing or reusing the code.
