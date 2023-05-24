<p align="center">
   <img src="https://raw.githubusercontent.com/tavareshenrique/ignite-reactjs/84a216ea852ad8929e8441923658957662a14169/03-ignews/public/images/logo.svg" alt="IG News" width="280"/>
</p>

<p align="center">
   <a href="https://www.linkedin.com/in/yagovela/">
      <img alt="Yago Vela" src="https://img.shields.io/badge/Yago Vela-eba417?style=flat&logo=Linkedin&logoColor=white" />
   </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-eba417">
</p>

> <b>ig.news</b> is the third project created in chapter 3 of the [Rocketseat](https://github.com/Rocketseat) Ignite React track. The project consists of a blog where you must be a subscriber to read any psoto, and the [Stripe](https://stripe.com/) API is used to control payments and save subscribers' data in FaunaDB.

# :pushpin: Contents

- [Technologies](#computer-tecnologias)
- [Running](#construction_worker-executando)
- [Challenges](#atom_symbol-desafios)
- [License](#closed_book-licença)

### Photos

<div>
   <img src="https://raw.githubusercontent.com/tavareshenrique/ignite-reactjs/main/03-ignews/src/assets/previews/preview1.png" width="500px" />
   <img src="https://raw.githubusercontent.com/tavareshenrique/ignite-reactjs/main/03-ignews/src/assets/previews/preview2.png" width="500px" />
   <img src="https://raw.githubusercontent.com/tavareshenrique/ignite-reactjs/main/03-ignews/src/assets/previews/preview3.png" width="500px" />
   <img src="https://raw.githubusercontent.com/tavareshenrique/ignite-reactjs/main/03-ignews/src/assets/previews/preview4.png" width="500px" />
</div>

# :computer: Technologies

This project was made using the following technologies:

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [FaunaDB](https://fauna.com/)'
- [Axios](https://github.com/axios/axios)
- [Prismic](https://prismic.io/)
- [Stripe](https://stripe.com/)
- [Sass](https://sass-lang.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

# :construction_worker: Running

```bash
# Clone the Repository
$ git@github.com:yagovelaa/ignite-reactjs.git
```

```bash
# Access the Chapter III folder and 01-ignews
```

```bash
# Access the project folder
$ cd 01-ignews
```

```bash
# Create a .env.local file and set the environment variables
# Stripe
STRIPE_API_KEY=
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
STRIPE_API_PRICE_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_SUCESS_URL=
STRIPE_CANCEL_URL=
# Github
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
# FaunaDB
FAUNADB_KEY=
# Prismic CMS
PRISMIC_ENDPOINT=
PRISMIC_ACCESS_TOKEN=
```

```bash
# Download dependencies
$ yarn
```

```bash
# Execute
$ yarn start
```

Go to <http://localhost:3000> to see the result.

# :atom_symbol: Challenges

# :closed_book: License

This project is licensed [MIT](./LICENSE).