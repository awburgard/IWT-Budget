import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
require('dotenv').config()

export const createApolloClient = () => {
    return new ApolloClient({
        link: new HttpLink({
            uri: "https://burgard-budget.herokuapp.com/v1/graphql",
        }),
        cache: new InMemoryCache(),
    });
};