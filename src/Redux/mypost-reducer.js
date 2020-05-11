const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id:1, text: 'Post 1', likes: 1},
        {id:2, text: 'Post 2', likes: 2},
        {id:3, text: 'Post 3', likes: 4},
        {id:4, text: 'Post 4', likes: 2}
    ],
    newPostText: ''
}

export const myPostReducer = (state = initialState, action) =>{  
    switch (action.type) {
        case ADD_POST:
            if(state.newPostText!==''){
                let newPost={
                    id:5,
                    text: state.newPostText,
                    likes:0
                }
                state.posts.push(newPost);
                state.newPostText ='';
    
            }
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break
        default:
            break;
    }
    
    return state;
}

export const addPostActionCreator =()=>{
    return {
        type:ADD_POST
    }
}

export const onPostChangeActionCreator =(text)=>{
    return{
        type:UPDATE_NEW_POST_TEXT,
        newText:text
    }
}