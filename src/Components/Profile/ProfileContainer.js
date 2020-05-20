import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Profile from './Profile'
import {setUserProfile, getProfile} from './../../Redux/profile-reducer'
import { withRouter } from 'react-router-dom'

const ProfileContainer = (props) =>{
    
    useEffect(()=>{
        let userId = props.match.params.userId
        if(!userId){
            userId = 2;
        }
        props.getProfile(userId)
        // usersApi.getUserProfile(userId).then(data => {
        //         props.setUserProfile(data)
        //     })
    },[])
    
    
    return(
        <Profile {...props} profile = {props.profile}/>
    )
}




let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile,
    getProfile
})(WithUrlDataContainerComponent)