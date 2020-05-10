
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let store = {
    _state: {
    
        PostPage:{
            posts: [
                {id:1, text: 'Post 1', likes: 1},
                {id:2, text: 'Post 2', likes: 2},
                {id:3, text: 'Post 3', likes: 4},
                {id:4, text: 'Post 4', likes: 2}
            ],
            newPostText: ''
        },
               
        messagesPage:{
            dialogs: [
                {id:1, name: 'Rick'},
                {id:2, name: 'Summer'},
                {id:3, name: 'Bethany'},
                {id:4, name: 'Jerry'},
            ],
            messages: [
                {id:1, text:'Hi'},
                {id:2, text:'Hello'},
                {id:3, text:'How are u doing?'},
                {id:4, text:'I am doing well, what about u?'}
            ]
        }
    },

    _rerenderEntireTree(){

    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._rerenderEntireTree = observer;
    },

    _addPost() {
        if(this._state.PostPage.newPostText!==''){
            let newPost={
                id:5,
                text: this._state.PostPage.newPostText,
                likes:0
            }
            this._state.PostPage.posts.push(newPost);
            this._state.PostPage.newPostText ='';
            this._rerenderEntireTree(this._state);
        }
    },
    _updateNewPostText(newText){
        this._state.PostPage.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },

    dispatch(action){
        debugger;
        if(action.type === 'ADD-POST'){
            this._addPost() 
        }else if(action.type === UPDATE_NEW_POST_TEXT){
            this._updateNewPostText(action.newText)
        }
    }
    
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


export default store