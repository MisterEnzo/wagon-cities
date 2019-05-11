// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import { citiesReducer, activeCityReducer } from './reducers/cities_reducer';


const reducers = combineReducers({
  // cities: (state = null, action) => state
  cities : citiesReducer,
  activeCity: activeCityReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
