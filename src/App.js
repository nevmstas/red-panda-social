import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import MyPosts from './Components/MyPosts/MyPosts';

const App =() => {
  return( 
    <div className={'app-wrapper'}>
      <Header />
      <Navbar/>
      <div className={'content'}>
         <MyPosts />
      </div>
    </div>
  )
}

export default App;
