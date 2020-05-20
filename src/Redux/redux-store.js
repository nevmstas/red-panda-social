import { createStore, combineReducers, applyMiddleware } from "redux";
import {myPostReducer} from './mypost-reducer'
import {dialogReducer} from './dialogs-reducer'
import {sidebarReducer} from './sidebar-reducer'
import {usersReducer} from './users-reducer'
import {profileReducer} from './profile-reducer'
import {authReducer} from './auth-reducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    PostPage: myPostReducer,
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store