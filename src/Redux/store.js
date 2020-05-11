import {dialogReducer} from './dialogs-reducer'
import {myPostReducer} from './mypost-reducer'
import {sidebarReducer} from './sidebar-reducer'

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
            ],
            newMessageText:''           
        
        },
        sidebar:{}
    },

    _rerenderEntireTree(){

    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._rerenderEntireTree = observer;
    },

    dispatch(action){
        this._state.PostPage = myPostReducer(this._state.PostPage, action)
        this._state.messagesPage = dialogReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._rerenderEntireTree(this._state);
    }
    
}






export default store