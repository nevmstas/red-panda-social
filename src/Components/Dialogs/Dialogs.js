import React from 'react'
import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import {sendMessageCreator, updateNewMessageCreator} from '../../Redux/dialogs-reducer'

const Dialogs =(props) =>{

    let dialogElements = props.state.dialogs.map((dialog) => {
        return <Dialog id={dialog.id} name = {dialog.name} />
    })

    let messageElements = props.state.messages.map((message) =>{
        return <Message id={message.id} text ={message.text} />
    })
    
    let onSendMessageClick = () =>{
        props.dispatch(sendMessageCreator())
    }
    let onChangeMessageText = (e) =>{
        props.dispatch(updateNewMessageCreator(e.target.value))
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
                                    onChange={onChangeMessageText}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs