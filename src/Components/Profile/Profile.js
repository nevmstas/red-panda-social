import React from 'react'
import s from  './Profile.module.css'
import BackgroundImg from './Background.png'
import AvatarImg from './Avatar.png'

const Profile = (props) =>{
    return(
        <div className={s.profileArea}>
            
            <div className={s.backgroundImgContainer}>
                <img src={BackgroundImg} alt={'background'}/>
            </div>
            <div className={s.avatarImgContainer}>
                <img src={AvatarImg} alt={''}></img>
                
            </div>   
            <div className = {s.userInfo}>
                <p className={s.fullName}>Morty Smith</p>    
            </div>   
        </div>
    )
}

export default Profile