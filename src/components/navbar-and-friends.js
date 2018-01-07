import React, { Component } from 'react';

export default function NavbarAndFriends(){
    return (
        <nav className="navbar navbar-inverse navbar-static-top">
            <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Welcome.</a>
            </div>
            <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                <li className="active"><a href="#">About Me</a></li>
                <li><a href="#">Projects</a></li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Contact Me</a>
                </li>
                </ul>
            </div>
            </div>

            <img src="../resources/meHot.JPG" width="100%" height="100%"/>
            <div className="center">
                <span id="fa-size" className="fa-stack fa-3x">
                    <i className="fa fa-comment-o fa-stack-2x"></i>
                    <strong className="fa-stack-1x comment-text">27</strong>
                </span>
            </div>
        </nav>
    )
}