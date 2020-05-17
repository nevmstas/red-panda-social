import React from 'react'
import {User} from './User/User'
import s from './Users.module.css'
import {Loader} from '../Common/Loader/Loader'

//Presentation component
const Users = (props) =>{

    let pagesCount = props.totalUsersCount / props.pageSize
    let pages = []
    for(let i=1; i <= Math.ceil(pagesCount); i++){
        pages.push(i)
    }
    
    return(
        <div className={s.usersArea}>
            <div>
                {pages.map(p =>{
                    return <span onClick ={() => { props.onPageChanged(p) }} className={props.currentPage === p && s.selectedPage}>{p}</span>
                })}

            </div>
            { props.isFetching? <Loader /> : props.users.map(u => <User user = {u} follow = {props.follow} unFollow = {props.unFollow}/>)}
        </div>

    )
}

export default Users