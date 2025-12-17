# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## License

This project uses a dual-license approach:

1. **Source Code** is licensed under the [MIT License](LICENSE) - See the [LICENSE](LICENSE) file for details

   - Applies to all JavaScript, TypeScript, CSS, and other source code files
   - Permits commercial use, modification, and distribution

2. **Documentation and Static Resources** (in `/docs` and `/static` directories) are licensed under [Creative Commons BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)
   - **You are free to:**
     - **Share** - copy and redistribute the material in any medium or format
   - **Under the following terms:**
     - **Attribution** - You must give appropriate credit
     - **NonCommercial** - No commercial use without permission
     - **NoDerivatives** - No distribution of modified versions

For full details, see the complete [LICENSE](LICENSE) file.

## Third-Party Licenses

This project includes third-party open source software components. For more information, please see the [NOTICE](NOTICE) file.
