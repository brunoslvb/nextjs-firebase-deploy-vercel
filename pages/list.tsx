import axios from "axios";
import { report } from "process";
import React, { useState, useEffect } from "react";

import { firestore } from '../services/firebase';

export default function List() {

    const [users, setUsers] = useState([]);

    async function getUsers() {

        const response = await firestore.collection('users').get();

        let id = 0;        

        const users = response.docs.map(item => {            

            id++;

            return {
                id: id,
                name: item.data().firstName
            };
        });        

        setUsers(users);

    }

    async function getMessage(){

        const response = await axios.get('/api/hello');

        const message = response.data;

        console.info(message);

    }

    useEffect(() => {

        getUsers();

    }, []);

    return (

        <div style={{
            margin: '50px'
        }}>

            <h1>Lista de usuários</h1>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <button type="button" onClick={getMessage}>Get Message</button>

        </div>

    )

}