const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {id:1, name: 'Rick'},
        {id:2, name: 'Summer'},
        {id:3, name: 'Bethany'},
        {id:4, name: 'Jerry'},
    ],
    messages: [
        {id:1, text:'Hi'},
        {id:2, text:'Hello'},
        {id:3, text:'How are u doing?'},
        {id:4, text:'I am doing well, what about u?'}
    ],
    newMessageText:''           
}

export const dialogReducer = (state = initialState, action) =>{
    
    switch (action.type) {
        case SEND_MESSAGE:{
            let newMessage ={
                id:5,
                text: state.newMessageText           
            }
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMessage)
            stateCopy.newMessageText = ''
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
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