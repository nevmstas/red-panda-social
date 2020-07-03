import { PhotosType, UsersType } from './../types/types';
import {usersApi} from './../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'



let initialState : InitialStateType= {
    users: [],
    pageSize: 5,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false,
    portionSize: 10,
    followingInProgress: []
}

type InitialStateType ={
    users: Array<UsersType>
    pageSize:number
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    portionSize: number,
    followingInProgress: Array<number>
}

export const usersReducer = (state = initialState, action: any): InitialStateType=>{
    switch (action.type) {
        case FOLLOW:   
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:{
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE:{
            return{
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT:{
            return{
                ...state,
                totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING:{
            return{
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS:{
            return{
                ...state,
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId ]
                : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}
type FollowType ={
    type: typeof FOLLOW
    userId: number
}
export const followOk = (userId: number): FollowType =>{
    return {
        type: FOLLOW,
        userId
    }
}

type UnFollowType ={
    type: typeof UNFOLLOW
    userId: number
}
export const unFollowOk = (userId: number):UnFollowType =>{
    return{
        type: UNFOLLOW,
        userId
    }
}
type SetUsersType ={
    type: typeof SET_USERS
    users: Array<UsersType>
}
export const setUsers = (users: Array<UsersType>): SetUsersType=> {
    return{
        type: SET_USERS,
        users
    }
}
type SetCurrentPageType ={
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType=> {
    return{
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

type SetTotalUsersСountType ={
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}
export const setTotalUsersСount = (totalUsersCount: number): SetTotalUsersСountType=>{ 
    debugger
    return{
        type: SET_TOTAL_USERS_COUNT,
        count:totalUsersCount
    }
}
type ToggleIsFetchingType ={
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export const toggleIsFetching = (isFetching:boolean): ToggleIsFetchingType =>{
    return{
        type: TOGGLE_IS_FETCHING,      
        isFetching
    }
}
type ToggleFollowingProgressType ={
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

export const toggleFollowingProgress = (isFetching:boolean, userId: number) : ToggleFollowingProgressType=>{
    return{
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
}

export const getUsers =(currentPage: number, pageSize: number)=> async (dispatch:any)=>{
    dispatch(toggleIsFetching(true))
    const data =  await usersApi.getUsers(currentPage, pageSize)
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersСount(data.totalCount))
    dispatch(toggleIsFetching(false))
}

export const followUnfollowFlow = async(dispatch:any, userId: number, apiMethod:any, actionCreator:any) =>{

        dispatch(toggleFollowingProgress(true, userId))
        const data = await apiMethod(userId)
            if( data.resultCode === 0 ){
                dispatch(actionCreator(userId))
                dispatch(toggleFollowingProgress(false, userId))
            }

} 

export const follow = (userId: number) => async (dispatch:any) => {
    const apiMethod = usersApi.followUser.bind(usersApi)
    followUnfollowFlow(dispatch, userId, apiMethod, followOk)
}



export const unFollow = (userId: number) => async (dispatch:any)=> {
    const apiMethod = usersApi.unFollowUser.bind(usersApi)  
    followUnfollowFlow(dispatch, userId, apiMethod, unFollowOk)
}


// export const follow = (userId) => async (dispatch) => {

//         dispatch(toggleFollowingProgress(true, userId))
//         const data = await usersApi.followUser(userId)
//             if( data.resultCode === 0 ){
//                 dispatch(followOk(userId))
//                 dispatch(toggleFollowingProgress(false, userId))
//             }
//     }



// export const unFollow = (userId) => async (dispatch)=> {
    
//         dispatch(toggleFollowingProgress(true, userId))
//         const data = await usersApi.unFollowUser(userId)
//             if( data.resultCode === 0 ){
//                 dispatch(unFollowOk(userId))
//                 dispatch(toggleFollowingProgress(false, userId))
//             }
// }


