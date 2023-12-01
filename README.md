# &clubs; Next.js Boilerplate Documentation &clubs;

A Next.js boilerplate with JavaScript, TailwindCSS, Mantine UI and more.

## 📝 Overview

This boilerplate provides a starting point for building a Next.js application with the following features:

-   Next.js - Framework for building server-rendered React applications
-   Tailwind CSS - Utility-first CSS framework for styling
-   Mantine UI - React component library for reusable components
-   Yarn - Package manager
-   Husky - For running scripts during git commits
-   Commitlint - Linting commit messages
-   Prettier - Code formatting
-   ESLint - Linting JavaScript codes

## 🚀 Getting Started

To use this boilerplate, Install dependencies:

`yarn`

Then, run the development server:

`yarn run dev`

The app will be served at http://localhost:3000.

## 🖊 Code Structure Based On Atomic Design Pattern Principles

### 1.Introduction

Atomic Design is a methodology for creating design systems that breaks down user interfaces into smaller, reusable components. When applied to a Next.js app, the following principles are typically followed:

-   `Atoms`: These are the smallest building blocks, like buttons, input fields, and icons. They represent individual UI elements without any context. Make sure that your atoms follow these rules :

    -   They can't break into smaller components/elements for different functionality and purpose.
    -   they are reusable in the entire app.
    -   Do not use any atom components inside of an atom component.

-   `Molecules`: Molecules are combinations of atoms that work together to create more complex components, such as a search bar with an input field and a button. Make sure that your molecules follow these rules :

    -   They can break into smaller components/elements for different functionality and purpose.
    -   they are reusable in the entire app.
    -   Do not use any molecule components inside of a molecule component.

-   `Organisms`: Organisms are larger components that combine molecules and atoms to form distinct sections of a user interface.

-   `Templates`: Templates provide a higher-level layout structure for pages or sections. They define the overall arrangement of organisms and other components within a specific context.

-   `Pages`: Pages are instances of templates with real content and data. They represent the actual user interface seen by visitors and are rendered by Next.js routes. (Using app directory routing style)

By adhering to these principles, Atomic Design helps in creating scalable, consistent, and maintainable design systems for your Next.js application. It promotes reusability, modularity, and clarity in component structure, making it easier to collaborate, iterate, and maintain your UI.

At the end, We’re not designing pages, we’re designing systems of components. ~~Stephen Hay

### 2.Folder Structure

```
- public/
- src/
  - app/
  - components/
    - partials/
    - templates/
    - UI/
      - atoms/
      - molecules/
      - organisms/
  - core/
    - constants/
    - services/
    - utils/
  - styles/
```

#### Public

-   The public directory holds assets such as images, icons, fonts, and locales. These assets can be accessed directly through URLs in your application.

#### Src

-   The src directory contains the main source code of your Next.js project.

#### App

-   The app directory handles the routing and navigation style of the application.

#### Components

-   The components directory follows the Atomic Design pattern and is organized into three subdirectories: partials, templates, and UI.

#### Partials

-   The partials directory holds containers, layouts, and other reusable components that are used across different pages.

#### Templates

-   The templates directory contains fully-fledged page templates. Consisting mostly of groups of organisms to form a page — where clients can see a final design in place.

#### UI

-   The UI directory encompasses the atomic design hierarchy, including atoms, molecules, and organisms.

#### Core

-   The core directory houses core functionality and utility files.

#### Constants

-   The constants directory stores static constants, such as arrays or values used throughout your application.

#### Services

-   The services directory is dedicated to handling various services, like APIs, fetching data, state management, storage management, etc.

#### Utils

-   The utils directory consists of utility functions and helper scripts to facilitate common tasks.

#### Styles

-   The styles directory manages your application's styling, including global styles, CSS modules, or any other styling approach you choose.

### 3.Naming Conventions

-   Use camelCase for variable and function names (e.g., myVariable, calculateTotal).
-   Use PascalCase for components and their folders (e.g., MyComponent).
-   Use kebab-case for each files/folders inside of core, styles and public directories (e.g., my-component.ts, api-utils.ts).
-   Use SHOUTING_CASE for static constants(e.g., ITEMS_ARRAY.constants.ts, SIDEBAR_ITEMS.constants.ts).

### 4.Import and Export Guidelines

-   If the file exports only 1 module, it has to be default export.
-   Then, its gonna get named export inside the parent root (index.ts)

### 5.Component Structure

-   Use functional components with hooks whenever possible.
-   Keep components small and focused on a single responsibility.
-   Use arrow functions instead of regular functions.
-   Use meaningful prop names for better readability.

## 🛠 Scripts

-   `dev`: Runs next dev server
-   `build`: Creates production build
-   `start`: Starts the production server
-   `lint`: Runs ESLint on specific path
-   `prettier`: Runs prettier on specific path

## 📚 Git Structure

In order to keep a consistent code style amongst different team members, we are using **Prettier** for formatting code, **ESLint** for checking code style and **Husky** for assuring that these tools are working properly and run the required scripts before committing our changes.

To ensure that everyone is following the recommended** git commit message** format, we are using **Commitlint** to control our commit messages.
https://www.conventionalcommits.org/en/v1.0.0/

These are **must-to-have** prefixes for commit title:
**build**, **chore**, **ci**, **docs**, **feat**, **fix**, **perf**, **refactor**, **revert**, **style**, **test**.

Pay attention the text after ":" is arbitrary and does not follow any rules , but please be descriptive with transparent commit message 😉

Here are some commit message examples:

-   **feat**: main navbar added
-   **style**: home background color reverted to primary
-   **fix**: useFetch overload fixed

If you are using Github Desktop Application, add this path to your environment variables

    C:\Program Files\Git\bin

If you are experiencing git "LF"error, run the following code to ignore git warning

    git config --global core.autocrlf true

## ⚠️ Git management & Branching Strategy

-   pull/merge from remote, before each code season!
-   Open new branch for every features/issue.
-   After testing in each code season, merge "your branch" to **Development** .
-   Never ever push directly into **main**/**master** branch. (except for deploy, after final testing and from **Development** branch)

## ⚡ App Versioning Structure

Before updating or modifying the project structure, if you are the maintainer of this project, it is recommended to read this guide on Semantic Versioning.

Semantic Versioning is a 3-component number format (X.Y.Z) used to indicate software versioning:

-   **X (Major version)** represents the major version. It signifies a significant update, resetting both the minor and patch versions. For example, upgrading from 2.6.9 to 3.0.0 denotes a major version change when breaking the existing API.

-   **Y (Minor version)** represents the minor version. It denotes the release of new functionality while resetting the patch version. For instance, upgrading from 2.6.9 to 2.7.0 signifies a minor version change when introducing new features in a backward-compatible manner.

-   **Z (Patch version)** represents the patch version. It indicates bug fixes without altering functionality. There is no limit to the number of patch versions. For example, upgrading from 2.6.9 to 2.6.10 denotes a patch version upgrade when fixing bugs.

⚠ Note that upgrading left-hand numbers will reset right-hand numbers to "0" !
