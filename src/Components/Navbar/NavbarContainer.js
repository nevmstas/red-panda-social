import React, { useEffect } from 'react'
import Navbar from './Navbar'
import {connect} from 'react-redux'
import {getAuthUserData, logout} from './../../Redux/auth-reducer'



const NavbarContainer = (props) =>{
    // useEffect(()=>{
    //     props.getAuthUserData()
    // },[])
    
    
    return <Navbar {...props}/>
}

const mapStateToProps = (state)=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData, logout} )( NavbarContainer )