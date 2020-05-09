import React from 'react'
import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs =(props) =>{



    let dialogElements = props.state.dialogs.map((dialog) => {
        return <Dialog id={dialog.id} name = {dialog.name} />
    })

    let messageElements = props.state.messages.map((message) =>{
        return <Message id={message.id} text ={message.text} />
    })
    
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messagesItems}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs