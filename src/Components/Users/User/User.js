import React from 'react'
import s from './User.module.css'
import userPhoto from './../../../Assets/userImg.png'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import {usersApi} from './../../../api/api'

export const User = (props)=>{
    const followTest = (userId) =>{
        usersApi.followUser(userId).then(data => {
                if( data.resultCode === 0 ){
                    props.follow(userId)
                }
            })
    }

    const unFollowTest = (userId) =>{
        usersApi.unFollowUser(userId).then(data => {
                if( data.resultCode === 0 ){
                    props.unFollow(userId)
                }
            })
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
            

            {props.user.followed ? <button className={s.unfollowed} onClick = {() => {
                //props.unFollow(props.user.id)
                unFollowTest(props.user.id)
            
            }}>Unfollow</button>
                                 : <button className={s.followed} onClick={() => {
            //props.follow(props.user.id)
                followTest(props.user.id)
            }}>Follow</button> }         
        </div>
    )
}

