import React from 'react';
import s from './App.module.css';

import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import MyPosts from './Components/MyPosts/MyPosts';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import  { Route, BrowserRouter } from 'react-router-dom'



const App =(props) => {
  return( 
    <BrowserRouter>
    <div className={s.appWrapper}>
      <Header />
      <Navbar/>
      <div className={s.PostsProfileContainer}> 

        <MyPosts PostPage ={props.state.PostPage} dispatch = {props.dispatch}/>

        <Route path='/profile' render={() => <Profile /> }/>

        <Route path='/messages' render={() => <Dialogs 
          state = {props.state.messagesPage}
          /> }/>
      </div>

    </div>
    </BrowserRouter>
  )
}

export default App;
