import React, { useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import {connect} from 'react-redux'
import {setAuthUserData} from './../../Redux/auth-reducer'

const NavbarContainer = (props) =>{
    useEffect(()=>{
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        }).then(response => {
                debugger
                if(response.data.resultCode === 0){
                    let {Id, email, login} = response.data.data
                    props.setAuthUserData(Id, email, login);
                }
            })
    },[])
    
    
    return <Navbar {...props}/>
}


const mapStateToProps = (state)=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(NavbarContainer)