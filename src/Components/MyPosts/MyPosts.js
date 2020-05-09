import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'

const MyPosts = (props) =>{
    
    let postElements = props.posts.map((post) => <Post message = {post.text}/> )
    
    return(
            <div className={s.postArea}>

                <div className={s.title}>My Posts</div>
                <input placeholder={'Type smth...'} className={s.newPostAreaInput}></input>
                <button className={s.sendBtn}>Send</button>
            
                {postElements}
   
            </div>
    )
}

export default MyPosts