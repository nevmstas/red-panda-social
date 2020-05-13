import React from 'react'
import {User} from './User/User'

const Users = (props) =>{
    
    let onFollowClick = (userId) =>{
        props.follow(userId)
    }

    let onUnFollowClick = (userId) =>{
        props.unfollow(userId)
    }
    
    return(
        <div style={{background: 'white'}}>
            { props.users.map(u => <User user = {u} follow = {props.follow} unFollow = {props.unfollow}/>)}
        </div>
    )
}

export default Users