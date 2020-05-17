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
        }
    }
}