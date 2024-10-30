# My Package

A template npm package with best practices, designed to kickstart your Node.js project. This template includes ESLint, Prettier, GitHub Actions CI, and example configurations for common project needs.

## Table of Contents

1. [Features](#features)
2. [Getting Started](#getting-started)
3. [Folder Structure](#folder-structure)
4. [Configuration Files](#configuration-files)
5. [Scripts](#scripts)
6. [Contributing](#contributing)
7. [License](#license)

## Features

- **ESLint and Prettier**: Enforced code standards and formatting.
- **GitHub Actions CI**: Automated testing and linting on pull requests.
- **Basic Project Structure**: Predefined folders for easy organization.
- **Example Tests**: A sample test to kickstart test-driven development.

## Getting Started

### Prerequisites

- **Node.js** (version 23.x or higher)
- **npm** (comes with Node.js) or **yarn** if preferred.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/josebarrios/template-npm.git
   cd template-npm
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start Development**: You’re ready to begin building your npm package. Edit files under `src/`, run tests, and build for production.

## Folder Structure

The template has the following structure:

```
template-npm/
├── .github/                   # GitHub-specific files
│   ├── ISSUE_TEMPLATE/        # Templates for issues
│   │   └── bug_report.md
│   │   └── feature_request.md
│   ├── workflows/             # GitHub Actions workflows
│   │   └── ci.yml
├── src/                       # Main source code (JavaScript files)
│   └── index.js
├── tests/                     # Folder for tests
│   └── example.test.js
├── .gitignore                 # Ignored files for Git
├── .npmignore                 # Ignored files for npm
├── LICENSE                    # License file (MIT)
├── README.md                  # Project documentation
├── package.json               # npm package configuration
├── .eslintrc.js               # ESLint configuration
├── .prettierrc                # Prettier configuration
├── CONTRIBUTING.md            # Contribution guidelines
├── CHANGELOG.md               # Changelog for releases
└── CODE_OF_CONDUCT.md         # Code of conduct for contributors
```

## Configuration Files

- **`.gitignore`**: Specifies files ignored by Git.
- **`.npmignore`**: Specifies files excluded from the npm package.
- **`.eslintrc.js`**: ESLint configuration for linting JavaScript files.
- **`.prettierrc`**: Prettier configuration to enforce code style.
- **`package.json`**: Defines package metadata and dependencies.

## Scripts

This template includes npm scripts for common tasks. You can run these using `npm run <script-name>`:

- **`lint`**: Checks code for linting errors based on ESLint rules.
  ```bash
  npm run lint
  ```
- **`format`**: Formats code using Prettier.
  ```bash
  npm run format
  ```
- **`test`**: Runs tests with Jest.
  ```bash
  npm run test
  ```
- **`prepublishOnly`**: Runs lint, format, audit and tests, before publishing to ensure code quality.

## Using GitHub Actions for CI

The `.github/workflows/ci.yml` file defines a GitHub Actions workflow for Continuous Integration (CI). The CI workflow runs linting and tests automatically on every push or pull request to the `main` branch, ensuring code quality and reliability.

## Contributing

We welcome contributions to improve this template. Here’s how you can help:

1. **Fork the repository**.
2. **Clone your forked repository**:
   ```bash
   git clone https://github.com/josebarrios/template-npm.git
   ```
3. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature
   ```
4. **Make your changes and commit**.
5. **Push your changes**:
   ```bash
   git push origin feature/your-feature
   ```
6. **Create a pull request** on GitHub.

Please read `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md` for more details on contributing and guidelines.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
