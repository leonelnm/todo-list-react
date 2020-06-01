import React from "react";
import logo from '../logo.svg';

function Title() {

    return (
        <>
        <div className="App">
          <img className="App-logo" src={logo} alt="logo"></img>
        </div>
        <h1 className="title">
            TO-DO list <span aria-label="emoji" role="img">🔥</span>
        </h1>
        </>
    );

}

export default Title;