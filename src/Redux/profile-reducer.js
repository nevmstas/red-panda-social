import {usersApi, profileApi} from './../api/api'
import { act } from 'react-dom/test-utils'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const UPDATE_NEW_STATUS_TEXT = 'UPDATE-NEW-STATUS-TEXT' 
const SET_STATUS = 'SET-STATUS'
const SET_PHOTO_SUCCESS = 'SET-PHOTO-SUCCESS'

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
        case SET_PHOTO_SUCCESS:
            return{
                ...state,
                profile: {...state.profile, photos: action.photos}
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


export const savePhotoSuccess = (photos)=>({
    type: SET_PHOTO_SUCCESS,
    photos
})

export const getStatus = (userId) => async (dispatch)=> {
    const response = await profileApi.getStatus(userId)   
    dispatch(setStatus(response.data))
}

export const savePhoto = (file) => async(dispatch)=>{
     const response = await profileApi.savePhoto(file)
     if(response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos))
     } 
}

export const saveProfile = (profile) => async(dispatch)=>{
    debugger
    const response = await profileApi.saveProfile(profile)
    if(response.data.resultCode === 0){
       //dispatch(setUserProfile(response))
    } 
}

export const updateStatus = (status) => async (dispatch)=> {
    const response = await profileApi.updateStatus(status)

    if(response.data.resultCode === 0){
        dispatch(setStatus(status))
    }
}

export const getProfile = (userId) => async (dispatch)=> {
    const data = await usersApi.getUserProfile(userId)
    dispatch(setUserProfile(data))
}



