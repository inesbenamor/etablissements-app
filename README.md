# Ismin-2020-project - Mobile App
By Ines Ben Amor and Steven Betesh

[![License](https://img.shields.io/github/license/saluki/nestjs-template.svg)](https://github.com/saluki/nestjs-template/blob/master/LICENSE)


## 1. Getting started

### 1.1 Requirements

Before starting, make sure you have at least those components on your workstation:

- An up-to-date release of [NodeJS](https://nodejs.org/)
- NPM
 
### 1.2 Project configuration

Start by cloning this project on your workstation.

``` sh
https://github.com/inesbenamor/etablissement-app.git```

The next thing will be to install all the dependencies of the project.

```sh
cd ./etablissement-app
npm install
```

Once the dependencies are installed, you can now configure your project by creating a new `.env` file containing your environment variables used for development.

```
cp .env.example .env
vi .env
```

### 1.3 Launch and discover

You are now ready to launch the NestJS application using the command below.

```sh
npm run start

# Launch the development server with TSNode
npm run start:dev
```

You can now head to `http://localhost:3000/etablissements` and see your API endpoint. 

## 2. Project structure

This template was made with a well-defined directory structure.

```sh
etablissement-app/
├── README.md
├── package-lock.json #automatically generated for any operations where npm modifies either the node_modules tree, or package.json
├── android
├── api
│   ├── .gitignore
│   ├── a.prettierrc
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── tsconfig.build.json
│   ├── tsconfig.json
│   ├── test
│   │   ├── app.e2e-spec.ts
│   │   ├── jest-e2e.json
│   ├── src
│   │   ├── Etablissement.ts
│   │   ├── EtablissementDetail.ts
│   │   ├── etablissement.controller.spec.ts
│   │   ├── etablissement.controller.ts
│   │   ├── etablissement.module.ts
│   │   ├── etablissement.schema.ts
│   │   ├── etablissement.service.ts
└── └── └── main.ts
```
## 3. Project goals

The goal of this project is to provide a mobile app that centralizes information regarding academic institutions in France.
We have been relying on this open source data:

https://data.opendatasoft.com/explore/dataset/fr-esr-principaux-etablissements-enseignement-superieur%40mesr/api/?disjunctive.type_d_etablissement&sort=uo_lib&fbclid=IwAR18kAr6cZfewwP8aYiePPxePEkwG7UVJKt4NkKN0Ut0tczhc9YP-uHv4QI 

## 4. Roadmap

The following improvements are currently in progress : 

- [ ] Cleaner code implementation
- [ ] Cleaner design of the Mobile app
- [x] Project structure documentation
- [ ] Working on unit tests

