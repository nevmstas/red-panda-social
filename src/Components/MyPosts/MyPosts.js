import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'

const MyPosts = (props) =>{

    let postElements = props.posts.map((post) => <Post message = {post.text}/> )
    
    let addPost = () =>{         
        props.addPost()      
    }

    let onPostChange = (e) =>{  
        props.onPostChange(e.target.value)      
    }

    return(
            <div className={s.postArea}>

                <div className={s.title}>My Posts</div>
                <input placeholder={'Type smth...'} 
                        className={s.newPostAreaInput}
                        onChange ={onPostChange}
                        value = {props.newPostText}></input>
                {/* <textarea placeholder={'Type smth...'} className={s.newPostAreaInput}></textarea> */}
                <button className={s.sendBtn} onClick={addPost}>Send</button>
            
                {postElements}
   
            </div>
    )
}

export default MyPosts