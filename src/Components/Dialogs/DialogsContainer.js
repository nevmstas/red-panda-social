
import Dialogs from './Dialogs'
import {sendMessageCreator, updateNewMessageCreator} from '../../Redux/dialogs-reducer'
import {withAuthRedirect} from './../../hoc/withAuthRedirect'

import {connect} from 'react-redux'

const mapStateToProps = (state) =>{
    return{
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText,
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


let AuthRedirectComponent = withAuthRedirect(Dialogs)


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)



export default DialogsContainer