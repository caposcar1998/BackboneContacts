# Contacts Backbone

This project will let the user CRUD contacts.

# Tech stack

- [React16](https://reactjs.org/)
- [MaterialUI](https://mui.com/)
- [Docker](https://www.docker.com/)
- [Typescript](https://www.typescriptlang.org/)

# Instalation project

1. Create an .env file at the root of the project with:

   ```bash
       REACT_APP_URL_V1_BACKBONE
   ```

## Installation with docker

For this installation you need to have docker installed and running on your PC.

### Windows

```bash
    docker-compose up
```

### Mac or linux based systems

```bash
    make run
```

## Local Installation

For this installation you need to have all the tech stack installed (you can skip docker)

```bash
    npm i
    npm start run
```

## Available commands

### Mac or linux based systems

- `make lint` (applies linter to whole project)
- `make clint` (checks lint on the project)
- `make test` (run tests)

### Windows

- `npm run lint` (applies linter to whole project)
- `npm run lint:fix` (checks lint on the project)
- `npm run test` (run tests)

### Structure

.
├── ...
├── src # Test files (alternatively
│ ├── components # General components of app
│ ├── hooks # Custom hooks
│ └── media # Static media
│ └── pages # Pages of the app
│ └── types # Ts types
│ └── Routing.tsx # Routing controller
└── Dockerfile
└── docker-compose.yml
└── MakeFile

# Ports

The project will run on port 3000
