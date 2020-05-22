import React from 'react'
import s from  './Profile.module.css'
import BackgroundImg from './Background.png'
import { Loader } from '../Common/Loader/Loader'
import userPhoto from './../../Assets/userImg.png'
import {Status} from './ProfileInfo/Status'

const Profile = (props) =>{

    if(!props.profile) {
        return <Loader />
    }

    
    return(
        <div className={s.profileArea}>
            
            <div className={s.backgroundImgContainer}>
                <img src={BackgroundImg} alt={'background'}/>
            </div>
            <div className={s.avatarImgContainer}>
                <img style={{background:'#ede7f5'}} src={props.profile.photos.large == null? userPhoto : props.profile.photos.large} alt={''}></img>
                
            </div>   
            <div className = {s.userInfo}>
                <p className={s.fullName}>{props.profile.name}</p> 
                <Status status = {"dead inside"}/>
            </div>  

        </div>
    )
}

export default Profile