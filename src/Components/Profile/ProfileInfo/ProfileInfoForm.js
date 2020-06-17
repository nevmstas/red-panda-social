import React from 'react'
import { useFormik } from 'formik'

export const ProfileInfoForm = () =>{  
    const formik = useFormik({
        initialValues:{
            skills: '',
            lookingForAJob: false,
            lookingForAJobDescription: '',
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: ''
        },
        onSubmit: values =>{
            
        }
    })
    return(
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor='skills'>Professional skills</label>
                <input id ='skills' 
                       name='skills'
                       type='text'
                       onChange={formik.handleChange}
                       value={formik.values.skills} />
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
        </form>
    )
}