import React from 'react'
import Dialogs from './Dialogs'
import {sendMessageCreator, updateNewMessageCreator} from '../../Redux/dialogs-reducer'

import {connect} from 'react-redux'

// const DialogsContainer =(props) =>{
//     return(
//         <StoreContext.Consumer>
//             {(store)=>{
                
//                 let state = store.getState().messagesPage

//                 let onSendMessage = () =>{
//                     store.dispatch(sendMessageCreator())
//                 }
//                 let onChangeMessageText = (text) =>{
//                     store.dispatch(updateNewMessageCreator(text))
//                 }

//                 return  <Dialogs onChangeMessageText = {onChangeMessageText} 
//                     onSendMessage = {onSendMessage} 
//                     dialogs ={state.dialogs} 
//                     messages = {state.messages}/>
//             }}
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) =>{
    return{
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages
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