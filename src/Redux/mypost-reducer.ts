import { postApi } from "../api/api"

export const ADD_POST = 'ADD-POST'
export const REQUEST_POSTS = 'POST/REQUEST_POSTS'
export const SET_FETCHED_POSTS = 'POST/SET_FETCHED_POSTS'

const ADD_FETCHED_POST = 'ADD_FETCHED_POST'

type PostType = {
    id:number
    text:string
    likes:number
}

type FetchedPost = {
    userId: number 
    id: number 
    title: string
    body: string
}

interface initialStateType {
    posts:Array<PostType>
    fetchedPosts:Array<FetchedPost>
}

let initialState: initialStateType = {
    posts: [
        {id:1, text: 'Post 1', likes: 1},
        {id:2, text: 'Post 2', likes: 2},
        {id:3, text: 'Post 3', likes: 4},
        {id:4, text: 'Post 4', likes: 2}
    ],
    fetchedPosts: [
        { userId: 1, id: 2, title: 'Title', body: 'post body' }
    ]
}

export const myPostReducer = (state = initialState, action:any): initialStateType =>{  
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
                fetchedPosts: action.payload
            }
        case  ADD_FETCHED_POST:
            debugger
            return{
                ...state,
                fetchedPosts: [...state.fetchedPosts, action.payload]
            }
        default:
            return state
    }
}
type addPostActionType = {
    type: typeof ADD_POST
    post: PostType
}
export const addPost =(post:PostType): addPostActionType=>{
    return {
        type:ADD_POST,
        post
    }
}

type SetFetchedPostsType = {
    type: typeof SET_FETCHED_POSTS
    payload: FetchedPost
}
export const setFetchedPosts = (posts: FetchedPost) : SetFetchedPostsType=>{
    return {
        type: SET_FETCHED_POSTS,
        payload: posts
    }
}

type AddFetchedPostsSuccessType = {
    type: typeof ADD_FETCHED_POST
    payload: FetchedPost
}
export const addFetchedPostsSuccess = (post: FetchedPost) :AddFetchedPostsSuccessType =>{
    return {
        type: ADD_FETCHED_POST,
        payload: post
    }
}

export const getFetchedPosts = () => async (dispatch:any)=>{
    const data = await postApi.getPosts()
    console.log(data)
    dispatch(setFetchedPosts(data))
}

export const addFetchedPost = (text:string) => async (dispatch:any) =>{ 
    const newPost = await postApi.addPost(text)
    debugger
    dispatch(addFetchedPostsSuccess(newPost))
    
    dispatch(getFetchedPosts)
}
