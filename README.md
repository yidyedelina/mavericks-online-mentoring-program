

# Installation

```
git clone repo_link
```

### npm

```sh
cd cloned_repo
npm install
npm run validate
npm run dev
```

If you don't need TailwindCSS, run `npm run remove:tailwind` after `npm install`.

## Commands

```bash
npm run dev             # start development server
npm run start           # start development server
npm run validate        # run test,lint,build,typecheck concurrently
npm run test            # run vitest
npm run test:watch      # run vitest watch mode
npm run lint            # run eslint
npm run lint:fix         # run eslint with --fix option
npm run typecheck       # run TypeScript compiler check
npm run build           # build production bundle to 'dist' directly
npm run prettier        # run prettier for json|yml|css|md|mdx files
npm run clean           # remove 'node_modules' 'yarn.lock' 'dist' completely
npm run serve           # launch server for production bundle in local
npm run remove:tailwind # remove TailwindCSS
```

# License

MIT

