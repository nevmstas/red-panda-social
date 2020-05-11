import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'

import {addPostActionCreator, onPostChangeActionCreator} from '../../Redux/mypost-reducer'

const MyPosts = (props) =>{
    debugger;
    let postElements = props.PostPage.posts.map((post) => <Post message = {post.text}/> )
    
    let newPostElement = React.createRef();
    
    function addPost() {         
        props.dispatch(addPostActionCreator())      
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;     
        props.dispatch(onPostChangeActionCreator(text))
    }

    return(
            <div className={s.postArea}>

                <div className={s.title}>My Posts</div>
                <input ref={newPostElement} 
                        placeholder={'Type smth...'} 
                        className={s.newPostAreaInput}
                        onChange ={onPostChange}
                        value = {props.PostPage.newPostText}></input>
                {/* <textarea placeholder={'Type smth...'} className={s.newPostAreaInput}></textarea> */}
                <button className={s.sendBtn} onClick={addPost}>Send</button>
            
                {postElements}
   
            </div>
    )
}

export default MyPosts