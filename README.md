# hono-inertia-example

[Hono](https://hono.dev) + [Inertia.js](https://inertiajs.com) + SolidJS on Cloudflare Workers.

## Overview / 概要

- EN: This project has been migrated from Hono + Inertia.js + React to SolidJS as the frontend framework.
- JP: このプロジェクトは Hono + Inertia.js + React のフロントエンドフレームワークを SolidJS に移行しました。

- EN: It uses [`inertia-adapter-solid`](https://github.com/iksaku/inertia-adapter-solid) as the Inertia adapter for SolidJS.
- JP: SolidJS 向けの Inertia アダプターとして [`inertia-adapter-solid`](https://github.com/iksaku/inertia-adapter-solid) を利用しています。

- EN: Server-Side Rendering (SSR) is supported.
- JP: Server-Side Rendering (SSR) に対応しています。

## Experimental Status / 実験的ステータス

- EN: Hono + Inertia.js integration is experimental.
- JP: Hono + Inertia.js の連携は実験的 (Experimental) です。

- EN: `inertia-adapter-solid` is also experimental/beta.
- JP: `inertia-adapter-solid` も実験的 / ベータ版です。

## Pages

- `/` — Home
- `/users` — Users list
- `/users/:id` — User detail
- `/users/new` — Create user (with `@hono/zod-validator`)

## Develop

```sh
bun install
bun run dev
```

## Build & deploy

```sh
bun run build
bun run deploy
```
