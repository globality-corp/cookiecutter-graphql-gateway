# {{cookiecutter.project_name.capitalize()}}

{{cookiecutter.project_description}}


## Prerequisites

 1. Install `nvm`:

        brew install nvm

 2. Identify the version of `node.js` in use.

    You can find this version in `circle.yml`. It is currently `8.9.1`.

        export NODE_VERSION=8.9.1

 3. Install `node.js`:

        nvm install ${NODE_VERSION}
        nvm use ${NODE_VERSION}

 4. Install Yarn:

        brew install yarn

 5. Install npm package dependencies:

        yarn install

 6. (Optionally) install docker for mac:

        https://docs.docker.com/docker-for-mac/install/#download-docker-for-mac


## Structure

The code structure for `{{cookiecutter.project_name}}` aims to have small, self-similar components that provide a unidirectional data flow:

 -  The `resources` define the GraphQL types used in the top-level graph `schema`
 -  The `resolvers` allow the `resources` to relate to each other within the graph `schema`.
 -  The `clients` use OpenAPI (aka swagger) to communicate with the backends.


## Guidelines

When adding to `{{cookiecutter.project_name}}`:

 1. Try to stick to the existing abstractions where possible. Consider writing a tech design before making significant changes.
 2. Write APIs with an eye towards what the *frontend needs* vs what the *backend provides*; `{{cookiecutter.project_name}}` is a translation layer!
 3. Limit the number of top-level resources. Entry to the graph is tied our access control model. Most resources should be children.
 4. Resources should be named singularly and contain a list-valued property (called `items`) for pagination.
 5. Resolvers should use our `createResolver` function and adhere to its contract.
 6. Resolvers and services should use a consistent signature of `(req, args)` or `(req, { some, value })`.


## Commands

The following CLI commands are available, via yarn (e.g `yarn lint`):

* `lint`: Runs airbnb flavored eslint
* `local`: Runs a non-transpiled local server using babel
* `build`: Runs tests and transpiles ES6 -> ES5
* `start`: Runs tests, build and serves transpiled JS
* `test`: Runs tests
* `coverage`: Runs tests and outputs coverage report


## Running Locally

You will need to set a few environment variables for local development:

 -  Create your own local env file:

        cp .env.example .env
        # edit .env

 -  Source this configuration:

        source .env

 -  Run the local server:

        yarn local

 -  Connect to http://localhost:{{cookiecutter.project_port}}/gql/graphiql
