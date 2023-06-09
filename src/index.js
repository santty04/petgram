import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Context from './Context';
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-backend-one.now.sh/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <Context.Provider>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  </Context.Provider>, document.getElementById('app')
)
