import { createStore, combineReducers, applyMiddleware } from "redux";
import {myPostReducer} from './mypost-reducer'
import {dialogReducer} from './dialogs-reducer'
import {sidebarReducer} from './sidebar-reducer'
import {usersReducer} from './users-reducer'
import {profileReducer} from './profile-reducer'
import {authReducer} from './auth-reducer'

import {appReducer} from './app-reducer'
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
    PostPage: myPostReducer,
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

//type RootReducerType = typeof rootReducer

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

window.store = store

export default store