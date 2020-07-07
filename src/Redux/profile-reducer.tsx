import {usersApi, profileApi} from './../api/api'
import { act } from 'react-dom/test-utils'
export const SET_USER_PROFILE = 'SET-USER-PROFILE'
export const UPDATE_NEW_STATUS_TEXT = 'UPDATE-NEW-STATUS-TEXT' 
export const SET_STATUS = 'SET-STATUS'
export const SET_PHOTO_SUCCESS = 'SET-PHOTO-SUCCESS'


type ContactsType = {
    github:string
    vk:string
    facebook:string
    instagram:string 
    twitter:string
    youtube:string
    mainLink:string
}
type PhotosType ={
    small:string|null
    large:string|null
}
type ProfileType = {
    userId:number
    lookingForAJob:boolean
    lookingForAJobDescription:string
    fullName:string
    Contacts:ContactsType
    photos:PhotosType
}

type InitialStateType = {
    profile:ProfileType|null
    status:string
    newStatusText:string

}

let initialState : InitialStateType = {
    profile: null,
    status: '',
    newStatusText:''
}



export const profileReducer = (state = initialState, action:any) :InitialStateType=>{
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
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        default:
            return state
    }
}


type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile:ProfileType) :SetUserProfileType=> ({
    type: SET_USER_PROFILE,
    profile
})

type SetStatusType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status:string) : SetStatusType=>({
    type:SET_STATUS,
    status
})

type SavePhotoSuccessType = {
    type: typeof SET_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType) : SavePhotoSuccessType=>({
    type: SET_PHOTO_SUCCESS,
    photos
})

export const getStatus = (userId:number) => async (dispatch:any)=> {
    const response = await profileApi.getStatus(userId)   
    dispatch(setStatus(response.data))
}

export const savePhoto = (file:string) => async(dispatch:any)=>{
     const response = await profileApi.savePhoto(file)
     if(response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos))
     } 
}

export const saveProfile = (profile:ProfileType) => async(dispatch:any, getState:any)=>{
    const userId  = getState().auth.userId
    const response = await profileApi.saveProfile(profile)
    if(response.data.resultCode === 0){
       dispatch(getProfile(userId))
    } 
}

export const updateStatus = (status:string) => async (dispatch:any)=> {
    const response = await profileApi.updateStatus(status)

    if(response.data.resultCode === 0){
        dispatch(setStatus(status))
    }
}

export const getProfile = (userId:number) => async (dispatch:any)=> {
    const data = await usersApi.getUserProfile(userId)
    dispatch(setUserProfile(data))
}



