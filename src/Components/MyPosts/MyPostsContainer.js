import MyPosts from './MyPosts'
import {connect} from 'react-redux'

import {addPost, onPostChange} from '../../Redux/mypost-reducer'
import { compose } from 'redux'

let mapStateToProps = (state) =>{  
    return {
        posts: state.PostPage.posts,
    }
}
  
export default compose(
    connect(mapStateToProps, {
        addPost,
    })
    )(MyPosts)