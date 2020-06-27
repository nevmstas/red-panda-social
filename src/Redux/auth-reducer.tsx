import {authApi} from '../api/api'

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA'

// export type initialStateType = {
//     userId: number | null,
//     email:string | null,
//     login:string | null,
//     isAuth:boolean
// }

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean
}

type initialStateType = typeof initialState

export const authReducer = (state = initialState, action: any): initialStateType =>{
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

type setAuthUserDataTypePayload = {
    userId:number|null
    email:string|null
    login:string|null
    isAuth:Boolean
}

type setAuthUserDataType ={
    type: typeof SET_AUTH_USER_DATA,
    payload: setAuthUserDataTypePayload
}

export const setAuthUserData = (userId:number|null, email:string|null, login:string|null, isAuth:boolean): setAuthUserDataType  =>({

    type:SET_AUTH_USER_DATA,
    payload:{
        userId,
        email,
        login,
        isAuth
    }
})


export const getAuthUserData = () => async (dispatch:any) => {
    const response = await authApi.me()
    if(response.data.resultCode === 0){
            
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}


export const login = (email:string , password:string, rememberMe:boolean) => async (dispatch:any) => {
    const response = await authApi.login( email, password, rememberMe)
        
    if(response.data.resultCode === 0){
        dispatch(getAuthUserData())
    }
}

export const logout = () => async (dispatch:any) => {   
    const response = await authApi.logout()
    dispatch(setAuthUserData(null, null, null, false))
}

