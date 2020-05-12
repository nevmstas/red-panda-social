import React from 'react'
import Post from './Post/Post'
import MyPosts from './MyPosts'
import s from './MyPosts.module.css'

import {addPostActionCreator, onPostChangeActionCreator} from '../../Redux/mypost-reducer'

const MyPostsContainer = (props) =>{
    
    let state = props.store.getState()

    function addPost() {         
        props.store.dispatch(addPostActionCreator())      
    }

    let onPostChange = (text) =>{   
        props.store.dispatch(onPostChangeActionCreator(text))
    }

    return(
            <MyPosts onPostChange = {onPostChange} addPost={addPost} posts = {state.PostPage.posts} newPostText ={state.PostPage.newPostText}/>
    )
}

export default MyPostsContainer