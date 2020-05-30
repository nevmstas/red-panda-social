const ADD_POST = 'ADD-POST'

let initialState = {
    posts: [
        {id:1, text: 'Post 1', likes: 1},
        {id:2, text: 'Post 2', likes: 2},
        {id:3, text: 'Post 3', likes: 4},
        {id:4, text: 'Post 4', likes: 2}
    ]
}

export const myPostReducer = (state = initialState, action) =>{  

    switch (action.type) {
        case ADD_POST:{
                let newPost = {
                    id:5,
                    text: action.post,
                    likes:0
                }          
                return {
                    ...state,
                    posts: [...state.posts, newPost],

                }        
        }
        default:
            return state
    }
}

export const addPost =(post)=>{
    return {
        type:ADD_POST,
        post
    }
}
