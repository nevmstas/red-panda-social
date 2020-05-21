import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Profile from './Profile'
import {setUserProfile, getProfile} from './../../Redux/profile-reducer'
import { withRouter, Redirect } from 'react-router-dom'
import {withAuthRedirect} from './../../hoc/withAuthRedirect'

const ProfileContainer = (props) =>{
    
    useEffect(()=>{
        let userId = props.match.params.userId
        if(!userId){
            userId = 2;
        }
        props.getProfile(userId)
    },[])
    
  

    return(
        <Profile {...props} profile = {props.profile}/>
    )
}



let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})



let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {
    setUserProfile,
    getProfile
})(WithUrlDataContainerComponent)