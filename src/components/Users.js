import axios from 'axios'
import React, { useState, useEffect } from 'react'

const URL = 'https://jsonplaceholder.typicode.com/users'

const Users = () => {
    const [users, setUsers] = useState([])

    //useEffect go to url. use async

    useEffect(() => {
        const getUsers = async () => {
            const { data } = await axios.get(URL)
            console.log(data)
            setUsers(data)
        }
        getUsers()
    }, [])

    const renderedUsers = users.map(({ id, name, username, email, address }) => {
        return (
            <ul key={id}>
                <li>Name : {name}</li>
                <li>Username : {username}</li>
                <li>Email : {email}</li>
                <li>Address : {address.street}</li>
            </ul>
        )
    })

    //return a list
    return <div>{renderedUsers}</div>
}

export default Users
