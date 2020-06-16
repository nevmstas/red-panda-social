import React, { useState } from 'react'
import s from './../Profile.module.css'

export const Status = (props) =>{
    const [isEditMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)


    let activateEditMode = () =>{
        setEditMode(true) 
    }

    let deactivateEditMode = () =>{
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!isEditMode ? 
            <div onClick = {activateEditMode}><b>Status: </b>{props.status || "non status"}</div> : 
            <div><input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}></input></div>}  
        </div>
    )   
}
