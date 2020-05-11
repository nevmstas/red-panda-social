const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const dialogReducer = (state, action) =>{
    
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            break;
        case SEND_MESSAGE:
            let newMessage ={
                id:5,
                text: state.newMessageText           
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            break;
        default:
            break;
    }
    
    return state;
}

export const sendMessageCreator = () =>{
    return{
        type:SEND_MESSAGE
    }
}

export const updateNewMessageCreator = (text) =>{
    return{
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText:text
    }
}