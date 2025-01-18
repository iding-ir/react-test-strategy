# Index

- [About](#about)
- [Strategy](#strategy)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)

## About
A mock project test a React Redux application using `Vitest`, `React Testing Library`, `Cypress` and `Redux Saga Test Plan`.

## Strategy
- Write testable code.
- Mock only where it makes sense.
- Use `Vitest` instead of `Jest` for unit testing, because it works better with `Vite` and also it's faster.
- Use `Cypress` instead of `Playwright` for e2e testing, because it's better feature packed.
- Use `React Testing Library` alongside with `Vite` for Component and Integration testing. Cypress could also be used for component testing.
- Use `Redux Saga Test Plan` for testing effects.
- Unit test and Integration test `Redux`.
- Maintain test coverage at 100%, skip tests where it's not necessary.
- Only test critical flows when it comes to e2e testing, because e2e tests are often resource heavy tests.

## Features
- Uses `Redux Toolkit` for state management.
- Uses `Redux Saga` for managing effects.
- Uses `Web Sockets` for messaging.
- Uses `TailWindcss` for styling.
- Uses `Vitest` for unit testing.
- Uses `React Testing Library` with `Vitest` for Integration testing.
- Uses `Redux Saga Test Plan` for testing Saga effects.
- Uses `Cypress` for e2e testing.
- Uses `MSW` for mocking Service Workers.

## Tech Stack
- `TypeScript`.
- `React`.
- `Redux Toolkit` for state management.
- `Vite` for building the React project.
- `clsx` for handling class names.
- `Prettier` for sorting imports.

## Installation

Clone:
```
git clone https://github.com/iding-ir/react-test-strategy.git
```

Install dependencies:
```
npm install
```

Run dev environment:
```
npm run dev
```

Run tests:
```
npm run tests
```

Run e2e tests:
```
npm run e2e
```