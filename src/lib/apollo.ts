import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o4cqcr0iqf01z2454f5yxy/master',
  cache: new InMemoryCache()
});