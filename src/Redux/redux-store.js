import { createStore, combineReducers } from "redux";
import {myPostReducer} from './mypost-reducer'
import {dialogReducer} from './dialogs-reducer'
import {sidebarReducer} from './sidebar-reducer'

let reducers = combineReducers({
    PostPage: myPostReducer,
    messagesPage: dialogReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducers)

export default store