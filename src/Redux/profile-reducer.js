import {usersApi} from './../api/api'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    profile: null
}

export const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }  
        default:
            return state
    }
}

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})


export const getProfile = (userId) => {
    return (dispatch) => {
        usersApi.getUserProfile(userId).then(data => {
                dispatch(setUserProfile(data))
            })
    }
}


