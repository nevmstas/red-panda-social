import { createStore, combineReducers } from "redux";
import {myPostReducer} from './mypost-reducer'
import {dialogReducer} from './dialogs-reducer'
import {sidebarReducer} from './sidebar-reducer'
import {usersReducer} from './users-reducer'
import {profileReducer} from './profile-reducer'
import {authReducer} from './auth-reducer'

let reducers = combineReducers({
    PostPage: myPostReducer,
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers)

window.store = store

export default store