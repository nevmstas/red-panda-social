import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Profile from './Profile'
import {setUserProfile, getProfile} from './../../Redux/profile-reducer'
import { withRouter, Redirect } from 'react-router-dom'
import {withAuthRedirect} from './../../hoc/withAuthRedirect'
import { compose } from 'redux'

const ProfileContainer = (props) =>{
    
    useEffect(()=>{
        debugger
        let userId = props.match.params.userId
        if(!userId){
            userId = 11;
        }
        props.getProfile(userId)
    },[])
    
  

    return(
        <Profile {...props} profile = {props.profile}/>
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})



export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        getProfile
    }),
    withRouter,
    withAuthRedirect
    )(ProfileContainer)