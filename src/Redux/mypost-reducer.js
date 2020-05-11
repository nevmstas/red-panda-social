const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const myPostReducer = (state, action) =>{  
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