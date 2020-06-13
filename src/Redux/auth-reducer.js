import {authApi} from './../api/api'

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA'

let initialState = {
    userId:null,
    email:null,
    login:null,
    isAuth:false
}

export const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return{
                    ...state,
                    ...action.payload
                }
        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) =>({

    type:SET_AUTH_USER_DATA,
    payload:{
        userId,
        email,
        login,
        isAuth
    }
})


export const getAuthUserData = () => async (dispatch) => {
    const response = await authApi.me()
    if(response.data.resultCode === 0){
            
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}


export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authApi.login( email, password, rememberMe )
        
    if(response.data.resultCode === 0){
        dispatch(getAuthUserData())
    }
}

export const logout = () => async (dispatch) => {   
    const response = await authApi.logout()
    dispatch(setAuthUserData(null, null, null, false))
}

