import { createStore, combineReducers } from "redux";
import {myPostReducer} from './mypost-reducer'
import {dialogReducer} from './dialogs-reducer'
import {sidebarReducer} from './sidebar-reducer'
import {usersReducer} from './users-reducer'

let reducers = combineReducers({
    PostPage: myPostReducer,
    messagesPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)

export default store