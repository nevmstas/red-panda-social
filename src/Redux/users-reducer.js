const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false
}

export const usersReducer = (state = initialState, action) =>{
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
        default:
            return state
    }
}

export const follow = (userId) =>{
    return {
        type: FOLLOW,
        userId
    }
}

export const unFollow = (userId) =>{
    return{
        type: UNFOLLOW,
        userId
    }
}

export const setUsers = (users) => {
    return{
        type: SET_USERS,
        users
    }
}

export const setCurrentPage = (currentPage)=> {
    return{
        type: SET_CURRENT_PAGE,
        currentPage
    }
}


export const setTotalUsersСount = (totalUsersCount)=>{ 
    debugger
    return{
        type: SET_TOTAL_USERS_COUNT,
        count:totalUsersCount
    }
}

export const toggleIsFetching = (isFetching) =>{
    return{
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}