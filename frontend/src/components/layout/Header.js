import React from 'react';

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-dark">
      <a className="navbar-brand" href="#">
        Lead Manager
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto"></ul>
      </div>
    </nav>
  );
};
