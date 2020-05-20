import React from "react"
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const GET_USERS = gql`
    query getUser {
        users {
            first_name
            last_name
            }
        }
`

function Users() {
    const { loading, error, data } = useQuery(GET_USERS)

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        console.error(error)
        return <div>Error!</div>
    }

    return (
        <div>{data.users[0].first_name}</div>
    )
}

export default Users