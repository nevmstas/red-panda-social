import React from 'react'
import MyPosts from './MyPosts'

import {addPostActionCreator, onPostChangeActionCreator} from '../../Redux/mypost-reducer'
import StoreContext from '../../StoreContext'

const MyPostsContainer = (props) =>{
    
    

    return(
            <StoreContext.Consumer>
                {(store) => {
                    let state = store.getState()

                    function addPost() {         
                        store.dispatch(addPostActionCreator())      
                    }

                    let onPostChange = (text) =>{   
                        store.dispatch(onPostChangeActionCreator(text))
                    }
                    
                    return <MyPosts onPostChange = {onPostChange} addPost={addPost} posts = {state.PostPage.posts} newPostText ={state.PostPage.newPostText}/>               
                }
                }
            </StoreContext.Consumer>
    )
}

export default MyPostsContainer