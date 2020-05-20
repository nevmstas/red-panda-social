import {connect} from 'react-redux'
import React, { useEffect } from 'react'
import Users from './Users'
import {setCurrentPage,  toggleFollowingProgress, getUsers, follow, unFollow} from '../../Redux/users-reducer'


const UsersContainer = (props) =>{
    
    useEffect(()=>{
        props.getUsers(props.currentPage, props.pageSize);
    },[])
    
    let onPageChanged = (pageNumber)=>{
        props.setCurrentPage(pageNumber)
        props.getUsers(props.currentPage, props.pageSize);
    }

    return <Users onPageChanged = {onPageChanged} 
                    users = {props.users} 
                    totalUsersCount={props.totalUsersCount} 
                    pageSize={props.pageSize} 
                    currentPage = {props.currentPage}
                    follow = {props.follow}
                    unFollow = {props.unFollow}
                    isFetching = {props.isFetching}                    
                    followingInProgress = {props.followingInProgress}/>
}

let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        toggleFollowingProgress: state.usersPage.toggleFollowingProgress,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps,{
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    follow,
    unFollow
})(UsersContainer) 
