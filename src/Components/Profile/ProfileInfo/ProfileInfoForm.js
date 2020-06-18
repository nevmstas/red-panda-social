import React from 'react'
import { useFormik } from 'formik'

export const ProfileInfoForm = ({deactiveteEditMode, saveProfile, profile}) =>{  
    const formik = useFormik({
        initialValues:{
            
            fullName: profile.fullName,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            aboutMe:profile.aboutMe
            
            // github: '',
            // vk: '',
            // facebook: '',
            // instagram: '',
            // twitter: '',
            // website: '',
            // youtube: '',
            // mainLink: ''
        },
        onSubmit: values =>{
            saveProfile(values)
            deactiveteEditMode()         
        }
    })
    return(
        <form onSubmit={formik.handleSubmit}>

            <div>
                <label htmlFor='fullName'>Full name</label>
                <input id ='fullName' 
                       name='fullName'
                       type='text'
                       onChange={formik.handleChange}
                       value={formik.values.fullName} />
            </div>

            <div>
                <input id ='lookingForAJob' 
                       name='lookingForAJob'
                       type='checkbox'
                       onChange={formik.handleChange}
                       value={formik.values.lookingForAJob} />Looking for a Job
            </div>

            <div>
                <label htmlFor='lookingForAJobDescription'>Show your skills</label>
                <input id ='lookingForAJobDescription' 
                       name='lookingForAJobDescription'
                       type='text'
                       onChange={formik.handleChange}
                       value={formik.values.lookingForAJobDescription} />
            </div>

            <div>
                <label htmlFor='aboutMe'>About me</label>
                <input id ='aboutMe' 
                       name='aboutMe'
                       type='text'
                       onChange={formik.handleChange}
                       value={formik.values.aboutMe} />
            </div>

            <div>
                <button type='submit'> Save </button>
            </div>
        </form>
    )
}