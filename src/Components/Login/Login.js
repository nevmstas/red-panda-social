import React from 'react'
import s from './Login.module.css'


export const Login = (props) => {
    return(
        <div className={s.loginFormContainer}>
            <p className={s.heading}>Login</p>
            <LoginForm />
        </div>
    )
}

export const LoginForm = () =>{
    return (
        <form >
            <div>
                <input className={s.inputStyle} placeholder={"Login"}/>
            </div>
            <div>
                <input className={s.inputStyle} placeholder={"Password"}/>
            </div>
            <div>
                <input className = {s.rememberMeCb} type={"checkbox"}/>Remember me
            </div>
            <div>
                <button className={s.loginBtn}>Login</button>
            </div>
        </form>
    )
}



