import React from 'react'
import s from  './Profile.module.css'
import BackgroundImg from './Background.png'
import { Loader } from '../Common/Loader/Loader'
import userPhoto from './../../Assets/userImg.png'
import {Status} from './ProfileInfo/Status'

const Profile = ({profile, updateStatus, status}) =>{
    if(!profile) {
        return <Loader />
    }

    
    return(
        <div className={s.profileArea}>
            
            <div className={s.backgroundImgContainer}>
                <img src={BackgroundImg} alt={'background'}/>
            </div>
            <div className={s.avatarImgContainer}>
                <img style={{background:'#ede7f5'}} src={profile.photos.large == null? userPhoto : profile.photos.large} alt={''}></img>
                
            </div>   
            <div className = {s.userInfo}>
                <p className={s.fullName}>{profile.name}</p>                
                <Status updateStatus= {updateStatus} status = {status}/>
            </div>  

        </div>
    )
}

export default Profile