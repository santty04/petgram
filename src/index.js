import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { App } from './App'

const client = new ApolloClient({
  iro
})

ReactDOM.render(<App />, document.getElementById('app'))
