# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

React app that renders the list of github repositories. Intial repos are displayed with search query `react`. User is able to perform search with their desired query. The number of repos shown per page is 5, if there are more repos available Load More button will be displayed.

The project utilises GitHub Graphql API

- [Docs](https://developer.github.com/v4/)
- [Explorer](https://developer.github.com/v4/explorer/)

If you would like to run the project locally, make sure you add your personal github token.

```bash
cp .env .env.local
sed -i 's/PUT_YOUR_TOKEN_HERE/TOKEN_STRING/' .env.local
```

Replace TOKEN_STRING placeholder with your actual token.

Next, run

```bash
npm install
```

and

```bash
npm start
```

to run the project locally.

Alternatively you could use Docker

```bash
./docker_build.sh
```

to build the image and

```bash
docker-compose up
```

to run it.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
