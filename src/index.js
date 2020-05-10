import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/state'


let rerenderEntireTree = (state) =>{
    ReactDOM.render(
      <React.StrictMode>
        <App state = {state} updateNewPostText = {store.updateNewPostText.bind(store)} addPost ={store.addPost.bind(store)}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
