import React from 'react'
import Dialogs from './Dialogs'
import {sendMessageCreator, updateNewMessageCreator} from '../../Redux/dialogs-reducer'
import StoreContext from '../../StoreContext'

const DialogsContainer =(props) =>{
    
    

    return(
        <StoreContext.Consumer>
            {(store)=>{
                
                let state = store.getState().messagesPage

                let onSendMessage = () =>{
                    store.dispatch(sendMessageCreator())
                }
                let onChangeMessageText = (text) =>{
                    store.dispatch(updateNewMessageCreator(text))
                }

                return  <Dialogs onChangeMessageText = {onChangeMessageText} 
                    onSendMessage = {onSendMessage} 
                    dialogs ={state.dialogs} 
                    messages = {state.messages}/>
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer