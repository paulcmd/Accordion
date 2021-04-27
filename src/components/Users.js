import axios from 'axios';
import React, { useState, useEffect } from 'react';

const URL = 'https://jsonplaceholder.typicode.com/users';

const Users = () => {
    const [users, setUsers] = useState([])

    //useEffect go to url. use async
    
    useEffect(() => {
    
        const getUsers = () => {
            const { data } = await axios.get(URL)
        }
    getUsers();
    })
    
    //return a list

    
}

export default Users