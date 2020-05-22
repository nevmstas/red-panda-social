import React, { useState } from 'react'
import s from './../Profile.module.css'

export const Status = (props) =>{
    const [isEditMode, setEditMode] = useState(false)


    let activateEditMode = () =>{
        setEditMode(true) 
    }

    let deactivateEditMode = () =>{
        setEditMode(false)
    }
    return (
        <div>
            {!isEditMode ? <div onClick = {activateEditMode}>{props.status}</div> : <div><input autoFocus={true} onBlur={deactivateEditMode} value="kek"></input></div>}  
        </div>
    )
    
}
