import React from 'react'

// type ContactsType = {
//     github: string|null
//     vk:string|null
//     facebook: string|null
//     instagram: string|null
//     twitter: string|null
//     website: string|null
//     youtube: string|null
//     mainLink: string|null
// }
// type Profile ={
//     userId:number
//     lookingForAJob: boolean|null
//     lookingForAJobDescription:string|null
//     fullName:string
//     contacts: ContactsType
// }
// type ProfileInfoType = {
//     profile:Profile
// }

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