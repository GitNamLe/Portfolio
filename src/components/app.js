import React, { Component } from 'react';
import NavbarAndFriends from './navbar-and-friends';
import AboutMoi from './about-moi';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarAndFriends />
        <AboutMoi />
        <footer className="footer-bottom">
          <div className="container">2017 Copyright Nam Le</div>
        </footer>
      </div>
    );
  }
}
