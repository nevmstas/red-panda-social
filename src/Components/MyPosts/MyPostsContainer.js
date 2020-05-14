import MyPosts from './MyPosts'
import {connect} from 'react-redux'

import {addPostActionCreator, onPostChangeActionCreator} from '../../Redux/mypost-reducer'

let mapStateToProps = (state) =>{  
    return {
        posts: state.PostPage.posts,
        newPostText: state.PostPage.newPostText
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addPost:()=>{
            dispatch(addPostActionCreator())
        },
        onPostChange: (text) => {
            dispatch(onPostChangeActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer