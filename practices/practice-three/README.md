# React Basic - Practice three

This application is using React to a web application Product List application. Application will manage product list.

# Targets

- Apply knowledge of React Advanced.
- Apply Unit testing (coverage greater than 90%).
- Use Storybook for documenting React components.
- Know how to optimize performance and get more familiar with debugging.
- Use Code-Splitting to improve the performance of the application.
- Apply SWR for fetching API.
- Apply Zustand for state management locally.
- Learn to work with a large codebase, and derive best practices to implement high-quality React components.
- Apply React Router to update the URL from a link click without making another request for another document from the server.

# Requirements

- Users can increase/decrease the quantities and add products to the Cart Page for the payment
- Users can delete a product with a confirmation popup
- Users can search a product by category, brand, size, price product

# Technical stack

- [React](https://react.dev/) v18.2.15 (React lets you build user interfaces out of individual pieces called components.)
- [Typescript](https://www.typescriptlang.org/) v5.0.2 (TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.)
- [Vite](https://vitejs.dev/) v4.4.5 (Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects)
- [Storybook](https://storybook.js.org/) v7.4.5 (Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It’s open source and free.)
- [Prettier](https://storybook.js.org/) v3.0.3 (Prettier is an opinionated code formatter, supports many languages, integrates with most editors)
- [Eslint](https://eslint.org/) v8.45.0 (ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.)
- [Chakra UI](https://chakra-ui.com/) v2.8.2 (Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.)
- [Node](https://nodejs.org/en/) v18.18.0 (Node.js® is an open-source, cross-platform JavaScript runtime environment.)
- [Jest](https://jestjs.io/) v7.4.5 (Jest is a delightful JavaScript Testing Framework with a focus on simplicity.)
- [SWR](https://swr.vercel.app/) v7.4.5 (React Hooks for Data Fetching.)
- [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro/) v7.4.5
  (React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.)
- [React Router v6](https://reactrouter.com/) v7.4.5 (React Router enables "client side routing".)
- [Zustand](https://www.npmjs.com/package/zustand) v4.4.7 (A small, fast and scalable bearbones state-management solution using simplified flux principles.)

# Developer tool

- [pnpm](https://pnpm.io/)
- [eslint](https://eslint.org/)
- [prettier](https://storybook.js.org/)
- [husky](https://www.npmjs.com/package/husky)
- [commitlint](https://commitlint.js.org/#/)

# Design on figma:

- Design via [Figma](https://www.figma.com/file/YnwB8QN1TpT7I7PuJCp78s/Product-List-Page?node-id=0%3A1&mode=dev)

# Editor

- Visual Studio Code

# Author

- ngan.do <[ngan.do@asnet.com.vn](ngan.do@asnet.com.vn)>

# Folder structure

```
├── .husky
├── .storybook
├── coverage
├── src
    ├── components
    ├── constants
    ├── helpers
    ├── hooks
    ├── mainlayout
    ├── pages
    ├── services
    ├── stores
    ├── themes
    ├── types
    ├── App.tsx
    └── main.tsx
├── .env
├── .eslintrc.cjs
├── .gitignore
├── .huskyrc
├── .lintstagedrc
├── .prettierrc
├── favicon.ico
├── index.html
├── package.json
├── README.md
├── setup-jest.js
├── tsconfig.json
└── vite.config.ts
```

# Getting started

Step by step to get started this app at your location

## Clone repository with SSH

```bash
git clone git@gitlab.asoft-python.com:ngan.do/react-training.git
```

## Install necessary packages

Make sure you are stay at the root of application (`practice-three`), execute the command
to install package dependencies

Add .env file with path: https://657c3495853beeefdb98e5f4.mockapi.io/Product/

```bash
pnpm install
pnpm i vite-plugin-environment
```

Happy path: Open the web server http://localhost:3000
_Note that the default port is 3000, you can custom it!_
