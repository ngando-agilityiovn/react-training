# React Basic - Practice one
This application is using React to a web application User Information application
# Targets
- Apply the knowledge after reading TypeScript + React document
- Setup & build a React app
- Split & build components can reusable
- Use hooks: useMemo, useCallback, useState, useEffect
- Use CSS module
# Requirements
- Users can add new users like name, email, phone number, image, state
- Users can delete a user with a confirmation popup
- Users can search a user by name
- Show error messages when the form is invalid and has confirmed
# Technical stack
- React v18.2.15
- Typescript v5.0.2
- Vite v4.4.5
- Storybook v7.4.5
- Prettier v3.0.3
- Eslint v8.45.0
# Developer tool
- pnpm
- eslint
- prettier
- husky
- commitlint
# Design on figma:
- Design via [Figma](<https://www.figma.com/file/xyVeUQ1gNu7WJv2mlvHans/Table-Design-system-(Community)?type=design&node-id=29-1222&mode=design&t=GYlhJBkTLkNLCF6n-0>)
# Information
- Editor: Visual Studio Code
# Team size
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
    ├── App.tsx
    └── main.tsx
├── .env
├── .env.example
├── .editorconfig
├── .eslintrc.cjs
├── .gitignore
├── .prettierignore
├── .prettierrc
├── index.html
├── commitlint.config.js
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
Make sure you are stay at the root of application (`practice-one`), execute the command
to install package dependencies
```bash
pnpm install
```
## Start the web server
Execute the following command to start the web server and json-server
```bash
pnpm start
```
Happy path: Open the web server http://localhost:3000
_Note that the default port is 3000, you can custom it!_