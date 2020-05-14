import React, { useContext } from 'react'
import { NumbersContext } from './NumbersContext'

import { Typography } from '@material-ui/core'

function LoadCurrentBudget() {
    const numbers = useContext(NumbersContext)
    console.log(numbers)
    return (
        <Typography>{numbers.budget.totalIncome}</Typography>
    )
}

export default LoadCurrentBudget