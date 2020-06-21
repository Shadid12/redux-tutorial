import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./store"; // import the store we created

// Subscribe to the store to listen to all changes in store state

const unsubscribe = store.subscribe(() => {
  console.log("---Listening -->>", store.getState());
});


// dispatch actions
store.dispatch({
  type: 'ADD_NEW_TASK',
  payload: {
    name: "some notification"
  }
});

unsubscribe();

store.dispatch({
  type: 'ADD_NEW_TASK',
  payload: {
    name: "some notification"
  }
});


store.dispatch({
  type: 'REMOVE_TASK',
  payload: {
    id: 1
  }
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);