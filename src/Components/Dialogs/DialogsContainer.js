import React from 'react'
import s from './Dialogs.module.css'
import Dialogs from './Dialogs'
import Message from './Message/Message'
import {sendMessageCreator, updateNewMessageCreator} from '../../Redux/dialogs-reducer'

const DialogsContainer =(props) =>{
    
    let state = props.store.getState().messagesPage

    let onSendMessage = () =>{
        props.store.dispatch(sendMessageCreator())
    }
    let onChangeMessageText = (text) =>{
        props.store.dispatch(updateNewMessageCreator(text))
    }

    return(
        <Dialogs onChangeMessageText = {onChangeMessageText} 
                onSendMessage = {onSendMessage} 
                dialogs ={state.dialogs} 
                messages = {state.messages}/>
    )
}

export default DialogsContainer