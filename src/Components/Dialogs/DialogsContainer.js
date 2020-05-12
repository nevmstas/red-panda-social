import React from 'react'
import Dialogs from './Dialogs'
import {sendMessageCreator, updateNewMessageCreator} from '../../Redux/dialogs-reducer'

import {connect} from 'react-redux'

const mapStateToProps = (state) =>{
    return{
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onSendMessage: () =>{
            dispatch(sendMessageCreator())
        },
        onChangeMessageText: (text)=>{
            dispatch(updateNewMessageCreator(text))
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)



export default DialogsContainer