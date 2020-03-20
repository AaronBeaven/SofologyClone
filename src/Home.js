import React from 'react';
import './App.css';
import Router from './Router'
import FindAStore from './components/FindAStore'
import Login from './Login'

// import Navbar from './components/Navbar.js'
// import FindAStore from './components/FindAStore.js'
// import React, { Navbar }  from './components/Navbar';

class Home extends React.Component {
      state = {
          user: true
      }
      render() {
          return(
              <div>
                  {this.state.user ? (<Router />) : (<Login />)}
              </div>
    );
  }
}


export default Home;
