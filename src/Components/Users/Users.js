import React, { useEffect } from 'react'
import {User} from './User/User'
import s from './Users.module.css'
import * as axios from 'axios';

const Users = (props) =>{

    useEffect(()=>{
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })
    },[])
    
    return(
        <div className={s.usersArea}>
            { props.users.map(u => <User user = {u} follow = {props.follow} unFollow = {props.unFollow}/>)}
        </div>
    )
}

export default Users