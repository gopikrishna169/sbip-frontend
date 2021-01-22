import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './store/store';
import LandingPage from './pages/LandingPage/LandingPage.Container'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <LandingPage />
        </Router>
      </Provider>
    )
  }
}

export default App;
