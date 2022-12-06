## Setting up with Apollo Client to use GraphQl API's

### Steps:

1. Create a new React project or go to an existing one
2. Install Apollo Client and GraphQl: `npm i @apollo/client graphql`

- In `src/index`:

1. Import the necessary modules

```js
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
```

2. Define a variable `client` and give it the base url

```js
const client = new ApolloClient({
  uri: "API_URL_GOES_HERE",
  cache: new InMemoryCache(),
});
```

3. Wrap the app with Apollo Provider and pass client to it

```js
<ApolloProvider client={client}>
  <App />
</ApolloProvider>,
```
