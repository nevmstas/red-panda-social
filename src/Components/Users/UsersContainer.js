import {connect} from 'react-redux'
import Users from './Users'
import {unFollowAC, followAC, setUsersAC} from '../../Redux/users-reducer'


let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users) 
