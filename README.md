# Welcome to Galaxy!

This is a sleek dark SaaS theme for Astro.

To get started, first install all necessary packages:

```
npm install
```

## Code Intro

I have created a few code tours to introduce you to the codebase. You will need the extension [Code Tour](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour) to view them in VSCode.

The source files have the following setup. Note that not all files are included - it is already long, no one wants it to be longer.

```
.
├── .tours/
│   └── code-intro.tour
├── .vscode/
│   └── extensions.json
├── public/
│   ├── favicons/
│   │   └── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   └── hero.jpg
│   │   ├── logos/
│   │   │   └── adobe.svg
│   │   └── videos/
│   │       └── demo.mp4
│   ├── components/
│   │   ├── Hero/
│   │   │   ├── Hero1.astro
│   │   │   ├── Hero2.astro
│   │   │   └── Hero3.astro
│   │   └── Footer/
│   │       └── Footer.astro
│   ├── config/
│   │   └── navData.json.ts
│   ├── content/
│   │   ├── authors/
│   │   ├── blog/
│   │   ├── otherPages/
│   │   └── config.ts
│   ├── icons/
│   │   └── grid-lg.svg
│   ├── js/
│   │   └── textUtils.ts
│   ├── layouts/
│   │   ├── BaseHead.astro
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── examples/
│   │   │   └── (contains many example pages so you can see how to use components)
│   │   ├── tags/
│   │   │   ├── [tag]/
│   │   │   │   └── [...page].astro
│   │   │   └── index.astro
│   │   ├── [page].astro
│   │   ├── 404.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   ├── login.astro
│   │   ├── overview.astro (links to example pages)
│   │   ├── password-reset.astro
│   │   ├── signup.astro
│   │   └── rss.xml.ts
│   └── styles/
│       ├── buttons.scss (button styles)
│       ├── global.scss (global styles)
│       └── prose.scss (prose styling for markdown pages)
├── .gitignore
├── .prettierrc.mjs
├── astro.config.mjs
├── netlify.toml
├── package.json
├── package-lock.json
├── README.md
├── tailwind.config.cjs
└── tsconfig.json
```

For robots like Google to see the correct sitemap, you will want to edit the `public/robots.txt` file to use your website domain.

## Other Resources

- See my [blog post](https://webreaper.dev/posts/best-vscode-extensions-front-end-developers/) for recommended VSCode extensions.
- You can learn more information from the [theme docs](https://cosmicthemes.com/docs/) page on the [Cosmic Themes Website](https://cosmicthemes.com/).
- For support, see the [support page](https://cosmicthemes.com/support/).
- [License details](https://cosmicthemes.com/license/)

## General Astro Info

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory. I also frequently use `src/assets` for images when using Astro asssets for image optimization.

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### 👀 Want to learn more?

Feel free to check out the [Astro documentation](https://docs.astro.build).
