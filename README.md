## Kahoot Demo Game

Built using

- TypeScript
- React (bootstrapped using CRA)
- Redux
- Reselect
- Styled Components
- Jest and Puppeteer for E2E / smoke testing

For now this app is quite simple, but with more complex requirements and interaction with a backend I would have added Redux Saga to handle control flow / side-effects and something like axios to perform requests.

With more time I would also have added Storybook + storyshots to do visual unit/snapshot testing of React components.

Latest deployment found on [vullum.io/kahoot-demo](https://www.vullum.io/kahoot-demo).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm run deploy`

Deploys the app to Github Pages.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deployment

Automatic deployment to Github pages for master branch
