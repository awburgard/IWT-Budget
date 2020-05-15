import React, { useContext } from 'react'
import { NumbersContext } from './NumbersContext'

import { Typography } from '@material-ui/core'

function LoadCurrentBudget() {
    const numbers = useContext(NumbersContext)
    return (
        <Typography>Current Total Income for {numbers.budget.date}: {numbers.budget.totalIncome}</Typography>
    )
}

export default LoadCurrentBudget