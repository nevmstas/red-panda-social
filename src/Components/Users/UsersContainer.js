import {connect} from 'react-redux'
import React, { useEffect } from 'react'
import Users from './Users'
import * as axios from 'axios';
import {unFollow, follow, setUsers, setCurrentPage, setTotalUsersСount, toggleIsFetching} from '../../Redux/users-reducer'


const UsersContainer = (props) =>{
    
    useEffect(()=>{
        props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}&term=1`)
            .then(response => {
                props.setUsers(response.data.items)
                props.setTotalUsersСount(response.data.totalCount)
                props.toggleIsFetching(false)
            })
    },[])
    
    let onPageChanged = (pageNumber)=>{
        props.setCurrentPage(pageNumber)
        props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`)
            .then(response => {
                props.setUsers(response.data.items)
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