const resolvers = {
    Query: {
        transactions: async () => {
            try {
                const allTransactions = await transactions.find()
                return allTransactions
            } catch (e) {
                console.log(`error: ${e}`)
                return []
            }
        },
        users: async () => {
            try {
                const allUsers = await User.find()
                return allUsers
            } catch (e) {
                console.log(`error: ${e}`)
                return []
            }
        },
    } 
}

module.exports = {
    resolvers,
}