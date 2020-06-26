import MyPosts from './MyPosts'
import {connect} from 'react-redux'

import {addPost, onPostChange, getFetchedPosts, setFetchedPosts, addFetchedPost} from '../../Redux/mypost-reducer'
import { compose } from 'redux'

let mapStateToProps = (state) =>{  
    return {
        posts: state.PostPage.posts,
        fetchedPosts: state.PostPage.fetchedPosts
    }
}
  
export default compose(
    connect(mapStateToProps, {
        addPost,
        getFetchedPosts,
        addFetchedPost
    })
    )(MyPosts)