import React from 'react'
import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs =(props) =>{
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog />
                <Dialog />
                <Dialog />
            </div>
            <div className={s.messagesItems}>
                <Message />
            </div>
        </div>
    )
}

export default Dialogs