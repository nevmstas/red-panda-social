import {authApi} from './../api/api'

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA'

let initialState = {
    userId:null,
    email:null,
    login:null,
    isAuth:false
}

export const authReducer = (state = initialState, action) =>{
    debugger;
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


export const getAuthUserData = () => (dispatch) => {
    return authApi.me().then(response => {
        debugger
        if(response.data.resultCode === 0){
            
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authApi.login( email, password, rememberMe ).then(response => {
        if(response.data.resultCode === 0){
            dispatch(getAuthUserData())
        }
    })
}

export const logout = () => (dispatch) => {
    authApi.logout().then(response => {
        dispatch(setAuthUserData(null, null, null, false))
    })
}

