import React from 'react'
import {User} from './User/User'
import s from './Users.module.css'

const Users = (props) =>{
       
    return(
        <div className={s.usersArea}>
            { props.users.map(u => <User user = {u} follow = {props.follow} unFollow = {props.unFollow}/>)}
        </div>
    )
}

export default Users