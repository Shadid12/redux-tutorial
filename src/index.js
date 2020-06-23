import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./store"; // import the store we created
import { Provider } from "react-redux"; // import the provider component from library

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap the App component with provider component 
        and pass our store as a property */
    }
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);