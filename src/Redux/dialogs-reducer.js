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
            let body = action.message
            return {
                ...state,
                newMessageText:'',
                messages: [...state.messages, {id:5, text:body }]
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT:{
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default:
            return state
    }
}

export const sendMessageCreator = (message) =>{
    return{
        type:SEND_MESSAGE,
        message
    }
}

export const updateNewMessageCreator = (text) =>{
    return{
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText:text
    }
}