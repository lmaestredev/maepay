<h1 align="center">Maepay</h1>

<p align="center">
  I will explain you, how the project works 
</p>

## Table of Contents

- [Installing](#installing)
- [Building](#building)
- [Testing](#testing)
- [Linting](#linting)
- [Running](#running)
- [Syncdb](#syncdb)

## Installing

```bash
nvm install 18.0.0
nvm use
npm install npm@8.3.0 -g
npm install
```

## Building

```bash
npm run build
```

## Testing

### Jest with Testing Library

```bash
npm run test
```

## Linting

Run the linter

```bash
npm run lint
```

Fix lint issues automatically

```bash
npm run lint:fix
```

## Running

Run on production
```bash
npm run start
```

Run on local
```bash
npm run start:dev
```
## Syncdb

Synchronize database app on production:

1 - Stop the app:
```bash
ctrl + c
```  

2 - Run this command:
```bash
npm run syncdb
```  