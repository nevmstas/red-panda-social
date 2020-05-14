import React from 'react'
import s from './User.module.css'

export const User = (props)=>{
    return(
        <div className={s.userContainer}>
            <img alt="avatar" src={props.user.photoUrl}/>
            
            <div className={s.textContainer}>
                <div>
                    <div className={s.userName}>{props.user.fullName}</div>
                    <div className = {s.status}>{props.user.status}</div>
                </div>
                <div className={s.location}>
                    <div>{props.user.location.country}</div>
                    <div>{props.user.location.city}</div>
                </div>
            </div>

            {props.user.followed ? <button className={s.unfollowed} onClick = {() => {props.unFollow(props.user.id)}}>Unfollow</button>
                                 : <button className={s.followed} onClick={() => {props.follow(props.user.id)}}>Follow</button> }         
        </div>
    )
}

