import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store'

let renderEntireState=(state)=>{
ReactDOM.render(
  <React.StrictMode>
    <App state={state}   dispatch={store.dispatch}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}


renderEntireState(store.getState())
store.subscribe(()=>{
  let state= store.getState()
  renderEntireState(state)
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
