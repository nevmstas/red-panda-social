import React from 'react'
import s from './Login.module.css'
import {Formik, useFormik} from 'formik'

export const Login = (props) => {
    return(
        <div className={s.loginFormContainer}>
            <p className={s.heading}>Login</p>
            <LoginForm />
        </div>
    )
}

export const LoginForm = () =>{
    
    const formik  = useFormik({
        initialValues:{
            login:'',
            password:'',
            rememberMe: false
        },
        onSubmit: values =>{
            alert(JSON.stringify(values, null, 2))
    }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor='login'>Login</label>
                <input className={s.inputStyle} 
                        id='login'
                        name='login'
                        type='login'
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



