import React from 'react';
import s from './App.module.css';
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import MyPosts from './Components/MyPosts/MyPosts';
import Profile from './Components/Profile/Profile'

const App =() => {
  return( 
    <div className={s.appWrapper}>
      <Header />
      <Navbar/>
      <div className={s.PostsProfileContainer}>
        <MyPosts />
        <Profile />
      </div>

    </div>
  )
}

export default App;
