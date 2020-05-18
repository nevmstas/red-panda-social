import React from 'react'
import s from './User.module.css'
import userPhoto from './../../../Assets/userImg.png'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export const User = (props)=>{
    const followTest = (userId) =>{
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY" : "6c351a34-68f0-4397-9304-ce329d07358e" 
            }
        })
            .then(response => {
                if( response.data.resultCode === 0 ){
                    props.follow(userId)
                }
            })
    }

    const unFollowTest = (userId) =>{
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            withCredentials: true,
            headers: {
                "API-KEY" : "6c351a34-68f0-4397-9304-ce329d07358e" 
            }
        })
            .then(response => {
                if( response.data.resultCode === 0 ){
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

