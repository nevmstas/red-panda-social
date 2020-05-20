import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Profile from './Profile'
import {setUserProfile, getProfile} from './../../Redux/profile-reducer'
import { withRouter, Redirect } from 'react-router-dom'

const ProfileContainer = (props) =>{
    
    useEffect(()=>{
        let userId = props.match.params.userId
        if(!userId){
            userId = 2;
        }
        props.getProfile(userId)
    },[])
    
    if(!props.isAuth){
        return <Redirect to='/login'/>
    }

    return(
        <Profile {...props} profile = {props.profile}/>
    )
}




let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile,
    getProfile
})(WithUrlDataContainerComponent)