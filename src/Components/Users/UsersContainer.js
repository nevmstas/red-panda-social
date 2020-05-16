import {connect} from 'react-redux'
import React, { useEffect } from 'react'
import Users from './Users'
import * as axios from 'axios';
import {unFollow, follow, setUsers, setCurrentPage, setTotalUsersСount} from '../../Redux/users-reducer'

const UsersContainer = (props) =>{
    
    useEffect(()=>{
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}&term=1`)
            .then(response => {
                props.setUsers(response.data.items)
                props.setTotalUsersСount(response.data.totalCount)
            })
    },[])
    
    let onPageChanged = (pageNumber)=>{
        props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`)
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    return <Users onPageChanged = {onPageChanged} 
                  users = {props.users} 
                  totalUsersCount={props.totalUsersCount} 
                  pageSize={props.pageSize} 
                  currentPage = {props.currentPage}
                  follow = {props.follow}
                  unFollow = {props.unFollow}/>
}

let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

export default connect(mapStateToProps,{
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersСount
})(UsersContainer) 
