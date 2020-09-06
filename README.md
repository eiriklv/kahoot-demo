## Kahoot Demo Game

![Ipad Screenshot](https://i.ibb.co/QbBsGMq/Skjermbilde-2020-09-06-kl-19-28-40.png)

Latest deployment found on [vullum.io/kahoot-demo](https://www.vullum.io/kahoot-demo).

Built using:

- TypeScript
- React (bootstrapped using CRA)
- Redux
- Reselect
- Styled Components
- Jest for unit testing
- Jest and Puppeteer for E2E / smoke testing
- Prettier and Husky for ensuring code style on stage/commit

Continuous integration and deployment is done using Github Actions

For now this app is quite simple, but with more complex requirements and interaction with a backend I would have added Redux Saga to handle control flow / side-effects and something like axios to perform requests.

With more time I would also have added Storybook + storyshots to do visual unit/snapshot testing of React components.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Runs unit tests<br />

### `npm run test:e2e`

Runs end-to-end tests<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />

### `npm run deploy`

Deploys the app to Github Pages.

## CI / CD

Automatic deployment to Github pages for master branch
