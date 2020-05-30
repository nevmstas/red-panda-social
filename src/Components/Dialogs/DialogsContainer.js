
import Dialogs from './Dialogs'
import {sendMessageCreator, updateNewMessageCreator} from '../../Redux/dialogs-reducer'
import {withAuthRedirect} from './../../hoc/withAuthRedirect'

import {connect} from 'react-redux'
import { compose } from 'redux'

const mapStateToProps = (state) =>{
    return{
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onSendMessage: (message) =>{
            dispatch(sendMessageCreator(message))
        },
        onChangeMessageText: (text)=>{
            dispatch(updateNewMessageCreator(text))
        }
    }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)