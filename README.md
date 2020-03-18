# CMS

We use the Sanity CMS to manage our editorial content on both the storefront, documentation and dashboard websites.

## Get Started

```
npm ci
npx sanity install
npm run develop
```

## Schema Changes

When making changes to the schema, they need to be deployed to the Sanity GraphQL endpoint:

```
npm run deploy
```