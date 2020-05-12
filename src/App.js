import React from 'react';
import s from './App.module.css';

import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import MyPosts from './Components/MyPosts/MyPosts';
import Profile from './Components/Profile/Profile';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import  { Route, BrowserRouter } from 'react-router-dom'
import MyPostsContainer from './Components/MyPosts/MyPostsContainer';



const App =(props) => {

  return( 
    <BrowserRouter>
    <div className={s.appWrapper}>
      <Header />
      <Navbar/>
      <div className={s.PostsProfileContainer}> 

        <MyPostsContainer store={props.store}/>

        <Route path='/profile' render={() => <Profile /> }/>

        <Route path='/messages' render={() => <DialogsContainer store ={props.store}/> }/>
      </div>

    </div>
    </BrowserRouter>
  )
}

export default App;
