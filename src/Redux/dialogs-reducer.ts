import { AnyAction } from "redux"

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

type DialogType = {
    id:number
    name:string
}
type MessageType = {
    id:number
    text:string
}
interface InitialStateType {
    dialogs:Array<DialogType>
    messages:Array<MessageType>
    newMessageText:string
}

let initialState: InitialStateType= {
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

type initialStateType = typeof initialState

export const dialogReducer = (state = initialState, action: AnyAction): initialStateType =>{


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

type sendMessageCreator = {
    type: typeof SEND_MESSAGE
    message: string 
}

export const sendMessageCreator = (message:string): sendMessageCreator =>{
    return{
        type: SEND_MESSAGE,
        message
    }
}

type UpdateNewMessageCreator = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT
    newText: string
}
export const updateNewMessageCreator = (text: string ): UpdateNewMessageCreator =>{
    return{
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText:text
    }
}