import React, { useState } from 'react'
import s from  './Profile.module.css'
import BackgroundImg from './Background.png'
import { Loader } from '../Common/Loader/Loader'
import userPhoto from './../../Assets/userImg.png'
import {Status} from './ProfileInfo/Status'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { ProfileInfoForm } from './ProfileInfo/ProfileInfoForm'
import { saveProfile } from '../../Redux/profile-reducer'

const Profile = ({profile, updateStatus, status, isOwner, savePhoto, saveProfile}) =>{
    
    const [isEditMode, setEditMode] = useState(false)

    if(!profile) {
        return <Loader />
    }

    const mainPhotoSelected = (e) =>{
        const files = e.target.files;
        if(files.length){
            savePhoto(files[0])
        }
    }

    const activateEditMode = ()=> {
        setEditMode(true)
    }

    const deactiveteEditMode = ()=>{
        setEditMode(false)
    }
    
    return(
        <div className={s.profileArea}>
            
            <div className={s.backgroundImgContainer}>
                <img src={BackgroundImg} alt={'background'}/>
            </div>
            <div className={s.avatarImgContainer}>
                <img style={{background:'#ede7f5'}} src={profile.photos.large == null? userPhoto : profile.photos.large} alt={''}></img>

                
            </div> 

            {isOwner && <input className={s.chooseFileBtn} type='file' onChange={mainPhotoSelected}/>}   
            <div className = {s.userInfo}>
                <p className={s.fullName}>{profile.name}</p>  

                <Status updateStatus= {updateStatus} status = {status}/>
                {!isEditMode && isOwner && <button onClick={activateEditMode}> Edit profile </button>}
                {isEditMode ? <ProfileInfoForm deactiveteEditMode = {deactiveteEditMode} saveProfile = {saveProfile} profile = {profile}/> : <ProfileInfo profile={profile}/>}
            </div>  
        </div>
    )
}


export default Profile