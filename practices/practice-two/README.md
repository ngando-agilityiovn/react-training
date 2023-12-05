# React Basic - Practice two

This application is using React to a web application Project Information application. Application will manage project information included project name, project magement, status of project, the date the project was created, timeline for project, estimation.

# Targets

- Apply knowledge of React basic, TypeScript.
- Understand the lifecycle of react components.
- Use React built-in hooks for implementing CRUD features.
- Understand basic UI patterns for the Web, and get familiar with Chakra UI.
- Learn to work with a large codebase, and derive best practices to implement high-quality React components.

# Requirements

- Users can add/edit projects like name project, manager project, status, last update time, resources, timeline, estimation.
- Users can delete a project with a confirmation popup
- Users can search a project by name project
- Show error messages when the form is invalid and has confirmed

# Technical stack

- [React](https://react.dev/) v18.2.15 (React lets you build user interfaces out of individual pieces called components.)
- [Typescript](https://www.typescriptlang.org/) v5.0.2 (TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.)
- [Vite](https://vitejs.dev/) v4.4.5 (Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects)
- [Storybook](https://storybook.js.org/) v7.4.5 (Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It’s open source and free.)
- [Prettier](https://storybook.js.org/) v3.0.3 (Prettier is an opinionated code formatter, supports many languages, integrates with most editors)
- [Eslint](https://eslint.org/) v8.45.0 (ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.)
- [Chakra UI](https://chakra-ui.com/) v2.8.2 (Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.)
- [Node](https://nodejs.org/en/) v18.18.0 (Node.js® is an open-source, cross-platform JavaScript runtime environment.)

# Developer tool

- [pnpm](https://pnpm.io/)
- [eslint](https://eslint.org/)
- [prettier](https://storybook.js.org/)
- [husky](https://www.npmjs.com/package/husky)
- [commitlint](https://commitlint.js.org/#/)

# Design on figma:

- Design via [Figma](https://www.figma.com/file/dfLp5XLtk4WG4HcXI8GBiY/Project-Management?node-id=0%3A1&mode=dev)

# Editor

- Visual Studio Code

# Author

- ngan.do <[ngan.do@asnet.com.vn](ngan.do@asnet.com.vn)>

# Folder structure

```
├── .husky
├── .storybook
├── json-server
├── src
    ├── assets
    ├── components
    ├── constants
    ├── layouts
    ├── pages
    ├── services
    ├── utils
    ├── App.tsx
    └── main.tsx
├── .env
├── .env.example
├── .editorconfig
├── .eslintrc.cjs
├── .gitignore
├── .huskyrc
├── .lintstagedrc
├── .prettierrc
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── README.md
└── vite.config.ts
```

# Getting started

Step by step to get started this app at your location

## Clone repository with SSH

```bash
git clone git@gitlab.asoft-python.com:ngan.do/react-training.git
```

## Install necessary packages

Make sure you are stay at the root of application (`practice-two`), execute the command
to install package dependencies

```bash
pnpm install
pnpm i vite-plugin-environment
```

## Start the web server

Execute the following command to start the web server

```bash
pnpm start
```

Execute the following command to start the json-server

```bash
cd json-server
pnpm install
pnpm start
```

Happy path: Open the web server http://localhost:3000
_Note that the default port is 3000, you can custom it!_
