import React from 'react'
import s from  './Profile.module.css'
import BackgroundImg from './Background.png'
import { Loader } from '../Common/Loader/Loader'
import userPhoto from './../../Assets/userImg.png'
import {Status} from './ProfileInfo/Status'

const Profile = ({profile, updateStatus, status, isOwner, savePhoto}) =>{
    if(!profile) {
        return <Loader />
    }

    const mainPhotoSelected = (e) =>{
        const files = e.target.files;
        if(files.length){
            savePhoto(files[0])
        }
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
                <div><b>Looking for a job:</b> {profile.lookingForAJob? 'Yes': 'No'}</div>
                {profile.lookingForAJob && 
                    <div>
                        <b>My professional skills:</b> {profile.lookingForAJobDescription}    
                    </div>}
                    <div>
                        <b>Contacts: </b>{ Object.keys(profile.contacts).map(key =>{
                            if(profile.contacts[key]!=null) return <Contact key={key} contactTitle = {key} contactValue={profile.contacts[key]} />
                        })}
                    </div>
                
                <div><b>About me:</b> {profile.aboutMe}</div>
            </div>  
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) =>{
    return <div><b>{contactTitle}:</b>{contactValue}</div>
}
export default Profile