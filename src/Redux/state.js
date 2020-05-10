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
                {id:2, name: 'Samber'},
                {id:3, name: 'Mom'},
                {id:4, name: 'Father'},
            ],
            messages: [
                {id:1, text:'Hi'},
                {id:2, text:'Hello'},
                {id:3, text:'How are u doing?'},
                {id:4, text:'I am doing well, what about u?'}
            ]
        }
    },

    getState(){
        return this._state;
    },

    _rerenderEntireTree(){

    },

    addPost() {
        if(this._state.PostPage.newPostText!==''){
            let newPost={
                id:5,
                text: this._state.PostPage.newPostText,
                likes:0
            }
            this._state.PostPage.posts.push(newPost);
        }  
    },

    updateNewPostText(newText){
        this._state.PostPage.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },

    subscribe(observer){
        this._rerenderEntireTree = observer;
    }
}

export default store