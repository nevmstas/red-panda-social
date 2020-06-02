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
        debugger
        return{
                ...state,
                ...action.payload,
                isAuth: action.payload.isAuth
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
    authApi.me().then(response => {
        if(response.data.resultCode === 0){
            
            let {Id, email, login} = response.data.data
            dispatch(setAuthUserData(Id, email, login, true))
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

