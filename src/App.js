import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import './styles/App.scss';
import './styles/style.scss';
import CommentsView from './js/Views/CommentsView';
import commentsReducer from './js/reducers/comments-reducer';

const AppState = {
  comments: commentsReducer
};

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(combineReducers(AppState), persistedState, applyMiddleware(middleware));
store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});

class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h2>Simple comments section</h2>
        </header>
        <main>
          <CommentsView/>
        </main>
      </div>
      </Provider>
    );
  }
}

export default App;
