import {usersApi, profileApi} from './../api/api'
import { act } from 'react-dom/test-utils'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const UPDATE_NEW_STATUS_TEXT = 'UPDATE-NEW-STATUS-TEXT' 
const SET_STATUS = 'SET-STATUS'

let initialState = {
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }  
        case UPDATE_NEW_STATUS_TEXT:
            return{
                ...state,
                newStatusText: action.text
            }
        case SET_STATUS:
            return{
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export const setStatus = (status) =>({
    type:SET_STATUS,
    status
})

export const getStatus = (userId) => (dispatch)=> {

    profileApi.getStatus(userId).then(response =>{
        dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status) => (dispatch)=> {

    profileApi.updateStatus(status).then(response =>{
        debugger
        if(response.data.resultCode === 0){
            dispatch(setStatus(status))
        }

    })
}



export const getProfile = (userId) => {
    return (dispatch) => {
        usersApi.getUserProfile(userId).then(data => {
                dispatch(setUserProfile(data))
            })
    }
}


