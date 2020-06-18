import React from 'react'

export const ProfileInfo = ({profile}) =>{
    return (
        <>
        <div><b>Looking for a job:</b> {profile.lookingForAJob? 'Yes': 'No'}</div>
        
        {profile.lookingForAJob && 
            <div>
                <b>My professional skills:</b> {profile.lookingForAJobDescription}    
            </div>}
            <div><b>About me:</b> {profile.aboutMe}</div>
            <div>
                <b>Contacts: </b>{ Object.keys(profile.contacts).map(key =>{
                    if(profile.contacts[key]!=null) return <Contact key={key} contactTitle = {key} contactValue={profile.contacts[key]} />
                })}
            </div>
        </>
    )
}

const Contact = ({contactTitle, contactValue}) =>{
    return <div><b>{contactTitle}:</b>{contactValue}</div>
}