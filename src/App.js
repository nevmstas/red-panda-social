import React from 'react';
import s from './App.module.css';
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import MyPosts from './Components/MyPosts/MyPosts';
import Profile from './Components/Profile/Profile'
import  { Route, BrowserRouter } from 'react-router-dom'



const App =() => {
  return( 
    <BrowserRouter>
    <div className={s.appWrapper}>
      <Header />
      <Navbar/>
      <div className={s.PostsProfileContainer}>        
        <MyPosts />
        <Route path='/profile' component={Profile}/>
      </div>

    </div>
    </BrowserRouter>
  )
}

export default App;
