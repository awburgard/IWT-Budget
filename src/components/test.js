import React, { Component } from 'react'
import { NumbersContext } from './NumbersContext'

export default class Test extends Component {
    render() {
        return (
            <NumbersContext.Consumer>
                {(context) => (
                    <>
                        <p>{context.budget.date}</p>
                    </>
                )}
            </NumbersContext.Consumer>
        )
    }
}
