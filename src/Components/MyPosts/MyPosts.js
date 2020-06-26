import React, { useEffect } from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'
import {Formik, useFormik} from 'formik'

const MyPosts = (props) =>{

    useEffect(()=>{
        props.getFetchedPosts()
    }, [])

    //let postElements = props.posts.map((post) => <Post message = {post.text}/> )
    let postElements = props.fetchedPosts.map((post) => <Post message = {post.title}/> )
    
    return(
            <div className={s.postArea}>

                <div className={s.title}>My Posts</div>
                
                <InputPostForm addPost = {props.addPost} addFetchedPost = {props.addFetchedPost}/>
                {postElements}
   
            </div>
    )
}


const InputPostForm = (props) =>{
    
    const formik = useFormik({
        initialValues:{
            post: ''
        },
        onSubmit:values =>{
            props.addPost(values.post)
            props.addFetchedPost(values.post)
        }
    })
    
    return(
        <form onSubmit={formik.handleSubmit}>

            <input placeholder={'Type smth...'} 
                    className={s.newPostAreaInput}
                    id ='post'
                    name = 'post'
                    type = 'post'
                    onChange = {formik.handleChange}
                    value = {formik.values.post}
                    ></input>
                    {/* <textarea placeholder={'Type smth...'} className={s.newPostAreaInput}></textarea> */}
            <button className={s.sendBtn} type = 'submit'>Send</button>


            {/* <input placeholder={'Type smth...'} 
                            className={s.newPostAreaInput}
                            onChange ={onPostChange}
                            value = {props.newPostText}></input>
                    {/* <textarea placeholder={'Type smth...'} className={s.newPostAreaInput}></textarea> */}
            {/* <button className={s.sendBtn} onClick={addPost}>Send</button> */} 
        </form>
    )
}

export default MyPosts