import React from 'react'
import { useFormik } from 'formik'

export const ProfileInfoForm = ({deactiveteEditMode, saveProfile, profile}) =>{  
    const formik = useFormik({
        initialValues:{
            
            fullName: profile.fullName,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            aboutMe:profile.aboutMe,
            
            contacts:{
                github: profile.contacts.github,
                facebook: profile.contacts.facebook,
                instagram: profile.contacts.instagram,
                twitter: profile.contacts.twitter,
            }
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
                <label htmlFor='github'>Github</label>
                <input id ='github' 
                       name='contacts.github'
                       type='text'
                       onChange={formik.handleChange}
                       value={formik.values.github} />
            </div>

            <div>
                <label htmlFor='facebook'>Facebook</label>
                <input id ='facebook' 
                       name='contacts.facebook'
                       type='text'
                       onChange={formik.handleChange}
                       value={formik.values.facebook} />
            </div>

            <div>
                <button type='submit'> Save </button>
            </div>
        </form>
    )
}