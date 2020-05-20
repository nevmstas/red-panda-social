import React from 'react'
import s from './User.module.css'
import userPhoto from './../../../Assets/userImg.png'
import { NavLink } from 'react-router-dom'

export const User = (props)=>{
    const onFollowClick = (userId) =>{
        props.follow(userId)
    }

    const onUnFollowClick = (userId) =>{
        props.unFollow(userId)
    }
    

    return(
        <div className={s.userContainer}>
            <NavLink to={'/profile/' + props.user.id}>
                <img alt="avatar" src={props.user.photos.small != null? props.user.photos.small : userPhoto}/>
            </NavLink>
            
            
            <div className={s.textContainer}>
                <div>
                    <div className={s.userName}>{props.user.name}</div>
                    <div className = {s.status}>{props.user.status}</div>
                </div>
                {/* <div className={s.location}>
                    <div>{props.user.location.country}</div>
                    <div>{props.user.location.city}</div>
                </div> */}
            </div>
            

            {props.user.followed ? <button disabled={props.followingInProgress.some(id=>id === props.user.id)} className={s.unfollowed} onClick = {() => {
                //props.unFollow(props.user.id)
                onUnFollowClick(props.user.id)
            
            }}>Unfollow</button>
                                 : <button disabled={props.followingInProgress.some(id=>id === props.user.id)} className={s.followed} onClick={() => {
            //props.follow(props.user.id)
                onFollowClick(props.user.id)
            }}>Follow</button> }         
        </div>
    )
}

