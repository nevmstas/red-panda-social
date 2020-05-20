import React from 'react'
import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

import {Redirect}from 'react-router-dom'


const Dialogs =(props) =>{

    let dialogElements = props.dialogs.map((dialog) => {
        return <Dialog id={dialog.id} name = {dialog.name} />
    })

    let messageElements = props.messages.map((message) =>{
        return <Message id={message.id} text ={message.text} />
    })
    
    let onSendMessageClick = () =>{
        props.onSendMessage()
    }
    let onChangeMessageText = (e) =>{
        props.onChangeMessageText(e.target.value)
    }
    if(!props.isAuth){
        return <Redirect to='/login'/>
    }
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messagesItems}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea placeholder='Enter your message...'
                                    onChange={onChangeMessageText}
                                    value={props.newMessageText}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs