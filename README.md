# Playwright typescript - fixtures example

## Requirements

- installed node v22 and npm. I recommend using [NVM](https://github.com/nvm-sh/nvm) to manage node versions.

Clone this repo and execute:

```bash
npm install
npx playwright install --with-deps chromium
```

## To run tests from CLI:

```bash
npx playwright test --grep @scope --workers 1
npx playwright test --grep @scope --workers 3


npx playwright test --grep @auto-fixture --workers 1
```
