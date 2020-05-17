const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Budget {
        id: ID!,
        totalIncome: Int!
        monthlyFixedCosts: Int!
        investments: Int!
        savings: Int!
        guiltFreeSpendings: Int!
        transaction: [Transaction]
        userId: User
    }

    type Transaction {
        id: ID!
        price: Int!
        location: String!
        userId: User
    }

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        userName: String!
        password: String!
    }

    type Query {
        transactions: [Transaction]
    }
`

module.exports = {
    typeDefs,
}