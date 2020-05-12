import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/redux-store'
import StoreContext from './StoreContext';
import {Provider} from './StoreContext'
//import store from './Redux/store'


let rerenderEntireTree = (state) =>{
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
        {/* <App state = {state} dispatch={store.dispatch.bind(store)} store = {store}/> */}
        <App />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(()=>{
  let state = store.getState()
  rerenderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
