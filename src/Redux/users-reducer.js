const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
    users: [
        {id: 1, photoUrl:'https://www.meme-arsenal.com/memes/1bee5fff6ec065a98aeba724f8d876a7.jpg', followed: false, fullName:'Stas',status:'kek', location:{city: 'Bishkek', country: 'Kyrgyzstan'}},
        {id: 2, photoUrl:'https://proprikol.ru/wp-content/uploads/2019/10/kartinki-bart-simpson-2.jpg', followed: true, fullName:'Sergey',status:'lulw', location:{city: 'Tokmok', country: 'Kyrgyzstan'}},
        {id: 3, photoUrl:'https://i.pinimg.com/236x/74/a4/cd/74a4cdf1162be300cc7f1168bda75ec0.jpg', followed: true, fullName:'Shukhrat',status:'kekw', location:{city: 'Almata', country: 'Kazahstan'}},
    ]
    
}

export const usersReducer = (state = initialState, action) =>{
    switch (action.type) {
        case FOLLOW:
        debugger    
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
                users: [...state.users, ...action.users]
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