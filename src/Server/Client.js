import { ApolloClient, InMemoryCache } from '@apollo/client'

// connect graphql on port 4000

const Client = new ApolloClient({
  uri: 'http://localhost:4000/graphql/',
  cache: new InMemoryCache()
})

export default Client
