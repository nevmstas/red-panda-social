import {connect} from 'react-redux'
import Users from './Users'
import {unFollow, follow, setUsers} from '../../Redux/users-reducer'


let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users
    }
}

export default connect(mapStateToProps,{
    follow,
    unFollow,
    setUsers,
})(Users) 
