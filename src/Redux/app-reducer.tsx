import { getAuthUserData } from "./auth-reducer"

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'


export type initialStateType ={
    initialized: boolean
}

const initialState: initialStateType = {
    initialized:false
}

export const appReducer  = (state = initialState, action: initializedSuccess) : initialStateType=>{
    switch(action.type){
        case INITIALIZED_SUCCESS:
            return{
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export type initializedSuccess = {
    type: typeof INITIALIZED_SUCCESS
}

const initializedSuccess = (): initializedSuccess => ({
    type: INITIALIZED_SUCCESS
})


export const initializeApp = () => (dispatch: any) =>{
    const promise = dispatch(getAuthUserData())
    
    Promise.all([promise]).then(()=>{
        dispatch(initializedSuccess)
    })
}
