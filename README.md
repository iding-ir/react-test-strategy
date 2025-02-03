# Index

- [About](#about)
- [Strategy](#strategy)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Examples](#examples)
- [Installation](#installation)
- [Testing](#testing)

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
- Uses `GitHub Actions` for CI/CD.

## Tech Stack
- `TypeScript`.
- `React`.
- `Redux Toolkit` for state management.
- `Vite` for building the React project.
- `clsx` for handling class names.
- `Prettier` for sorting imports.

## Examples

- [Testing Redux](https://github.com/iding-ir/react-test-strategy/blob/master/src/features/chat/__tests__/chat-slice.test.ts)
- [Testing Sagas](https://github.com/iding-ir/react-test-strategy/blob/master/src/features/chat/sagas/__test__/request-add-message.test.ts)
- [Integration Testing](https://github.com/iding-ir/react-test-strategy/blob/master/src/features/chat/components/Messages/__tests__/Messages.test.tsx)
- [e2e Testing](https://github.com/iding-ir/react-test-strategy/blob/master/cypress/e2e/2-messaging/messaging.cy.js)
- [Unit testing](https://github.com/iding-ir/react-test-strategy/blob/master/src/methods/__tests__/randomly-delay.test.ts)

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

## Testing

Run tests:
```
npm run test
```

Run e2e tests:
```
npm run e2e
```