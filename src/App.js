import React from 'react';
import s from './App.module.css';
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import MyPosts from './Components/MyPosts/MyPosts';

const App =() => {
  return( 
    <div className={s.appWrapper}>
      <Header />
      <Navbar/>
      <MyPosts />
    </div>
  )
}

export default App;
