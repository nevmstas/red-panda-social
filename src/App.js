import React, { useEffect }from 'react';
import s from './App.module.css';
import NavbarContainer from './Components/Navbar/NavbarContainer'
import Header from './Components/Header/Header'
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer'
import  { Route, BrowserRouter, withRouter } from 'react-router-dom'
import MyPostsContainer from './Components/MyPosts/MyPostsContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import Login from './Components/Login/Login';

import { compose } from 'redux'
import {connect} from 'react-redux'

import {getAuthUserData} from  './Redux/auth-reducer'
import {initializeApp} from  './Redux/app-reducer'
//import {Login} from './Components/Login/Login';
import {Loader} from './Components/Common/Loader/Loader'



const App =(props) => {

  useEffect(()=>{
    props.initializeApp()
  },[])
  
  if(props.initalized) return <Loader />

  return( 
    
    <BrowserRouter>
    <div className={s.appWrapper}>
      <Header />
      <NavbarContainer/>
      <div className={s.PostsProfileContainer}> 

        <MyPostsContainer/>

        <Route path='/profile/:userId?' render={() => <ProfileContainer /> }/>

        <Route path='/messages' render={() => <DialogsContainer /> }/>

        <Route path='/users' render={() => <UsersContainer /> }/>

        <Route path='/login' render={() => <Login /> }/>
      </div>

    </div>
    </BrowserRouter>
  )
}

//export default App;


const mapStateToProps = (state) =>({
   initalized: state.app.initalized
})

export default connect(mapStateToProps, {initializeApp} )( App )
