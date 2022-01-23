## Description

The engine is split in adapters, application and infrastructure, each one with a scpecific concern.

- Adpters: they work as interface between application and clients, input from client are repacked in a form convenient 
for application services/queries and the output from application is adapted to client preferences
- Application: Orchestrate business logic between entities and services
- Infrastructure: All technology details as which database, message broker should be used   

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```