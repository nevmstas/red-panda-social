import MyPosts from './MyPosts'
import {connect} from 'react-redux'

import {addPostActionCreator, onPostChangeActionCreator} from '../../Redux/mypost-reducer'
import { compose } from 'redux'

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
    )(MyPosts)