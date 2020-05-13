import React from 'react'

export const User = (props)=>{
    return(
        <div>
            <img style={{height:'200px'}} src={props.user.photoUrl}/>
            <div>
                <div>{props.user.fullName}</div>
                <div>{props.user.status}</div>
            </div>

            <div>{props.user.location.country}</div>
            <div>{props.user.location.city}</div>
            {props.user.followed ? <button onClick = {() => {props.unFollow(props.user.id)}}>Unfollow</button>
                                 : <button onClick={() => {props.follow(props.user.id)}}>Follow</button> }         
        </div>
    )
}

