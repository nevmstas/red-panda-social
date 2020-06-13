import React, { useState } from 'react'
import {User} from './User/User'
import s from './Users.module.css'
import {Loader} from '../Common/Loader/Loader'

//Presentation component
const Users = (props) =>{
    debugger
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for(let i=1; i <= pagesCount; i++){
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / props.portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1 
    const rightPortionPageNumber = portionNumber * props.portionSize
    
    return(
        <div className={s.usersArea}>
            
            <div>
                
                {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber-1)}>{'<-'}</button>}

                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p =>{
                        return <span onClick ={() => { props.onPageChanged(p) }} className={props.currentPage === p && s.selectedPage}>{p}</span>
                })}
               
                {portionNumber < portionCount && <button onClick={() => setPortionNumber(portionNumber+1)}>{'->'}</button>}
            </div>

            { props.isFetching? <Loader /> : props.users.map(u => <User user = {u} 
                                                                        follow = {props.follow} 
                                                                        unFollow = {props.unFollow} 
                                                                        toggleFollowingProgress={props.toggleFollowingProgress} 
                                                                        followingInProgress={props.followingInProgress}/>)}
        </div>

    )
}

export default Users