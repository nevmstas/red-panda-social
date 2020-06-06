import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Profile from './Profile'
import {setUserProfile, getProfile, updateStatus, getStatus} from './../../Redux/profile-reducer'
import { withRouter, Redirect } from 'react-router-dom'
import {withAuthRedirect} from './../../hoc/withAuthRedirect'
import { compose } from 'redux'


const ProfileContainer = (props) =>{
    useEffect(()=>{
        let userId = props.match.params.userId
        if(!userId){
            userId =  props.authorizedUserId;
        }
        props.getProfile(userId)
        props.getStatus(userId)
    },[])
    
  

    return(
        <Profile {...props} profile = {props.profile} status = {props.status}/>
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        getProfile,
        updateStatus,
        getStatus
    }),
    withRouter,
    withAuthRedirect
    )(ProfileContainer)