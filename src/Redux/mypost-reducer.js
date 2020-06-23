import { postApi } from "../api/api"

const ADD_POST = 'ADD-POST'
const REQUEST_POSTS = 'POST/REQUEST_POSTS'
const SET_FETCHED_POSTS = 'POST/SET_FETCHED_POSTS'

let initialState = {
    posts: [
        {id:1, text: 'Post 1', likes: 1},
        {id:2, text: 'Post 2', likes: 2},
        {id:3, text: 'Post 3', likes: 4},
        {id:4, text: 'Post 4', likes: 2}
    ],
    fetchedPosts: []
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
        case SET_FETCHED_POSTS:
            return {
                ...state,
                fetchedPosts: [...state.fetchedPosts, action.payload]
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

export const setFetchedPosts = (posts) =>{
    debugger
    return {
        type: SET_FETCHED_POSTS,
        payload: posts
    }
}

export const getFetchedPosts = () => async (dispatch)=>{
    const data = postApi.getPosts()
    dispatch(setFetchedPosts(data))
}
