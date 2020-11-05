# Notes CRUD app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It creates notes that are persisted via Airtable with serverless functions.

See a demo [here](https://react-notes-nu.vercel.app/).

## Running locally

##### Install dependencies:

```
yarn install
```

##### You must set the following environment variables in `.env` in the project directory:

```
airtable_base="appOd..."
airtable_api_key="keyED..."
```

##### In the project directory, run:

```
vercel dev
```

Runs the app in development mode with serverless functions in the `api` directory.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
