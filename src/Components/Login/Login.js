import React from 'react'
import s from './Login.module.css'
import {Formik, useFormik} from 'formik'
import {login} from  './../../Redux/auth-reducer'

import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

const Login = (props) => {
    if (props.isAuth){
        return <Redirect to = {'/profile'} />
    }
    return(
        <div className={s.loginFormContainer}>
            <p className={s.heading}>Login</p>
            <LoginForm login = {props.login}/>
        </div>
    )
}

const LoginForm = (props) =>{
    
    const formik  = useFormik({
        initialValues:{
            email:'',
            password:'',
            rememberMe: false
        },
        onSubmit: values =>{
           props.login(values.email, values.password, values.rememberMe)
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor='login'>Login</label>
                <input className={s.inputStyle} 
                        id='email'
                        name='email'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.login}/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input className={s.inputStyle}
                        id='password'
                        name='password'
                        type='password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                />
            </div>
            <div>
                <input className = {s.rememberMeCb} 
                        id='rememberMe'
                        name='rememberMe'
                        type={"checkbox"}
                        onChange={formik.handleChange}
                        value={formik.values.rememberMe}
                        />Remember me
            </div>
            <div>
                <button className={s.loginBtn} type='submit'>Login</button>
            </div>
        </form>
    )
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps , { login }) (Login)
