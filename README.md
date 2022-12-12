# Contacts Backbone

This project will let the user CRUD contacts.

# El reto

Para la realización de este proyecto se usó una estructura tipo Next, donde cada carpeta define la dirección a donde apuntara la URL, en este casó no se decidió usar Next per se ya que el tiempo de aprender podria tomar más de los 4 días para el reto.
Para la infraestructura del proyecto se decidió usar Docker ya que este permite que la aplicación pueda ser deployada sin problema en cualquier SO.
Para el control y estilo de codigo se decidió usar eslint como archivo de control.
Para la arquitectura del sistema se decidió separar por componentes (generales de toda la aplicación) y pages (páginas y componentes particulares de esa página).
En estilos se decidió manenter el UI que daba MaterialUI.

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

```bash
    .
    ├── ...
    ├── src
    │ ├── components # General components of app
    │ ├── hooks # Custom hooks
    │ └── media # Static media
    │ └── pages # Pages of the app
    │ └── types # Ts types
    │ └── Routing.tsx # Routing controller
    └── Dockerfile
    └── docker-compose.yml
    └── MakeFile
```

# Ports

The project will run on port 3000
