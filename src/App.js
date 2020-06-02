import React from 'react';
import s from './App.module.css';
import NavbarContainer from './Components/Navbar/NavbarContainer'
import Header from './Components/Header/Header'
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer'
import  { Route, BrowserRouter } from 'react-router-dom'
import MyPostsContainer from './Components/MyPosts/MyPostsContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import Login from './Components/Login/Login';
//import {Login} from './Components/Login/Login';



const App =(props) => {

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

export default App;
