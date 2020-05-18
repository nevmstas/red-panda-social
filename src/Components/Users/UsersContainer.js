import {connect} from 'react-redux'
import React, { useEffect } from 'react'
import Users from './Users'
import * as axios from 'axios';
import {unFollow, follow, setUsers, setCurrentPage, setTotalUsersСount, toggleIsFetching} from '../../Redux/users-reducer'
import {usersApi} from './../../api/api'

const UsersContainer = (props) =>{
    
    useEffect(()=>{
        props.toggleIsFetching(true)
        
        usersApi.getUsers(props.currentPage, props.pageSize).then(data => {
                props.setUsers(data.items)
                props.setTotalUsersСount(data.totalCount)
                props.toggleIsFetching(false)
            })
    },[])
    
    let onPageChanged = (pageNumber)=>{
        props.setCurrentPage(pageNumber)
        props.toggleIsFetching(true)

        usersApi.getUsers(pageNumber, props.pageSize).then(data => {
                props.setUsers(data.items)
                props.toggleIsFetching(false)
            })
    }

    return <Users onPageChanged = {onPageChanged} 
                    users = {props.users} 
                    totalUsersCount={props.totalUsersCount} 
                    pageSize={props.pageSize} 
                    currentPage = {props.currentPage}
                    follow = {props.follow}
                    unFollow = {props.unFollow}
                    isFetching = {props.isFetching}/>
}

let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps,{
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersСount,
    toggleIsFetching
})(UsersContainer) 
