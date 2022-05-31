# Simple Web App Template

Starter web app with HTML, CSS, JavaScript, and development dependencies.

This template is ideal for learning projects and simple prototypes:

- Intended to be easily understood by beginners to web development.
- Commented configuration files to aid in learning.
- Minimal dependencies to reduce complexity and abstractions.

This template is not an ideal starting point for most production web apps.
To encourage learning and reduce abstractions, common dependencies like TypeScript were left out.
Many common dependencies are useful for preventing bugs, increasing speed of development,
reducing maintenance requirements, and improving readability.

## Scripts

### Build: `npm run build`

To build the app, run `npm run build`.

The generated output will be in the `dist/` directory.

### Format: `npm run format`

To format the source code, run `npm run format`.

### Serve: `npm start`

To serve the app, run `npm start`.

The app will be updated automatically as code changes are saved.

To simulate a production environment, run `npm run start:production`.
Note that the `webpack-dev-server` is not intended for use in production environments.

### Test: `npm test`

To test the app, run `npm test`.

## Setting Up a Local Development Environment

### Pre-requisites

Before getting started, you will need [Git] and [Node.js].

#### [Git]

1. Open a terminal and run `git --version`
1. If Git is not installed, follow
   [the GitHub guide for setting up Git][github_docs_git]

#### [Node.js]

1. Open a terminal and run `node -v`
1. If Node.js is not installed or is not `v16.0.0` or above, follow
   [the official guide for installing Node.js][node_docs_install]

### Instructions

1. If you haven't already, [create a new GitHub repository from this template][generate].
1. On your machine, open a terminal.
1. Clone the repository you've created from the template.\
   Run `git clone <your-repository-url> <some-directory>`
1. Navigate to the directory where you cloned the repository.\
   Run `cd <some-directory>`
1. Install dependencies.\
   Run `npm install`
1. Serve app in development mode.\
   Run `npm start`

You are now ready to start coding!

[babel]: https://babeljs.io/
[generate]: https://github.com/utori-dev/template-vanilla-web-app/generate
[git]: https://git-scm.com/
[github_docs_git]: https://docs.github.com/en/get-started/quickstart/set-up-git
[node.js]: https://nodejs.org/
[node_docs_install]: https://nodejs.dev/learn/how-to-install-nodejs
