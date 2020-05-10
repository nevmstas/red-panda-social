import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'

const MyPosts = (props) =>{
    
    let postElements = props.PostPage.posts.map((post) => <Post message = {post.text}/> )
    
    let newPostElement = React.createRef();
    
    function addPost() {         
        props.dispatch({type:'ADD-POST'})      
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;     
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
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